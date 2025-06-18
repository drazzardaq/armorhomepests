
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Trophy, Zap } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Active Players",
      color: "neon-pink"
    },
    {
      icon: Heart,
      value: "2M+",
      label: "Pets Adopted",
      color: "neon-blue"
    },
    {
      icon: Trophy,
      value: "100K+",
      label: "Achievements",
      color: "neon-green"
    },
    {
      icon: Zap,
      value: "1M+",
      label: "Daily Interactions",
      color: "neon-purple"
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className={`bg-card/50 backdrop-blur-sm border-${stat.color}/30 hover:border-${stat.color} transition-all duration-300 animate-float`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardContent className="p-6 text-center">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 text-${stat.color}`} />
                <div className={`text-3xl font-bold mb-2 text-${stat.color} neon-text`}>
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
