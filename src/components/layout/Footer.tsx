
import { Link } from "react-router-dom";
import { Graduation, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-12 mt-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Graduation className="h-6 w-6 text-brand-500" />
              <span className="font-bold text-xl">StudyHub</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              An online learning platform that helps you upgrade your skills and advance your career.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-brand-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-500">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-base mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-foreground text-sm">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-foreground text-sm">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="text-muted-foreground hover:text-foreground text-sm">
                  Instructors
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-foreground text-sm">
                  Webinars
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-foreground text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-foreground text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-foreground text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-foreground text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-muted-foreground hover:text-foreground text-sm">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-muted-foreground hover:text-foreground text-sm">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StudyHub. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
            <a href="mailto:support@studyhub.com" className="text-sm text-muted-foreground hover:text-foreground">
              support@studyhub.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
