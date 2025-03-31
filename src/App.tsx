
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { useAuth } from "@/context/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import CourseDetail from "./pages/Courses/CourseDetail";
import CoursesListing from "./pages/Courses/CoursesListing";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import About from "./pages/About";
import Categories from "./pages/Categories";
import { useEffect } from "react";

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, loading } = useAuth();
  
  // During initial load, show loading state
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  // If not authenticated, redirect to login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  // If authenticated, render the protected content
  return <>{children}</>;
};

// Client setup
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// App content with routes
const AppContent = () => {
  const { currentUser } = useAuth();
  
  // Log authentication state for debugging
  useEffect(() => {
    console.log("Auth state:", currentUser ? "Logged in" : "Not logged in");
  }, [currentUser]);
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={
        currentUser ? <Navigate to="/dashboard" /> : <Login />
      } />
      <Route path="/register" element={
        currentUser ? <Navigate to="/dashboard" /> : <Register />
      } />
      <Route path="/courses" element={<CoursesListing />} />
      <Route path="/courses/:courseId" element={<CourseDetail />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <UserDashboard />
        </ProtectedRoute>
      } />
      <Route path="/about" element={<About />} />
      <Route path="/categories" element={<Categories />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Main App component
const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
