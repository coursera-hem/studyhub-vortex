
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CourseCard, { CourseProps } from "../courses/CourseCard";

const popularCourses: CourseProps[] = [
  {
    id: "1",
    title: "Complete Web Development 2023: From Zero to Hero",
    instructor: "David Miller",
    thumbnail: "https://source.unsplash.com/random/600x400/?programming,web",
    price: 16.99,
    originalPrice: 89.99,
    rating: 4.7,
    ratingCount: 12843,
    level: "All Levels",
    duration: "52h",
    students: 146350,
    isBestseller: true,
    category: "Programming"
  },
  {
    id: "2",
    title: "Master Data Science & Machine Learning with Python",
    instructor: "Sarah Johnson",
    thumbnail: "https://source.unsplash.com/random/600x400/?data,code",
    price: 19.99,
    originalPrice: 129.99,
    rating: 4.8,
    ratingCount: 8529,
    level: "Intermediate",
    duration: "44h",
    students: 97823,
    isBestseller: true,
    category: "Data Science"
  },
  {
    id: "3",
    title: "UI/UX Design Masterclass: Create Beautiful Interfaces",
    instructor: "Alex Wong",
    thumbnail: "https://source.unsplash.com/random/600x400/?design,ui",
    price: 14.99,
    originalPrice: 69.99,
    rating: 4.6,
    ratingCount: 5823,
    level: "Beginner",
    duration: "28h",
    students: 58491,
    category: "Design"
  },
  {
    id: "4",
    title: "Financial Analyst: Investment & Business Analysis",
    instructor: "Michael Brown",
    thumbnail: "https://source.unsplash.com/random/600x400/?finance,business",
    price: 17.99,
    originalPrice: 99.99,
    rating: 4.5,
    ratingCount: 3942,
    level: "Intermediate",
    duration: "36h",
    students: 42358,
    category: "Finance"
  },
  {
    id: "5",
    title: "Digital Marketing: Complete Strategy for 2023",
    instructor: "Emma Garcia",
    thumbnail: "https://source.unsplash.com/random/600x400/?marketing,digital",
    price: 15.99,
    originalPrice: 79.99,
    rating: 4.7,
    ratingCount: 6254,
    level: "All Levels",
    duration: "32h",
    students: 78234,
    category: "Business"
  },
  {
    id: "6",
    title: "Learn React & Redux: Building Enterprise Applications",
    instructor: "Thomas Wilson",
    thumbnail: "https://source.unsplash.com/random/600x400/?react,javascript",
    price: 18.99,
    originalPrice: 109.99,
    rating: 4.9,
    ratingCount: 7521,
    level: "Intermediate",
    duration: "40h",
    students: 82467,
    isNew: true,
    category: "Programming"
  },
  {
    id: "7",
    title: "Photography Masterclass: Complete Guide to Photography",
    instructor: "Jessica Lee",
    thumbnail: "https://source.unsplash.com/random/600x400/?photography,camera",
    price: 13.99,
    originalPrice: 69.99,
    rating: 4.8,
    ratingCount: 4362,
    level: "Beginner",
    duration: "22h",
    students: 39875,
    category: "Photography"
  },
  {
    id: "8",
    title: "iOS App Development with Swift: Build 15 Real Apps",
    instructor: "Robert Zhang",
    thumbnail: "https://source.unsplash.com/random/600x400/?ios,mobile",
    price: 19.99,
    originalPrice: 119.99,
    rating: 4.7,
    ratingCount: 5843,
    level: "Intermediate",
    duration: "48h",
    students: 52486,
    isNew: true,
    category: "Programming"
  }
];

const PopularCoursesSection = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter">Popular Courses</h2>
            <p className="text-muted-foreground mt-1">Trending courses picked by our students</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/courses">
              <Button variant="outline">View All Courses</Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;
