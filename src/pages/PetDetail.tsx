
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Zap, 
  Gamepad2, 
  Gift, 
  ArrowLeft, 
  Camera, 
  Settings,
  Star,
  Crown,
  Sparkles
} from "lucide-react";

const PetDetail = () => {
  const { id } = useParams();
  const [petStats, setPetStats] = useState({
    happiness: 85,
    energy: 60,
    hunger: 25,
    health: 95
  });
  const [careAmount, setCareAmount] = useState([50]);

  // Mock pet data
  const pet = {
    id: id || "1",
    name: "Sparkles",
    type: "Cosmic Dragon",
    level: 12,
    experience: 750,
    nextLevelExp: 1000,
    image: "✨",
    backgroundImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&q=80",
    evolution: "Stage 2",
    rarity: "Legendary",
    birthday: "2024-01-15",
    personalityTraits: ["Playful", "Curious", "Energetic"],
    favoriteActivities: ["Flying", "Stargazing", "Playing with light orbs"],
    achievements: ["First Flight", "Star Collector", "Energy Master"]
  };

  const feedPet = () => {
    setPetStats(prev => ({
      ...prev,
      hunger: Math.max(0, prev.hunger - careAmount[0]),
      happiness: Math.min(100, prev.happiness + Math.floor(careAmount[0] / 2))
    }));
  };

  const playWithPet = () => {
    setPetStats(prev => ({
      ...prev,
      energy: Math.max(0, prev.energy - Math.floor(careAmount[0] / 3)),
      happiness: Math.min(100, prev.happiness + careAmount[0])
    }));
  };

  const trainPet = () => {
    setPetStats(prev => ({
      ...prev,
      energy: Math.max(0, prev.energy - Math.floor(careAmount[0] / 2)),
      happiness: Math.min(100, prev.happiness + Math.floor(careAmount[0] / 4))
    }));
  };

  const restPet = () => {
    setPetStats(prev => ({
      ...prev,
      energy: Math.min(100, prev.energy + careAmount[0]),
      health: Math.min(100, prev.health + Math.floor(careAmount[0] / 4))
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" asChild className="text-neon-blue hover:text-neon-blue hover:bg-neon-blue/10">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Crown className="w-6 h-6 text-neon-pink" />
              <h1 className="text-3xl font-bold text-neon-pink neon-text">{pet.name}</h1>
              <Badge className="text-neon-purple border-neon-purple">
                {pet.rarity}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pet Display */}
            <div className="lg:col-span-2">
              <Card className="bg-card/80 backdrop-blur-sm border-neon-pink/30 overflow-hidden">
                <div 
                  className="relative h-96 flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${pet.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="absolute inset-0 bg-background/60"></div>
                  <div className="relative z-10 text-9xl animate-float gradient-cosmic rounded-full w-48 h-48 flex items-center justify-center animate-pulse-neon">
                    {pet.image}
                  </div>
                  
                  {/* Pet Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-neon-blue/30">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-neon-blue">{pet.type}</h3>
                        <p className="text-muted-foreground">Level {pet.level} • {pet.evolution}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm">4.9</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Rating</p>
                      </div>
                    </div>
                    
                    {/* Experience Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-neon-green">Experience</span>
                        <span>{pet.experience}/{pet.nextLevelExp} XP</span>
                      </div>
                      <Progress value={(pet.experience / pet.nextLevelExp) * 100} className="h-2 bg-muted">
                        <div 
                          className="h-full bg-gradient-to-r from-neon-green to-neon-blue transition-all duration-300"
                          style={{ width: `${(pet.experience / pet.nextLevelExp) * 100}%` }}
                        />
                      </Progress>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Action Controls */}
              <Card className="mt-6 bg-card/80 backdrop-blur-sm border-neon-green/30">
                <CardHeader>
                  <CardTitle className="text-neon-green flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Care Controls
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-3 block">
                      Care Intensity: {careAmount[0]}%
                    </label>
                    <Slider
                      value={careAmount}
                      onValueChange={setCareAmount}
                      max={100}
                      min={10}
                      step={10}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Button 
                      onClick={feedPet}
                      className="bg-neon-pink/20 hover:bg-neon-pink hover:text-background border border-neon-pink/50 text-neon-pink"
                    >
                      <Heart className="w-4 h-4 mr-1" />
                      Feed
                    </Button>
                    <Button 
                      onClick={playWithPet}
                      className="bg-neon-blue/20 hover:bg-neon-blue hover:text-background border border-neon-blue/50 text-neon-blue"
                    >
                      <Gamepad2 className="w-4 h-4 mr-1" />
                      Play
                    </Button>
                    <Button 
                      onClick={trainPet}
                      className="bg-neon-green/20 hover:bg-neon-green hover:text-background border border-neon-green/50 text-neon-green"
                    >
                      <Zap className="w-4 h-4 mr-1" />
                      Train
                    </Button>
                    <Button 
                      onClick={restPet}
                      className="bg-neon-purple/20 hover:bg-neon-purple hover:text-background border border-neon-purple/50 text-neon-purple"
                    >
                      <Sparkles className="w-4 h-4 mr-1" />
                      Rest
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pet Stats & Info */}
            <div className="space-y-6">
              {/* Stats */}
              <Card className="bg-card/80 backdrop-blur-sm border-neon-blue/30">
                <CardHeader>
                  <CardTitle className="text-neon-blue">Pet Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-neon-pink">Happiness</span>
                      <span>{petStats.happiness}%</span>
                    </div>
                    <Progress value={petStats.happiness} className="h-3 bg-muted">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-pink to-neon-purple transition-all duration-300"
                        style={{ width: `${petStats.happiness}%` }}
                      />
                    </Progress>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-neon-blue">Energy</span>
                      <span>{petStats.energy}%</span>
                    </div>
                    <Progress value={petStats.energy} className="h-3 bg-muted">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-green transition-all duration-300"
                        style={{ width: `${petStats.energy}%` }}
                      />
                    </Progress>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-neon-green">Hunger</span>
                      <span>{100 - petStats.hunger}%</span>
                    </div>
                    <Progress value={100 - petStats.hunger} className="h-3 bg-muted">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-green to-accent transition-all duration-300"
                        style={{ width: `${100 - petStats.hunger}%` }}
                      />
                    </Progress>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-neon-purple">Health</span>
                      <span>{petStats.health}%</span>
                    </div>
                    <Progress value={petStats.health} className="h-3 bg-muted">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-purple to-neon-pink transition-all duration-300"
                        style={{ width: `${petStats.health}%` }}
                      />
                    </Progress>
                  </div>
                </CardContent>
              </Card>

              {/* Pet Info */}
              <Card className="bg-card/80 backdrop-blur-sm border-neon-green/30">
                <CardHeader>
                  <CardTitle className="text-neon-green">Pet Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neon-pink mb-2">Personality Traits</h4>
                    <div className="flex flex-wrap gap-2">
                      {pet.personalityTraits.map((trait, index) => (
                        <Badge key={index} variant="outline" className="text-neon-blue border-neon-blue/50">
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-purple mb-2">Favorite Activities</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {pet.favoriteActivities.map((activity, index) => (
                        <li key={index}>• {activity}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-green mb-2">Achievements</h4>
                    <div className="flex flex-wrap gap-2">
                      {pet.achievements.map((achievement, index) => (
                        <Badge key={index} className="bg-neon-green/20 text-neon-green border-neon-green/50">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-muted">
                    <p className="text-sm text-muted-foreground">
                      <strong>Birthday:</strong> {pet.birthday}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple hover:text-background"
                >
                  <Gift className="w-4 h-4 mr-1" />
                  Gift
                </Button>
                <Button 
                  variant="outline" 
                  className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-background"
                >
                  <Camera className="w-4 h-4 mr-1" />
                  Photo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
