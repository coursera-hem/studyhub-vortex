
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36 hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Expand Your Knowledge & Skills
            </h1>
            <p className="max-w-[600px] text-white/90 md:text-xl">
              Discover thousands of courses taught by expert instructors to help you upgrade your skills and advance your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative w-full sm:max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  className="w-full bg-white/90 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <Button size="lg" className="bg-white text-brand-500 hover:bg-white/90">
                Find Courses
              </Button>
            </div>
            <p className="text-sm text-white/80">
              Popular: Web Development, Data Science, Business, AI, Design
            </p>
          </div>
          <div className="mx-auto lg:ml-auto">
            <img
              src="https://source.unsplash.com/random/800x600/?students,learning"
              alt="Students learning"
              className="w-full rounded-lg shadow-xl object-cover aspect-video sm:aspect-square lg:aspect-video"
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
