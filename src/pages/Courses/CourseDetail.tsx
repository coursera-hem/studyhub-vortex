
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Star, Clock, Users, BarChart, Play, CheckCircle, 
  Award, Globe, FileText, Download, MessageSquare, 
  ShoppingCart, Heart 
} from "lucide-react";

// Mock data for a single course
const courseData = {
  id: "1",
  title: "Complete Web Development 2023: From Zero to Hero",
  description: 
    "Learn web development from scratch. This comprehensive course covers HTML, CSS, JavaScript, React, Node.js, and more. By the end, you'll be able to build complete web applications and launch your career as a web developer.",
  instructor: {
    name: "David Miller",
    title: "Senior Web Developer",
    bio: "10+ years of experience in web development. Former lead developer at major tech companies.",
    avatar: "https://source.unsplash.com/random/100x100/?portrait,man",
    rating: 4.8,
    students: 285632,
    courses: 12
  },
  thumbnail: "https://source.unsplash.com/random/1200x600/?programming,web",
  price: 16.99,
  originalPrice: 89.99,
  discount: 81,
  rating: 4.7,
  ratingCount: 12843,
  students: 146350,
  lastUpdated: "May 2023",
  language: "English",
  level: "All Levels",
  duration: "52 hours",
  lectures: 358,
  isBestseller: true,
  includes: [
    "52 hours on-demand video",
    "155 downloadable resources",
    "15 coding exercises",
    "Full lifetime access",
    "Access on mobile and TV",
    "Certificate of completion"
  ],
  whatYouWillLearn: [
    "Build websites and web applications using HTML, CSS and JavaScript",
    "Master frontend development with React",
    "Build backend applications with Node.js and Express",
    "Work with databases like MongoDB and MySQL",
    "Implement authentication and authorization using JWT",
    "Deploy your applications to the web",
    "Create responsive layouts for all devices",
    "Implement modern JavaScript practices and features"
  ],
  requirements: [
    "No prior programming knowledge needed - we'll teach you everything from scratch",
    "A computer with internet access",
    "Basic computer skills"
  ],
  curriculum: [
    {
      title: "Introduction to Web Development",
      duration: "3 hours",
      lectures: 12,
      lessons: [
        { title: "Welcome to the Course", duration: "5:22", preview: true },
        { title: "How the Internet Works", duration: "12:43", preview: true },
        { title: "Setting Up Your Development Environment", duration: "18:12", preview: false },
        { title: "Web Development Overview", duration: "15:34", preview: false }
      ]
    },
    {
      title: "HTML Fundamentals",
      duration: "5 hours",
      lectures: 22,
      lessons: [
        { title: "HTML Document Structure", duration: "14:22", preview: true },
        { title: "HTML Tags and Elements", duration: "22:43", preview: false },
        { title: "Working with Text", duration: "18:12", preview: false },
        { title: "HTML Lists", duration: "12:34", preview: false },
        { title: "HTML Links", duration: "16:54", preview: false }
      ]
    },
    {
      title: "CSS Styling",
      duration: "8 hours",
      lectures: 35,
      lessons: [
        { title: "Introduction to CSS", duration: "10:22", preview: false },
        { title: "CSS Selectors", duration: "20:43", preview: false },
        { title: "Box Model", duration: "25:12", preview: false },
        { title: "Flexbox Layout", duration: "32:34", preview: false },
        { title: "CSS Grid Layout", duration: "28:54", preview: false }
      ]
    },
    {
      title: "JavaScript Basics",
      duration: "10 hours",
      lectures: 48,
      lessons: [
        { title: "JavaScript Introduction", duration: "8:22", preview: false },
        { title: "Variables and Data Types", duration: "18:43", preview: false },
        { title: "Functions and Scope", duration: "22:12", preview: false },
        { title: "DOM Manipulation", duration: "24:34", preview: false },
        { title: "Events and Event Handling", duration: "19:54", preview: false }
      ]
    }
  ]
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // In a real app, you would fetch the course data based on courseId
  const course = courseData;

  return (
    <Layout>
      <div className="bg-slate-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  {course.title}
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  {course.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  {course.isBestseller && (
                    <Badge className="bg-amber-500 hover:bg-amber-600">Bestseller</Badge>
                  )}
                  <div className="flex items-center">
                    <span className="text-amber-500 font-bold mr-1">
                      {course.rating.toFixed(1)}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(course.rating)
                              ? "text-amber-500 fill-amber-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-1">
                      ({course.ratingCount.toLocaleString()} ratings)
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students.toLocaleString()} students
                  </div>
                </div>
                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                  <span>Created by </span>
                  <a href="#instructor" className="text-brand-500 hover:underline ml-1">
                    {course.instructor.name}
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Last updated {course.lastUpdated}
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-1" />
                    {course.language}
                  </div>
                  <div className="flex items-center">
                    <BarChart className="h-4 w-4 mr-1" />
                    {course.level}
                  </div>
                </div>
              </div>

              <div className="md:hidden">
                <CourseCard course={course} />
              </div>

              <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-brand-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                    <ul className="space-y-2">
                      {course.requirements.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-brand-500 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">This Course Includes</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.includes.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-brand-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="curriculum" className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">Course Content</h3>
                      <div className="text-sm text-muted-foreground">
                        {course.lectures} lectures • {course.duration} total
                      </div>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                      {course.curriculum.map((section, index) => (
                        <AccordionItem key={index} value={`section-${index}`}>
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full text-left">
                              <span className="font-medium">{section.title}</span>
                              <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
                                {section.lectures} lectures • {section.duration}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2">
                              {section.lessons.map((lesson, lessonIndex) => (
                                <div 
                                  key={lessonIndex} 
                                  className="flex items-center justify-between p-2 hover:bg-slate-100 rounded-md"
                                >
                                  <div className="flex items-center">
                                    <Play className="h-4 w-4 mr-2 text-brand-500" />
                                    <span className={lesson.preview ? "" : "text-muted-foreground"}>
                                      {lesson.title}
                                    </span>
                                    {lesson.preview && (
                                      <Badge variant="outline" className="ml-2 font-normal">
                                        Preview
                                      </Badge>
                                    )}
                                  </div>
                                  <span className="text-sm text-muted-foreground">
                                    {lesson.duration}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>
                <TabsContent value="instructor" className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="rounded-full h-24 w-24 object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                      <p className="text-muted-foreground">{course.instructor.title}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-amber-500 fill-amber-500" />
                          {course.instructor.rating} Instructor Rating
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-1" />
                          {course.instructor.courses} Courses
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {course.instructor.students.toLocaleString()} Students
                        </div>
                      </div>
                      <p className="mt-4">{course.instructor.bio}</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="hidden md:block">
              <CourseCard course={course} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface CourseCardProps {
  course: typeof courseData;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card className="sticky top-24">
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full aspect-video object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <Button variant="outline" className="bg-white text-gray-900 hover:bg-white/90">
            <Play className="h-6 w-6 mr-2 fill-gray-900" /> Preview Course
          </Button>
        </div>
      </div>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">${course.price.toFixed(2)}</div>
            <div className="text-muted-foreground line-through">
              ${course.originalPrice.toFixed(2)}
            </div>
          </div>
          <div className="text-sm text-muted-foreground flex justify-between">
            <span>{course.discount}% off</span>
            <span>5 days left at this price</span>
          </div>
          <Progress value={83} className="h-1 mt-1" />
        </div>

        <div className="space-y-2">
          <Button className="w-full bg-brand-500 hover:bg-brand-600">
            <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
          </Button>
          <Button variant="outline" className="w-full">
            <Heart className="h-4 w-4 mr-2" /> Wishlist
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          30-Day Money-Back Guarantee
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">This course includes:</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-sm">
              <Play className="h-4 w-4 mr-2 text-muted-foreground" />
              {course.duration} on-demand video
            </li>
            <li className="flex items-center text-sm">
              <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
              {course.lectures} lessons
            </li>
            <li className="flex items-center text-sm">
              <Download className="h-4 w-4 mr-2 text-muted-foreground" />
              Downloadable resources
            </li>
            <li className="flex items-center text-sm">
              <MessageSquare className="h-4 w-4 mr-2 text-muted-foreground" />
              Full lifetime access
            </li>
            <li className="flex items-center text-sm">
              <Award className="h-4 w-4 mr-2 text-muted-foreground" />
              Certificate of completion
            </li>
          </ul>
        </div>

        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="sm">
            Share
          </Button>
          <Button variant="ghost" size="sm">
            Gift
          </Button>
          <Button variant="ghost" size="sm">
            Apply Coupon
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseDetail;
