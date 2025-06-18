
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, Zap, Shield, Star, Play, Coffee, Utensils } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Pet {
  id: string;
  name: string;
  type: string;
  level: number;
  happiness: number;
  health: number;
  energy: number;
  image_url?: string;
}

interface PetInteractionProps {
  pet: Pet;
  onUpdate: (updatedPet: Pet) => void;
}

const PetInteraction = ({ pet, onUpdate }: PetInteractionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  const feedPet = () => {
    if (pet.health >= 100) {
      toast({
        title: "Pet is Full!",
        description: `${pet.name} doesn't need food right now.`,
        variant: "default"
      });
      return;
    }

    const newHealth = Math.min(100, pet.health + 20);
    const newHappiness = Math.min(100, pet.happiness + 10);
    
    onUpdate({
      ...pet,
      health: newHealth,
      happiness: newHappiness
    });

    toast({
      title: "Yum! 🍖",
      description: `${pet.name} enjoyed the meal and feels better!`,
    });
  };

  const playWithPet = async () => {
    if (pet.energy < 20) {
      toast({
        title: "Too Tired!",
        description: `${pet.name} needs rest before playing.`,
        variant: "destructive"
      });
      return;
    }

    setIsPlaying(true);
    
    // Simulate playing animation
    setTimeout(() => {
      const newHappiness = Math.min(100, pet.happiness + 25);
      const newEnergy = Math.max(0, pet.energy - 15);
      
      onUpdate({
        ...pet,
        happiness: newHappiness,
        energy: newEnergy
      });

      toast({
        title: "So Much Fun! 🎾",
        description: `${pet.name} had a great time playing with you!`,
      });
      
      setIsPlaying(false);
    }, 2000);
  };

  const restPet = () => {
    if (pet.energy >= 100) {
      toast({
        title: "Full of Energy!",
        description: `${pet.name} doesn't need rest right now.`,
        variant: "default"
      });
      return;
    }

    const newEnergy = Math.min(100, pet.energy + 30);
    
    onUpdate({
      ...pet,
      energy: newEnergy
    });

    toast({
      title: "Zzz... 😴",
      description: `${pet.name} feels refreshed after a good rest!`,
    });
  };

  const getHealthColor = (value: number) => {
    if (value >= 70) return "text-neon-green";
    if (value >= 40) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <Card className="bg-card/90 backdrop-blur-lg border-neon-pink/30 shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl gradient-cosmic bg-clip-text text-transparent">
          {pet.name}
        </CardTitle>
        <p className="text-muted-foreground capitalize">{pet.type} • Level {pet.level}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Pet Avatar */}
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-neon-pink/20 to-neon-blue/20 rounded-full flex items-center justify-center text-6xl animate-float">
            {pet.type === 'cat' && '🐱'}
            {pet.type === 'dog' && '🐶'}
            {pet.type === 'bird' && '🐦'}
            {pet.type === 'fish' && '🐠'}
            {pet.type === 'rabbit' && '🐰'}
            {!['cat', 'dog', 'bird', 'fish', 'rabbit'].includes(pet.type) && '🦄'}
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-medium">
                <Heart className="w-4 h-4 text-red-500" />
                Health
              </span>
              <span className={`text-sm font-bold ${getHealthColor(pet.health)}`}>
                {pet.health}/100
              </span>
            </div>
            <Progress value={pet.health} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-medium">
                <Star className="w-4 h-4 text-yellow-500" />
                Happiness
              </span>
              <span className={`text-sm font-bold ${getHealthColor(pet.happiness)}`}>
                {pet.happiness}/100
              </span>
            </div>
            <Progress value={pet.happiness} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-medium">
                <Zap className="w-4 h-4 text-neon-blue" />
                Energy
              </span>
              <span className={`text-sm font-bold ${getHealthColor(pet.energy)}`}>
                {pet.energy}/100
              </span>
            </div>
            <Progress value={pet.energy} className="h-2" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <Button
            onClick={feedPet}
            className="flex flex-col items-center p-4 h-auto bg-neon-green/20 hover:bg-neon-green/30 border border-neon-green/50"
            variant="outline"
          >
            <Utensils className="w-6 h-6 mb-2 text-neon-green" />
            <span className="text-xs">Feed</span>
          </Button>

          <Button
            onClick={playWithPet}
            disabled={isPlaying}
            className="flex flex-col items-center p-4 h-auto bg-neon-pink/20 hover:bg-neon-pink/30 border border-neon-pink/50"
            variant="outline"
          >
            <Play className={`w-6 h-6 mb-2 text-neon-pink ${isPlaying ? 'animate-bounce' : ''}`} />
            <span className="text-xs">{isPlaying ? 'Playing...' : 'Play'}</span>
          </Button>

          <Button
            onClick={restPet}
            className="flex flex-col items-center p-4 h-auto bg-neon-blue/20 hover:bg-neon-blue/30 border border-neon-blue/50"
            variant="outline"
          >
            <Coffee className="w-6 h-6 mb-2 text-neon-blue" />
            <span className="text-xs">Rest</span>
          </Button>
        </div>

        {/* Status Messages */}
        <div className="text-center text-sm text-muted-foreground">
          {pet.happiness >= 80 && "😊 Your pet is very happy!"}
          {pet.happiness >= 50 && pet.happiness < 80 && "🙂 Your pet is content."}
          {pet.happiness >= 20 && pet.happiness < 50 && "😐 Your pet needs attention."}
          {pet.happiness < 20 && "😢 Your pet is sad and needs care."}
        </div>
      </CardContent>
    </Card>
  );
};

export default PetInteraction;
