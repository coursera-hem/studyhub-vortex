
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Start Learning?
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Join over 15 million students worldwide and upgrade your skills with our expert-led courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to="/courses">
              <Button size="lg" className="bg-brand-500 hover:bg-brand-600">
                Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline">
                Sign Up for Free
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            7-day money-back guarantee on all paid courses
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
