
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Menu, X, LogIn, UserPlus, Bell, Book, BarChart, Graduation } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

const mainNavItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Courses", href: "/courses" },
  { title: "Categories", href: "/categories" },
  { title: "About Us", href: "/about" },
];

const userNavItems: NavItem[] = [
  { title: "My Dashboard", href: "/dashboard", icon: <BarChart className="mr-2 h-4 w-4" /> },
  { title: "My Courses", href: "/my-courses", icon: <Book className="mr-2 h-4 w-4" /> },
  { title: "Certificates", href: "/certificates", icon: <Graduation className="mr-2 h-4 w-4" /> },
];

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const isLoggedIn = false; // This will be replaced with real auth state

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild className="mr-2 sm:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-6 py-6">
                <Link to="/" className="flex items-center space-x-2">
                  <Graduation className="h-6 w-6 text-brand-500" />
                  <span className="font-bold text-xl">StudyHub</span>
                </Link>
                <div className="grid gap-3">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="flex w-full items-center py-2 text-sm font-medium"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="grid gap-3">
                  {!isLoggedIn ? (
                    <>
                      <Link to="/login">
                        <Button className="w-full" variant="outline">
                          <LogIn className="mr-2 h-4 w-4" /> Sign In
                        </Button>
                      </Link>
                      <Link to="/register">
                        <Button className="w-full">
                          <UserPlus className="mr-2 h-4 w-4" /> Sign Up
                        </Button>
                      </Link>
                    </>
                  ) : (
                    userNavItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="flex w-full items-center py-2 text-sm font-medium"
                      >
                        {item.icon}
                        {item.title}
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex items-center space-x-2">
            <Graduation className="h-6 w-6 text-brand-500" />
            <span className="hidden font-bold sm:inline-block text-xl">StudyHub</span>
          </Link>

          <nav className="hidden ml-10 sm:flex items-center space-x-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <div
            className={cn(
              "transition-all",
              isSearchVisible
                ? "w-full sm:w-[300px] opacity-100"
                : "w-0 opacity-0 hidden sm:block sm:w-[300px] sm:opacity-100"
            )}
          >
            {isSearchVisible && (
              <div className="relative w-full flex">
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="w-full sm:pr-10"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 sm:hidden"
                  onClick={() => setIsSearchVisible(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
            {!isSearchVisible && (
              <div className="relative hidden sm:block">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="w-full pl-8 sm:pr-10"
                />
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          {!isLoggedIn ? (
            <div className="hidden sm:flex space-x-2">
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" aria-label="Notifications">
                <Bell className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                    aria-label="User menu"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {userNavItems.map((item) => (
                    <DropdownMenuItem key={item.title} asChild>
                      <Link to={item.href} className="flex items-center">
                        {item.icon}
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
