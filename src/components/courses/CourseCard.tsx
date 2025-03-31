
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Clock, Users } from "lucide-react";

export interface CourseProps {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  price: number;
  originalPrice?: number;
  rating: number;
  ratingCount: number;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: string;
  students: number;
  isBestseller?: boolean;
  isNew?: boolean;
  category?: string;
}

const CourseCard: React.FC<CourseProps> = ({
  id,
  title,
  instructor,
  thumbnail,
  price,
  originalPrice,
  rating,
  ratingCount,
  level,
  duration,
  students,
  isBestseller,
  isNew,
  category,
}) => {
  return (
    <Link to={`/courses/${id}`}>
      <Card className="h-full overflow-hidden course-card">
        <div className="relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-40 object-cover"
          />
          {(isBestseller || isNew) && (
            <div className="absolute top-2 left-2">
              {isBestseller && (
                <Badge className="bg-amber-500 hover:bg-amber-600 mr-1">Bestseller</Badge>
              )}
              {isNew && <Badge className="bg-green-500 hover:bg-green-600">New</Badge>}
            </div>
          )}
        </div>
        <CardHeader className="p-4 pb-2">
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{instructor}</p>
        </CardHeader>
        <CardContent className="p-4 pt-0 pb-2">
          <div className="flex items-center mb-1">
            <span className="text-amber-500 font-bold mr-1">{rating.toFixed(1)}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating) ? "text-amber-500 fill-amber-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">({ratingCount})</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground space-x-2 mt-2">
            <Badge variant="outline" className="font-normal">
              {level}
            </Badge>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {duration}
            </div>
            <div className="flex items-center">
              <Users className="h-3 w-3 mr-1" />
              {students.toLocaleString()}
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-2 border-t">
          <div className="flex items-center">
            <span className="font-bold text-lg">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-muted-foreground line-through ml-2">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
