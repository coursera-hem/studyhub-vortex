
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, Menu, X, LogIn, UserPlus, Bell, Book, BarChart, 
  GraduationCap, LogOut, Trophy, Award 
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

const mainNavItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Courses", href: "/courses" },
  { title: "Categories", href: "/categories" },
  { title: "About", href: "/about" },
];

const userNavItems: NavItem[] = [
  { title: "My Dashboard", href: "/dashboard", icon: <BarChart className="mr-2 h-4 w-4" /> },
  { title: "My Courses", href: "/my-courses", icon: <Book className="mr-2 h-4 w-4" /> },
  { title: "Certificates", href: "/certificates", icon: <GraduationCap className="mr-2 h-4 w-4" /> },
];

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: string;
}

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState<Notification[]>([
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
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  
  const { currentUser, logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchVisible(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const userInitials = currentUser?.email 
    ? currentUser.email.substring(0, 2).toUpperCase() 
    : "U";

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
                  <GraduationCap className="h-6 w-6 text-brand-500" />
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
                  {!currentUser ? (
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
                    <>
                      {userNavItems.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="flex w-full items-center py-2 text-sm font-medium"
                        >
                          {item.icon}
                          {item.title}
                        </Link>
                      ))}
                      <Button 
                        variant="ghost" 
                        className="flex w-full items-center justify-start py-2 text-sm font-medium"
                        onClick={handleLogout}
                      >
                        <LogOut className="mr-2 h-4 w-4" /> Sign Out
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-brand-500" />
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
                <form onSubmit={handleSearch} className="w-full flex">
                  <Input
                    type="search"
                    placeholder="Search courses..."
                    className="w-full sm:pr-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    type="button"
                    className="absolute right-0 top-0 sm:hidden"
                    onClick={() => setIsSearchVisible(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            )}
            {!isSearchVisible && (
              <div className="relative hidden sm:block">
                <form onSubmit={handleSearch} className="w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search courses..."
                    className="w-full pl-8 sm:pr-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
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

          {!currentUser ? (
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Notifications" onClick={handleNotificationClick}>
                    <Bell className="h-5 w-5" />
                    {notifications.some(n => !n.read) && (
                      <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="font-medium">Notifications</h3>
                    <Button variant="ghost" size="sm">Mark all as read</Button>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-4 text-center text-sm text-muted-foreground">
                        No notifications
                      </div>
                    ) : (
                      notifications.map((notification) => (
                        <div 
                          key={notification.id}
                          className={`p-4 border-b last:border-none hover:bg-muted/50 transition-colors ${
                            notification.read ? '' : 'bg-muted/20'
                          }`}
                          onClick={() => markNotificationAsRead(notification.id)}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-1.5 rounded-full ${
                              notification.type === 'course-update' ? 'bg-brand-50 text-brand-500' :
                              notification.type === 'achievement' ? 'bg-amber-50 text-amber-500' :
                              'bg-purple-50 text-purple-500'
                            }`}>
                              {notification.type === 'course-update' ? (
                                <Book className="h-4 w-4" />
                              ) : notification.type === 'achievement' ? (
                                <Trophy className="h-4 w-4" />
                              ) : (
                                <Award className="h-4 w-4" />
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
                      ))
                    )}
                  </div>
                  <div className="p-2 border-t">
                    <Button variant="ghost" size="sm" className="w-full">
                      View all notifications
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                    aria-label="User menu"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={currentUser.photoURL || ""} alt={currentUser.displayName || "User"} />
                      <AvatarFallback>{userInitials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      {currentUser.displayName && (
                        <p className="font-medium">{currentUser.displayName}</p>
                      )}
                      {currentUser.email && (
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                          {currentUser.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  {userNavItems.map((item) => (
                    <DropdownMenuItem key={item.title} asChild>
                      <Link to={item.href} className="flex items-center">
                        {item.icon}
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </DropdownMenuItem>
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
