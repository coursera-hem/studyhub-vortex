
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Search } from "lucide-react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

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
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
              <div className="relative w-full sm:max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  className="w-full bg-white/90 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="bg-white text-brand-500 hover:bg-white/90"
              >
                Find Courses
              </Button>
            </form>
            <p className="text-sm text-white/80">
              Popular: Web Development, Data Science, Business, AI, Design
            </p>
          </div>
          <div className="mx-auto lg:ml-auto">
            <img
              src="https://media-hosting.imagekit.io/230115b5b5204bc7/e-learning-session-de-formation-en-ligne.jpg?Expires=1838047906&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=X3gpMlwXdpAUO9BrW8jAc2UN9jHJkhw3Ait1eCyBmqs5FEvIQWyRPvKalSWYmmHdeW1eimYXYdN54xyemqJSdepPD9twrbALeT412jFhZrw5BfhbcU9NJ4RYEkaNFyvsGoD4srW0CPNdt7tJSVClHA2h5NeTTRgU3uVfgu0~73hZN2K7U0qKIDBUdMngrJlqAkUdh5MeleOtiTrw-UHWDkovCiuQMFLWY0XiYYw1ruegJAMYO4lguj0MMXSQNLXdYNGJ~KzDLVAGoqDS0TKpCbxx1A-s7HjcGkE32HP1~y9tVWqn~ZJNTRqHTpvn0vEWVLV1MIZfYyFJ8H1ATjfADg__"
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
