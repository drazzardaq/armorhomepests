
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Edit, Calendar, Trophy, Heart, Zap, Users, Star, Crown } from "lucide-react";

const Profile = () => {
  const userStats = {
    username: "PixelMaster2025",
    level: 32,
    experience: 8750,
    nextLevelExp: 10000,
    joinDate: "March 2024",
    totalPets: 7,
    friendsCount: 23,
    achievementsUnlocked: 15,
    totalAchievements: 24,
    favoriteType: "Crystal Fox",
    totalPlayTime: "127 hours"
  };

  const recentAchievements = [
    { name: "Pet Whisperer", icon: Heart, color: "neon-pink", date: "2 days ago" },
    { name: "Social Star", icon: Users, color: "neon-blue", date: "1 week ago" },
    { name: "Energy Master", icon: Zap, color: "neon-green", date: "2 weeks ago" }
  ];

  const petCollection = [
    { name: "Sparkle", type: "Crystal Fox", level: 25, happiness: 95 },
    { name: "Zappy", type: "Electric Cat", level: 18, happiness: 88 },
    { name: "Glimmer", type: "Neon Dragon", level: 30, happiness: 92 },
    { name: "Pixel", type: "Digital Bunny", level: 15, happiness: 85 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 neon-text">
              <span className="text-neon-blue">Player</span>{" "}
              <span className="text-neon-pink">Profile</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-card/80 backdrop-blur-sm border-neon-pink/30">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-24 h-24 bg-gradient-to-br from-neon-pink/20 to-neon-blue/20 rounded-full flex items-center justify-center animate-pulse-neon">
                    <Crown className="w-12 h-12 text-neon-pink" />
                  </div>
                  <CardTitle className="text-neon-pink neon-text">{userStats.username}</CardTitle>
                  <div className="flex justify-center items-center gap-2 mt-2">
                    <Badge className="bg-neon-blue text-background">
                      Level {userStats.level}
                    </Badge>
                    <Button size="sm" variant="outline" className="border-neon-pink/50 text-neon-pink">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Experience</span>
                      <span className="text-neon-blue">
                        {userStats.experience}/{userStats.nextLevelExp}
                      </span>
                    </div>
                    <Progress value={(userStats.experience / userStats.nextLevelExp) * 100} className="h-2">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300"
                        style={{ width: `${(userStats.experience / userStats.nextLevelExp) * 100}%` }}
                      />
                    </Progress>
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t border-muted/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Joined</span>
                      </div>
                      <span className="text-sm text-neon-green">{userStats.joinDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Favorite Type</span>
                      </div>
                      <span className="text-sm text-neon-pink">{userStats.favoriteType}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Play Time</span>
                      </div>
                      <span className="text-sm text-neon-blue">{userStats.totalPlayTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card className="bg-card/80 backdrop-blur-sm border-neon-purple/30">
                <CardHeader>
                  <CardTitle className="text-neon-purple flex items-center">
                    <Trophy className="w-5 h-5 mr-2" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                      <achievement.icon className={`w-6 h-6 text-${achievement.color}`} />
                      <div className="flex-1">
                        <div className={`font-semibold text-${achievement.color}`}>{achievement.name}</div>
                        <div className="text-xs text-muted-foreground">{achievement.date}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Stats and Pet Collection */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-card/80 backdrop-blur-sm border-neon-blue/30 text-center p-4">
                  <Heart className="w-8 h-8 text-neon-pink mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neon-pink">{userStats.totalPets}</div>
                  <div className="text-sm text-muted-foreground">Pets</div>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur-sm border-neon-green/30 text-center p-4">
                  <Users className="w-8 h-8 text-neon-green mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neon-green">{userStats.friendsCount}</div>
                  <div className="text-sm text-muted-foreground">Friends</div>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur-sm border-neon-purple/30 text-center p-4">
                  <Trophy className="w-8 h-8 text-neon-purple mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neon-purple">{userStats.achievementsUnlocked}</div>
                  <div className="text-sm text-muted-foreground">Achievements</div>
                </Card>
                
                <Card className="bg-card/80 backdrop-blur-sm border-neon-blue/30 text-center p-4">
                  <Star className="w-8 h-8 text-neon-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neon-blue">{userStats.level}</div>
                  <div className="text-sm text-muted-foreground">Level</div>
                </Card>
              </div>

              {/* Pet Collection */}
              <Card className="bg-card/80 backdrop-blur-sm border-neon-green/30">
                <CardHeader>
                  <CardTitle className="text-neon-green flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Pet Collection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {petCollection.map((pet, index) => (
                      <div 
                        key={index} 
                        className="p-4 bg-muted/20 rounded-lg border border-neon-green/20 hover:border-neon-green/50 transition-all duration-300"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-bold text-neon-green">{pet.name}</h4>
                            <p className="text-sm text-muted-foreground">{pet.type}</p>
                          </div>
                          <Badge variant="outline" className="text-neon-blue">
                            Lv. {pet.level}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Happiness</span>
                            <span className="text-neon-pink">{pet.happiness}%</span>
                          </div>
                          <Progress value={pet.happiness} className="h-2">
                            <div 
                              className="h-full bg-gradient-to-r from-neon-pink to-neon-purple transition-all duration-300"
                              style={{ width: `${pet.happiness}%` }}
                            />
                          </Progress>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
