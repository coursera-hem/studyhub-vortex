
import { GraduationCap, Users, Award, Globe } from "lucide-react";

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const stats: StatProps[] = [
  {
    value: "15M+",
    label: "Students worldwide",
    icon: <Users className="h-8 w-8 text-brand-500" />,
  },
  {
    value: "50K+",
    label: "Online courses",
    icon: <GraduationCap className="h-8 w-8 text-brand-500" />,
  },
  {
    value: "4K+",
    label: "Expert instructors",
    icon: <Award className="h-8 w-8 text-brand-500" />,
  },
  {
    value: "160+",
    label: "Countries served",
    icon: <Globe className="h-8 w-8 text-brand-500" />,
  },
];

const StatCard: React.FC<StatProps> = ({ value, label, icon }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <div className="p-3 rounded-full bg-brand-50">{icon}</div>
      <h3 className="text-3xl font-bold">{value}</h3>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Students Choose StudyHub
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Join millions of learners from around the world transforming their careers with StudyHub
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
