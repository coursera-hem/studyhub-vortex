
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    content:
      "StudyHub transformed my career! I went from knowing nothing about programming to landing a job as a full-stack developer in just 6 months. The instructors were amazing and the community support helped me stay motivated.",
    name: "Michael Rodriguez",
    role: "Software Developer",
    avatar: "https://source.unsplash.com/random/100x100/?portrait,man,1",
    rating: 5,
  },
  {
    content:
      "I've tried several online learning platforms, but StudyHub stands out with its high-quality courses and interactive learning experience. The projects helped me build a strong portfolio that impressed my employers.",
    name: "Samantha Lee",
    role: "UX Designer",
    avatar: "https://source.unsplash.com/random/100x100/?portrait,woman,1",
    rating: 5,
  },
  {
    content:
      "As a busy professional, I needed a flexible way to upskill. StudyHub allowed me to learn at my own pace and fit learning into my schedule. The mobile app is fantastic for learning on the go!",
    name: "David Chen",
    role: "Marketing Manager",
    avatar: "https://source.unsplash.com/random/100x100/?portrait,man,2",
    rating: 4,
  },
];

const TestimonialCard: React.FC<TestimonialProps> = ({
  content,
  name,
  role,
  avatar,
  rating,
}) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6 px-6">
        <div className="mb-4 flex justify-between items-start">
          <Quote className="h-8 w-8 text-brand-300" />
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-muted-foreground mb-6">{content}</p>
        <div className="flex items-center">
          <img
            src={avatar}
            alt={name}
            className="rounded-full h-12 w-12 object-cover mr-4"
          />
          <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Students Say
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Join thousands of satisfied learners who have achieved their goals with StudyHub
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
