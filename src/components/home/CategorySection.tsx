
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
  href: string;
}

const categories = [
  { 
    title: "Programming", 
    count: 483, 
    icon: <Code className="h-8 w-8 mb-2 text-brand-500" />,
    href: "/category/programming" 
  },
  { 
    title: "Data Science", 
    count: 320, 
    icon: <Database className="h-8 w-8 mb-2 text-brand-500" />,
    href: "/category/data-science" 
  },
  { 
    title: "Business", 
    count: 527, 
    icon: <Briefcase className="h-8 w-8 mb-2 text-brand-500" />,
    href: "/category/business" 
  },
  { 
    title: "Finance", 
    count: 235, 
    icon: <LineChart className="h-8 w-8 mb-2 text-brand-500" />,
    href: "/category/finance" 
  },
  { 
    title: "Design", 
    count: 189, 
    icon: <PenTool className="h-8 w-8 mb-2 text-brand-500" />,
    href: "/category/design" 
  },
  { 
    title: "Photography", 
    count: 156, 
    icon: <Camera className="h-8 w-8 mb-2 text-brand-500" />,
    href: "/category/photography" 
  },
  { 
    title: "Languages", 
    count: 203, 
    icon: <Languages className="h-8 w-8 mb-2 text-brand-500" />,
    href: "/category/languages" 
  },
  { 
    title: "Health", 
    count: 185, 
    icon: <Heart className="h-8 w-8 mb-2 text-brand-500" />,
    href: "/category/health" 
  },
  { 
    title: "Science", 
    count: 217, 
    icon: <Microscope className="h-8 w-8 mb-2 text-brand-500" />,
    href: "/category/science" 
  },
  { 
    title: "Music", 
    count: 142, 
    icon: <Music className="h-8 w-8 mb-2 text-brand-500" />,
    href: "/category/music" 
  }
];

const CategoryCard: React.FC<CategoryCardProps> = ({ title, count, icon, href }) => {
  return (
    <Link to={href}>
      <Card className="cursor-pointer hover:border-brand-300 transition-all duration-300 hover:shadow-md">
        <CardContent className="p-6 flex flex-col items-center text-center">
          {icon}
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{count} courses</p>
        </CardContent>
      </Card>
    </Link>
  );
};

const CategorySection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Browse Top Categories
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Explore our diverse range of categories and find the perfect course for you
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              count={category.count}
              icon={category.icon}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
