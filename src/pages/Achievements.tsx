
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Crown, Heart, Zap, Users, Target, Award, Lock } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Adopt your first pet",
      icon: Heart,
      unlocked: true,
      progress: 100,
      rarity: "Common",
      reward: "50 XP",
      unlockedDate: "2025-01-15"
    },
    {
      id: 2,
      title: "Pet Collector",
      description: "Adopt 5 different pets",
      icon: Crown,
      unlocked: true,
      progress: 100,
      rarity: "Rare",
      reward: "200 XP + Pet Bed",
      unlockedDate: "2025-01-20"
    },
    {
      id: 3,
      title: "Energy Master",
      description: "Train pets 100 times",
      icon: Zap,
      unlocked: false,
      progress: 67,
      rarity: "Epic",
      reward: "500 XP + Energy Boost",
      unlockedDate: null
    },
    {
      id: 4,
      title: "Social Butterfly",
      description: "Make 10 friends",
      icon: Users,
      unlocked: true,
      progress: 100,
      rarity: "Rare",
      reward: "300 XP + Friend Pass",
      unlockedDate: "2025-01-18"
    },
    {
      id: 5,
      title: "Evolution Expert",
      description: "Evolve a pet to max level",
      icon: Star,
      unlocked: false,
      progress: 45,
      rarity: "Legendary",
      reward: "1000 XP + Evolution Stone",
      unlockedDate: null
    },
    {
      id: 6,
      title: "Perfect Care",
      description: "Keep happiness at 100% for 7 days",
      icon: Target,
      unlocked: false,
      progress: 28,
      rarity: "Epic",
      reward: "750 XP + Care Package",
      unlockedDate: null
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "text-gray-400 border-gray-400";
      case "Rare": return "text-neon-blue border-neon-blue";
      case "Epic": return "text-neon-purple border-neon-purple";
      case "Legendary": return "text-neon-pink border-neon-pink";
      default: return "text-gray-400 border-gray-400";
    }
  };

  const getProgressColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "from-gray-400 to-gray-500";
      case "Rare": return "from-neon-blue to-neon-green";
      case "Epic": return "from-neon-purple to-neon-pink";
      case "Legendary": return "from-neon-pink to-neon-purple";
      default: return "from-gray-400 to-gray-500";
    }
  };

  const totalAchievements = achievements.length;
  const unlockedAchievements = achievements.filter(a => a.unlocked).length;
  const totalXP = achievements.filter(a => a.unlocked).reduce((sum, a) => {
    const xpMatch = a.reward.match(/(\d+) XP/);
    return sum + (xpMatch ? parseInt(xpMatch[1]) : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-background forest-bg">
      <div className="absolute inset-0 bg-background/80"></div>
      <Navigation />
      <div className="relative z-10 pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 neon-text">
              <span className="text-neon-purple">Achievement</span>{" "}
              <span className="text-neon-pink">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Track your progress and unlock amazing rewards
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/80 backdrop-blur-sm border-neon-purple/30 gradient-cosmic">
              <div className="absolute inset-0 bg-background/70 rounded-lg"></div>
              <CardContent className="relative z-10 p-6 text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-neon-purple" />
                <div className="text-3xl font-bold mb-2 text-neon-purple neon-text">
                  {unlockedAchievements}/{totalAchievements}
                </div>
                <p className="text-muted-foreground">Achievements Unlocked</p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-neon-pink/30">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-neon-pink" />
                <div className="text-3xl font-bold mb-2 text-neon-pink neon-text">
                  {totalXP}
                </div>
                <p className="text-muted-foreground">Total XP Earned</p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-neon-green/30">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 mx-auto mb-4 text-neon-green" />
                <div className="text-3xl font-bold mb-2 text-neon-green neon-text">
                  {Math.round((unlockedAchievements / totalAchievements) * 100)}%
                </div>
                <p className="text-muted-foreground">Completion Rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.id}
                className={`bg-card/80 backdrop-blur-sm transition-all duration-300 animate-float ${
                  achievement.unlocked 
                    ? `border-${getRarityColor(achievement.rarity).split(' ')[0].replace('text-', '')} hover:border-${getRarityColor(achievement.rarity).split(' ')[0].replace('text-', '')}/80` 
                    : 'border-muted/30 opacity-70'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 w-20 h-20 ${achievement.unlocked ? 'gradient-cosmic' : 'bg-muted/20'} rounded-full flex items-center justify-center animate-pulse-neon`}>
                    {achievement.unlocked ? (
                      <achievement.icon className={`w-10 h-10 ${getRarityColor(achievement.rarity).split(' ')[0]}`} />
                    ) : (
                      <Lock className="w-10 h-10 text-muted-foreground" />
                    )}
                  </div>
                  <CardTitle className={`${achievement.unlocked ? getRarityColor(achievement.rarity).split(' ')[0] : 'text-muted-foreground'} neon-text`}>
                    {achievement.title}
                  </CardTitle>
                  <Badge className={getRarityColor(achievement.rarity)}>
                    {achievement.rarity}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {achievement.description}
                  </p>
                  
                  {!achievement.unlocked && (
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{achievement.progress}%</span>
                      </div>
                      <Progress value={achievement.progress} className="h-2 bg-muted">
                        <div 
                          className={`h-full bg-gradient-to-r ${getProgressColor(achievement.rarity)} transition-all duration-300`}
                          style={{ width: `${achievement.progress}%` }}
                        />
                      </Progress>
                    </div>
                  )}
                  
                  <div className="text-center space-y-2">
                    <div className="text-sm font-medium text-neon-green">
                      🏆 {achievement.reward}
                    </div>
                    {achievement.unlocked && achievement.unlockedDate && (
                      <div className="text-xs text-muted-foreground">
                        Unlocked: {new Date(achievement.unlockedDate).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                  
                  {achievement.unlocked && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`w-full ${getRarityColor(achievement.rarity).replace('text-', 'border-').replace('border-', 'border-')} hover:bg-${getRarityColor(achievement.rarity).split(' ')[0].replace('text-', '')} hover:text-background`}
                      disabled
                    >
                      ✓ Completed
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
