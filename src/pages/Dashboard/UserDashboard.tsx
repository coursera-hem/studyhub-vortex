import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { 
  BarChart, 
  Bookmark, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Award,
  BookOpen, 
  Play, 
  Star, 
  Trophy,
  Settings,
  Bell,
  Heart,
  GraduationCap,
  Users,
  MessageSquare
} from "lucide-react";

// Mock user data
const userData = {
  name: "John Smith",
  email: "john.smith@example.com",
  avatar: "https://source.unsplash.com/random/100x100/?portrait,man",
  joinedDate: "January 2023",
  completedCourses: 3,
  inProgressCourses: 2,
  savedCourses: 5,
  certificates: 2,
  totalHoursLearned: 87,
  level: "Intermediate",
  xp: 2570,
  nextLevelXp: 5000,
  streak: 14,
  achievements: [
    { name: "Fast Learner", icon: <Clock className="h-4 w-4" />, date: "Mar 15, 2023" },
    { name: "2-Week Streak", icon: <Trophy className="h-4 w-4" />, date: "Apr 2, 2023" },
    { name: "Course Champion", icon: <Award className="h-4 w-4" />, date: "May 12, 2023" },
  ]
};

// Mock enrolled courses data
const enrolledCourses = [
  {
    id: "1",
    title: "Complete Web Development 2023: From Zero to Hero",
    instructor: "David Miller",
    thumbnail: "https://source.unsplash.com/random/600x400/?programming,web",
    progress: 78,
    lastAccessed: "2 days ago",
    status: "in-progress",
    nextLesson: "JavaScript Events and Event Handling",
    timeRemaining: "12h 30m",
    completedLessons: 28,
    totalLessons: 36
  },
  {
    id: "2",
    title: "UI/UX Design Masterclass: Create Beautiful Interfaces",
    instructor: "Alex Wong",
    thumbnail: "https://source.unsplash.com/random/600x400/?design,ui",
    progress: 42,
    lastAccessed: "Yesterday",
    status: "in-progress",
    nextLesson: "Creating Wireframes",
    timeRemaining: "16h 45m",
    completedLessons: 15,
    totalLessons: 36
  },
  {
    id: "3",
    title: "Digital Marketing: Complete Strategy for 2023",
    instructor: "Emma Garcia",
    thumbnail: "https://source.unsplash.com/random/600x400/?marketing,digital",
    progress: 100,
    lastAccessed: "2 weeks ago",
    status: "completed",
    completedLessons: 32,
    totalLessons: 32,
    certificateId: "DM-2023-56789"
  },
  {
    id: "4",
    title: "Photography Masterclass: Complete Guide to Photography",
    instructor: "Jessica Lee",
    thumbnail: "https://source.unsplash.com/random/600x400/?photography,camera",
    progress: 100,
    lastAccessed: "1 month ago",
    status: "completed",
    completedLessons: 22,
    totalLessons: 22,
    certificateId: "PH-2023-12345"
  },
  {
    id: "5",
    title: "Advanced Excel: Formulas, Macros, and Data Analysis",
    instructor: "Patricia Anderson",
    thumbnail: "https://source.unsplash.com/random/600x400/?excel,spreadsheet",
    progress: 100,
    lastAccessed: "3 months ago",
    status: "completed",
    completedLessons: 24,
    totalLessons: 24,
    certificateId: "EX-2023-67890"
  }
];

// Mock saved courses data
const savedCourses = [
  {
    id: "6",
    title: "Learn React & Redux: Building Enterprise Applications",
    instructor: "Thomas Wilson",
    thumbnail: "https://source.unsplash.com/random/600x400/?react,javascript",
    price: 18.99,
    originalPrice: 109.99,
    savedOn: "3 days ago"
  },
  {
    id: "7",
    title: "iOS App Development with Swift: Build 15 Real Apps",
    instructor: "Robert Zhang",
    thumbnail: "https://source.unsplash.com/random/600x400/?ios,mobile",
    price: 19.99,
    originalPrice: 119.99,
    savedOn: "1 week ago"
  },
  {
    id: "8",
    title: "Introduction to Artificial Intelligence & Machine Learning",
    instructor: "Maria Lopez",
    thumbnail: "https://source.unsplash.com/random/600x400/?ai,robot",
    price: 20.99,
    originalPrice: 139.99,
    savedOn: "2 weeks ago"
  },
  {
    id: "9",
    title: "Complete SEO Course: Rank Your Website at the Top",
    instructor: "Kevin Moore",
    thumbnail: "https://source.unsplash.com/random/600x400/?seo,marketing",
    price: 16.99,
    originalPrice: 84.99,
    savedOn: "3 weeks ago"
  },
  {
    id: "10",
    title: "Guitar Fundamentals: From First Note to Songs",
    instructor: "James Wilson",
    thumbnail: "https://source.unsplash.com/random/600x400/?music,guitar",
    price: 11.99,
    originalPrice: 49.99,
    savedOn: "1 month ago"
  }
];

// Mock notifications data
const notifications = [
  {
    id: "1",
    type: "course-update",
    title: "Course Updated",
    message: "Complete Web Development has been updated with new videos",
    time: "2 hours ago",
    read: false
  },
  {
    id: "2",
    type: "achievement",
    title: "Achievement Unlocked",
    message: "You've earned the '2-Week Streak' achievement!",
    time: "1 day ago",
    read: false
  },
  {
    id: "3",
    type: "certificate",
    title: "Certificate Available",
    message: "Your certificate for Digital Marketing is ready to download",
    time: "3 days ago",
    read: true
  },
  {
    id: "4",
    type: "reminder",
    title: "Study Reminder",
    message: "You haven't completed a lesson in UI/UX Design this week",
    time: "5 days ago",
    read: true
  }
];

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">{userData.name}</h1>
                <p className="text-muted-foreground">Member since {userData.joinedDate}</p>
                <div className="flex items-center mt-1">
                  <Badge variant="outline" className="mr-2">
                    <Trophy className="h-3 w-3 mr-1 text-amber-500" />
                    Level: {userData.level}
                  </Badge>
                  <Badge variant="outline">
                    <Trophy className="h-3 w-3 mr-1 text-brand-500" />
                    {userData.streak} Day Streak
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-9">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm" className="h-9">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-2 bg-brand-50 rounded-full mb-3">
                  <BookOpen className="h-6 w-6 text-brand-500" />
                </div>
                <h3 className="text-3xl font-bold">{userData.inProgressCourses}</h3>
                <p className="text-muted-foreground">Courses in Progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-2 bg-green-50 rounded-full mb-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold">{userData.completedCourses}</h3>
                <p className="text-muted-foreground">Completed Courses</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-2 bg-purple-50 rounded-full mb-3">
                  <Award className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-3xl font-bold">{userData.certificates}</h3>
                <p className="text-muted-foreground">Certificates Earned</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-2 bg-blue-50 rounded-full mb-3">
                  <Clock className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-3xl font-bold">{userData.totalHoursLearned}</h3>
                <p className="text-muted-foreground">Hours of Learning</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Your Progress</CardTitle>
              <CardDescription>Level up by completing courses and lessons</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">XP: {userData.xp}/{userData.nextLevelXp}</span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round((userData.xp / userData.nextLevelXp) * 100)}%
                  </span>
                </div>
                <Progress value={(userData.xp / userData.nextLevelXp) * 100} className="h-2" />
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>Current: {userData.level}</span>
                  <span>Next: Advanced</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Trophy className="h-4 w-4 mr-1 text-brand-500" />
                <span className="mr-1">{userData.streak} day streak!</span>
                <span>Keep it up to earn more XP.</span>
              </div>
            </CardFooter>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="my-courses">My Courses</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Continue Learning</CardTitle>
                    <CardDescription>Pick up where you left off</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {enrolledCourses
                      .filter(course => course.status === "in-progress")
                      .slice(0, 2)
                      .map(course => (
                        <div key={course.id} className="flex flex-col sm:flex-row gap-4">
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full sm:w-32 h-24 object-cover rounded-md"
                          />
                          <div className="flex-1 space-y-2">
                            <div>
                              <h3 className="font-medium line-clamp-1">{course.title}</h3>
                              <p className="text-sm text-muted-foreground">{course.instructor}</p>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between items-center text-xs">
                                <span>{course.progress}% complete</span>
                                <span>
                                  {course.completedLessons}/{course.totalLessons} lessons
                                </span>
                              </div>
                              <Progress value={course.progress} className="h-1" />
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-brand-500">Next: {course.nextLesson}</span>
                              <Link to={`/courses/${course.id}`}>
                                <Button size="sm">
                                  <Play className="h-3 w-3 mr-1" /> Resume
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                  <CardFooter>
                    <Link to="/my-courses" className="w-full">
                      <Button variant="outline" className="w-full">
                        View All My Courses
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Notifications</CardTitle>
                    <CardDescription>Stay up to date</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {notifications.slice(0, 3).map(notification => (
                      <div
                        key={notification.id}
                        className={`p-3 rounded-lg ${
                          notification.read ? "bg-background" : "bg-muted"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 rounded-full bg-brand-50">
                            {notification.type === "course-update" ? (
                              <BookOpen className="h-4 w-4 text-brand-500" />
                            ) : notification.type === "achievement" ? (
                              <Trophy className="h-4 w-4 text-amber-500" />
                            ) : notification.type === "certificate" ? (
                              <Award className="h-4 w-4 text-purple-500" />
                            ) : (
                              <Bell className="h-4 w-4 text-blue-500" />
                            )}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">{notification.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">
                      View All Notifications
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended For You</CardTitle>
                  <CardDescription>Based on your interests and learning history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {savedCourses.slice(0, 3).map(course => (
                      <Link key={course.id} to={`/courses/${course.id}`}>
                        <div className="rounded-lg overflow-hidden border group hover:shadow-md transition-shadow">
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-36 object-cover"
                          />
                          <div className="p-3 space-y-2">
                            <h3 className="font-medium line-clamp-2 group-hover:text-brand-500">
                              {course.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{course.instructor}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <span className="font-bold mr-2">${course.price}</span>
                                <span className="text-sm text-muted-foreground line-through">
                                  ${course.originalPrice}
                                </span>
                              </div>
                              <Button variant="ghost" size="sm" className="h-8 px-2">
                                <Heart className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/courses" className="w-full">
                    <Button variant="outline" className="w-full">
                      Browse More Courses
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="my-courses" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>In Progress Courses</CardTitle>
                    <CardDescription>Continue your learning journey</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {enrolledCourses
                      .filter(course => course.status === "in-progress")
                      .map(course => (
                        <div key={course.id} className="flex flex-col gap-4">
                          <div className="flex gap-4">
                            <img
                              src={course.thumbnail}
                              alt={course.title}
                              className="w-20 h-16 object-cover rounded-md"
                            />
                            <div className="flex-1">
                              <h3 className="font-medium">{course.title}</h3>
                              <p className="text-sm text-muted-foreground">{course.instructor}</p>
                              <div className="flex items-center text-xs text-muted-foreground mt-1">
                                <Clock className="h-3 w-3 mr-1" />
                                Last accessed {course.lastAccessed}
                              </div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between items-center text-xs">
                              <span>{course.progress}% complete</span>
                              <span>
                                {course.completedLessons}/{course.totalLessons} lessons
                              </span>
                            </div>
                            <Progress value={course.progress} className="h-1" />
                          </div>
                          <div className="flex justify-between gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Bookmark className="h-3 w-3 mr-1" /> Details
                            </Button>
                            <Link to={`/courses/${course.id}`} className="flex-1">
                              <Button size="sm" className="w-full">
                                <Play className="h-3 w-3 mr-1" /> Resume
                              </Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Completed Courses</CardTitle>
                    <CardDescription>Your learning achievements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {enrolledCourses
                      .filter(course => course.status === "completed")
                      .map(course => (
                        <div key={course.id} className="flex flex-col gap-4">
                          <div className="flex gap-4">
                            <img
                              src={course.thumbnail}
                              alt={course.title}
                              className="w-20 h-16 object-cover rounded-md"
                            />
                            <div className="flex-1">
                              <h3 className="font-medium">{course.title}</h3>
                              <p className="text-sm text-muted-foreground">{course.instructor}</p>
                              <div className="flex items-center text-xs mt-1">
                                <Badge variant="outline" className="text-green-500 border-green-200 bg-green-50">
                                  <CheckCircle className="h-3 w-3 mr-1" /> Completed
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between gap-2">
                            <Link to={`/courses/${course.id}`} className="flex-1">
                              <Button variant="outline" size="sm" className="w-full">
                                <Play className="h-3 w-3 mr-1" /> Review
                              </Button>
                            </Link>
                            <Link to={`/certificates/${course.certificateId}`} className="flex-1">
                              <Button size="sm" className="w-full">
                                <Award className="h-3 w-3 mr-1" /> Certificate
                              </Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="saved" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Saved Courses</CardTitle>
                  <CardDescription>Courses you've bookmarked for later</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {savedCourses.map(course => (
                      <div key={course.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4 space-y-3">
                          <div>
                            <h3 className="font-medium line-clamp-2">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">{course.instructor}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-bold mr-2">${course.price}</span>
                              <span className="text-sm text-muted-foreground line-through">
                                ${course.originalPrice}
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Saved {course.savedOn}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Bookmark className="h-3 w-3 mr-1" />
                              Remove
                            </Button>
                            <Link to={`/courses/${course.id}`} className="flex-1">
                              <Button size="sm" className="w-full">
                                View
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Your Achievements</CardTitle>
                    <CardDescription>Badges and milestones you've earned</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {userData.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="border rounded-lg p-4 flex flex-col items-center text-center"
                        >
                          <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mb-3">
                            {achievement.icon}
                          </div>
                          <h3 className="font-medium">{achievement.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            Earned on {achievement.date}
                          </p>
                        </div>
                      ))}
                      {/* Locked achievements */}
                      <div className="border rounded-lg p-4 flex flex-col items-center text-center opacity-50">
                        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                          <Star className="h-6 w-6 text-slate-400" />
                        </div>
                        <h3 className="font-medium">First Review</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Leave a review on a completed course
                        </p>
                      </div>
                      <div className="border rounded-lg p-4 flex flex-col items-center text-center opacity-50">
                        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                          <MessageSquare className="h-6 w-6 text-slate-400" />
                        </div>
                        <h3 className="font-medium">Discussion Starter</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Participate in course discussions
                        </p>
                      </div>
                      <div className="border rounded-lg p-4 flex flex-col items-center text-center opacity-50">
                        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                          <Users className="h-6 w-6 text-slate-400" />
                        </div>
                        <h3 className="font-medium">Study Group</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Join or create a study group
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Certificates</CardTitle>
                    <CardDescription>Your earned credentials</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {enrolledCourses
                      .filter(course => course.status === "completed")
                      .map(course => (
                        <div key={course.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center">
                              <GraduationCap className="h-8 w-8 text-brand-500 mr-3" />
                              <div>
                                <h3 className="font-medium line-clamp-1">{course.title}</h3>
                                <p className="text-xs text-muted-foreground">
                                  Certificate ID: {course.certificateId}
                                </p>
                              </div>
                            </div>
                          </div>
                          <Separator className="my-3" />
                          <div className="flex justify-between items-center">
                            <div className="text-xs text-muted-foreground">
                              Completed all {course.totalLessons} lessons
                            </div>
                            <Button size="sm">
                              <Award className="h-3 w-3 mr-1" /> View
                            </Button>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
