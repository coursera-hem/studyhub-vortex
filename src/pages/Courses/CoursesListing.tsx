
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import CourseCard, { CourseProps } from "@/components/courses/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SlidersHorizontal, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Mock courses data
const coursesData: CourseProps[] = [
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
  },
  {
    id: "9",
    title: "Advanced Excel: Formulas, Macros, and Data Analysis",
    instructor: "Patricia Anderson",
    thumbnail: "https://source.unsplash.com/random/600x400/?excel,spreadsheet",
    price: 12.99,
    originalPrice: 59.99,
    rating: 4.6,
    ratingCount: 7532,
    level: "Intermediate",
    duration: "24h",
    students: 68254,
    category: "Business"
  },
  {
    id: "10",
    title: "Guitar Fundamentals: From First Note to Songs",
    instructor: "James Wilson",
    thumbnail: "https://source.unsplash.com/random/600x400/?music,guitar",
    price: 11.99,
    originalPrice: 49.99,
    rating: 4.9,
    ratingCount: 3265,
    level: "Beginner",
    duration: "18h",
    students: 45321,
    category: "Music"
  },
  {
    id: "11",
    title: "Introduction to Artificial Intelligence & Machine Learning",
    instructor: "Maria Lopez",
    thumbnail: "https://source.unsplash.com/random/600x400/?ai,robot",
    price: 20.99,
    originalPrice: 139.99,
    rating: 4.8,
    ratingCount: 4872,
    level: "Intermediate",
    duration: "38h",
    students: 56482,
    isNew: true,
    category: "Data Science"
  },
  {
    id: "12",
    title: "Complete SEO Course: Rank Your Website at the Top",
    instructor: "Kevin Moore",
    thumbnail: "https://source.unsplash.com/random/600x400/?seo,marketing",
    price: 16.99,
    originalPrice: 84.99,
    rating: 4.5,
    ratingCount: 3654,
    level: "All Levels",
    duration: "30h",
    students: 48752,
    category: "Business"
  }
];

// Filter options
const categories = [
  "Programming",
  "Data Science",
  "Business",
  "Finance",
  "Design",
  "Photography",
  "Music",
];
const levels = ["Beginner", "Intermediate", "Advanced", "All Levels"];
const ratings = ["4.5 & up", "4.0 & up", "3.5 & up", "3.0 & up"];
const durations = ["0-1 hour", "1-3 hours", "3-6 hours", "6-17 hours", "17+ hours"];

const CoursesListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<{
    categories: string[];
    levels: string[];
    ratings: string[];
    priceRange: [number, number];
  }>({
    categories: [],
    levels: [],
    ratings: [],
    priceRange: [0, 200],
  });
  const [sortOption, setSortOption] = useState("featured");
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const filteredCourses = coursesData.filter((course) => {
    // Search filter
    if (
      searchTerm &&
      !course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Category filter
    if (
      selectedFilters.categories.length > 0 &&
      course.category &&
      !selectedFilters.categories.includes(course.category)
    ) {
      return false;
    }

    // Level filter
    if (
      selectedFilters.levels.length > 0 &&
      !selectedFilters.levels.includes(course.level)
    ) {
      return false;
    }

    // Rating filter
    if (selectedFilters.ratings.length > 0) {
      const minRating = Math.min(
        ...selectedFilters.ratings.map((r) => parseFloat(r.split(" ")[0]))
      );
      if (course.rating < minRating) {
        return false;
      }
    }

    // Price range filter
    if (
      course.price < selectedFilters.priceRange[0] ||
      course.price > selectedFilters.priceRange[1]
    ) {
      return false;
    }

    return true;
  });

  // Sort filtered courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortOption) {
      case "most-popular":
        return b.students - a.students;
      case "highest-rated":
        return b.rating - a.rating;
      case "newest":
        return b.isNew ? 1 : -1;
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      default:
        return 0; // featured
    }
  });

  const toggleCategory = (category: string) => {
    setSelectedFilters((prev) => {
      const categories = prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories };
    });
  };

  const toggleLevel = (level: string) => {
    setSelectedFilters((prev) => {
      const levels = prev.levels.includes(level)
        ? prev.levels.filter((l) => l !== level)
        : [...prev.levels, level];
      return { ...prev, levels };
    });
  };

  const toggleRating = (rating: string) => {
    setSelectedFilters((prev) => {
      const ratings = prev.ratings.includes(rating)
        ? prev.ratings.filter((r) => r !== rating)
        : [...prev.ratings, rating];
      return { ...prev, ratings };
    });
  };

  const resetFilters = () => {
    setSelectedFilters({
      categories: [],
      levels: [],
      ratings: [],
      priceRange: [0, 200],
    });
    setSearchTerm("");
  };

  const totalFiltersApplied =
    selectedFilters.categories.length +
    selectedFilters.levels.length +
    selectedFilters.ratings.length +
    (selectedFilters.priceRange[0] > 0 || selectedFilters.priceRange[1] < 200 ? 1 : 0);

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">All Courses</h1>
            <p className="text-muted-foreground">
              Browse our collection of courses to elevate your skills
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Filters - Desktop */}
            <div className="hidden md:block w-72 space-y-6 sticky top-24">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Filters</h3>
                {totalFiltersApplied > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetFilters}
                    className="h-8 text-brand-500"
                  >
                    Clear all
                  </Button>
                )}
              </div>

              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>

              <Accordion type="multiple" className="w-full space-y-2">
                <AccordionItem value="category" className="border-b-0">
                  <AccordionTrigger className="py-2 hover:no-underline">
                    <span className="font-medium">Category</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div
                          key={category}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedFilters.categories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <label
                            htmlFor={`category-${category}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="level" className="border-b-0">
                  <AccordionTrigger className="py-2 hover:no-underline">
                    <span className="font-medium">Level</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div className="space-y-2">
                      {levels.map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          <Checkbox
                            id={`level-${level}`}
                            checked={selectedFilters.levels.includes(level)}
                            onCheckedChange={() => toggleLevel(level)}
                          />
                          <label
                            htmlFor={`level-${level}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rating" className="border-b-0">
                  <AccordionTrigger className="py-2 hover:no-underline">
                    <span className="font-medium">Rating</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div className="space-y-2">
                      {ratings.map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <Checkbox
                            id={`rating-${rating}`}
                            checked={selectedFilters.ratings.includes(rating)}
                            onCheckedChange={() => toggleRating(rating)}
                          />
                          <label
                            htmlFor={`rating-${rating}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {rating}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="price" className="border-b-0">
                  <AccordionTrigger className="py-2 hover:no-underline">
                    <span className="font-medium">Price</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <div className="space-y-6">
                      <Slider
                        defaultValue={[0, 200]}
                        max={200}
                        step={5}
                        value={selectedFilters.priceRange}
                        onValueChange={(value) => 
                          setSelectedFilters(prev => ({...prev, priceRange: value as [number, number]}))
                        }
                        className="mt-6"
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-sm">${selectedFilters.priceRange[0]}</span>
                        <span className="text-sm">${selectedFilters.priceRange[1]}</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Main Content */}
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                  {/* Mobile Filter Button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="md:hidden"
                        onClick={() => setIsFilterVisible(true)}
                      >
                        <Filter className="h-4 w-4 mr-1" /> Filters
                        {totalFiltersApplied > 0 && (
                          <Badge className="ml-1 bg-brand-500 hover:bg-brand-600">
                            {totalFiltersApplied}
                          </Badge>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Filters</h3>
                        {totalFiltersApplied > 0 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={resetFilters}
                            className="h-8 text-brand-500"
                          >
                            Clear all
                          </Button>
                        )}
                      </div>

                      <div className="relative mt-6">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search courses"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-8"
                        />
                      </div>

                      <Accordion type="multiple" className="w-full space-y-2 mt-6">
                        <AccordionItem value="category" className="border-b-0">
                          <AccordionTrigger className="py-2 hover:no-underline">
                            <span className="font-medium">Category</span>
                          </AccordionTrigger>
                          <AccordionContent className="pt-2 pb-4">
                            <div className="space-y-2">
                              {categories.map((category) => (
                                <div
                                  key={category}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox
                                    id={`mobile-category-${category}`}
                                    checked={selectedFilters.categories.includes(category)}
                                    onCheckedChange={() => toggleCategory(category)}
                                  />
                                  <label
                                    htmlFor={`mobile-category-${category}`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {category}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="level" className="border-b-0">
                          <AccordionTrigger className="py-2 hover:no-underline">
                            <span className="font-medium">Level</span>
                          </AccordionTrigger>
                          <AccordionContent className="pt-2 pb-4">
                            <div className="space-y-2">
                              {levels.map((level) => (
                                <div key={level} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`mobile-level-${level}`}
                                    checked={selectedFilters.levels.includes(level)}
                                    onCheckedChange={() => toggleLevel(level)}
                                  />
                                  <label
                                    htmlFor={`mobile-level-${level}`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {level}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="rating" className="border-b-0">
                          <AccordionTrigger className="py-2 hover:no-underline">
                            <span className="font-medium">Rating</span>
                          </AccordionTrigger>
                          <AccordionContent className="pt-2 pb-4">
                            <div className="space-y-2">
                              {ratings.map((rating) => (
                                <div key={rating} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`mobile-rating-${rating}`}
                                    checked={selectedFilters.ratings.includes(rating)}
                                    onCheckedChange={() => toggleRating(rating)}
                                  />
                                  <label
                                    htmlFor={`mobile-rating-${rating}`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {rating}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="price" className="border-b-0">
                          <AccordionTrigger className="py-2 hover:no-underline">
                            <span className="font-medium">Price</span>
                          </AccordionTrigger>
                          <AccordionContent className="pt-2 pb-4">
                            <div className="space-y-6">
                              <Slider
                                defaultValue={[0, 200]}
                                max={200}
                                step={5}
                                value={selectedFilters.priceRange}
                                onValueChange={(value) => 
                                  setSelectedFilters(prev => ({...prev, priceRange: value as [number, number]}))
                                }
                                className="mt-6"
                              />
                              <div className="flex items-center justify-between">
                                <span className="text-sm">${selectedFilters.priceRange[0]}</span>
                                <span className="text-sm">${selectedFilters.priceRange[1]}</span>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </SheetContent>
                  </Sheet>

                  {/* Filter pills */}
                  <div className="flex flex-wrap gap-2">
                    {selectedFilters.categories.map((category) => (
                      <Badge key={category} variant="secondary" className="flex gap-1 items-center">
                        {category}
                        <X 
                          className="h-3 w-3 cursor-pointer" 
                          onClick={() => toggleCategory(category)} 
                        />
                      </Badge>
                    ))}
                    {selectedFilters.levels.map((level) => (
                      <Badge key={level} variant="secondary" className="flex gap-1 items-center">
                        {level}
                        <X 
                          className="h-3 w-3 cursor-pointer" 
                          onClick={() => toggleLevel(level)} 
                        />
                      </Badge>
                    ))}
                    {selectedFilters.ratings.map((rating) => (
                      <Badge key={rating} variant="secondary" className="flex gap-1 items-center">
                        {rating}
                        <X 
                          className="h-3 w-3 cursor-pointer" 
                          onClick={() => toggleRating(rating)} 
                        />
                      </Badge>
                    ))}
                    {(selectedFilters.priceRange[0] > 0 || selectedFilters.priceRange[1] < 200) && (
                      <Badge variant="secondary" className="flex gap-1 items-center">
                        ${selectedFilters.priceRange[0]} - ${selectedFilters.priceRange[1]}
                        <X 
                          className="h-3 w-3 cursor-pointer" 
                          onClick={() => 
                            setSelectedFilters(prev => ({...prev, priceRange: [0, 200]}))
                          } 
                        />
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground mr-2">Sort by:</span>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-[180px] h-9">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="most-popular">Most Popular</SelectItem>
                      <SelectItem value="highest-rated">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                      <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-medium">
                  {sortedCourses.length} results
                </h3>
              </div>

              {sortedCourses.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No courses found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search or filter settings
                  </p>
                  <Button onClick={resetFilters}>Clear all filters</Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              )}

              {sortedCourses.length > 0 && (
                <div className="flex justify-center mt-12">
                  <Button variant="outline">Load More Courses</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoursesListing;
