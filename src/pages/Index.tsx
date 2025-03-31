
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import PopularCoursesSection from "@/components/home/PopularCoursesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <PopularCoursesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
