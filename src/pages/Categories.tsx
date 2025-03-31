
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Code, Database, LineChart, Briefcase, PenTool, 
  Camera, Languages, Heart, Microscope, Music 
} from "lucide-react";

interface CategoryCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  slug: string;
}

const categories = [
  { 
    title: "Programming", 
    count: 483, 
    icon: <Code className="h-12 w-12 mb-4 text-brand-500" />,
    slug: "programming" 
  },
  { 
    title: "Data Science", 
    count: 320, 
    icon: <Database className="h-12 w-12 mb-4 text-brand-500" />,
    slug: "data-science" 
  },
  { 
    title: "Business", 
    count: 527, 
    icon: <Briefcase className="h-12 w-12 mb-4 text-brand-500" />,
    slug: "business" 
  },
  { 
    title: "Finance", 
    count: 235, 
    icon: <LineChart className="h-12 w-12 mb-4 text-brand-500" />,
    slug: "finance" 
  },
  { 
    title: "Design", 
    count: 189, 
    icon: <PenTool className="h-12 w-12 mb-4 text-brand-500" />,
    slug: "design" 
  },
  { 
    title: "Photography", 
    count: 156, 
    icon: <Camera className="h-12 w-12 mb-4 text-brand-500" />,
    slug: "photography" 
  },
  { 
    title: "Languages", 
    count: 203, 
    icon: <Languages className="h-12 w-12 mb-4 text-brand-500" />,
    slug: "languages" 
  },
  { 
    title: "Health", 
    count: 185, 
    icon: <Heart className="h-12 w-12 mb-4 text-brand-500" />,
    slug: "health" 
  },
  { 
    title: "Science", 
    count: 217, 
    icon: <Microscope className="h-12 w-12 mb-4 text-brand-500" />,
    slug: "science" 
  },
  { 
    title: "Music", 
    count: 142, 
    icon: <Music className="h-12 w-12 mb-4 text-brand-500" />,
    slug: "music" 
  }
];

const CategoryCard: React.FC<CategoryCardProps> = ({ title, count, icon, slug }) => {
  return (
    <Link to={`/courses?category=${slug}`}>
      <Card className="cursor-pointer h-full hover:border-brand-300 transition-all duration-300 hover:shadow-md">
        <CardContent className="p-6 flex flex-col items-center text-center">
          {icon}
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{count} courses</p>
        </CardContent>
      </Card>
    </Link>
  );
};

const Categories = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Categories</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our diverse range of course categories and find the perfect learning path for your interests and career goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              count={category.count}
              icon={category.icon}
              slug={category.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
