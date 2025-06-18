
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, Zap, Gamepad2, Gift, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface PetCardProps {
  name: string;
  type: string;
  level: number;
  happiness: number;
  energy: number;
  hunger: number;
  image: string;
}

const PetCard = ({ name, type, level, happiness, energy, hunger, image }: PetCardProps) => {
  return (
    <Card className="bg-black/90 backdrop-blur-xl border-neon-pink/30 hover:border-neon-pink transition-all duration-300 animate-float overflow-hidden bg-gradient-to-br from-slate-200/20 to-indigo-400/20">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 w-32 h-32 gradient-cosmic rounded-full flex items-center justify-center text-6xl animate-pulse-neon">
          {image}
        </div>
        <CardTitle className="text-neon-pink neon-text">{name}</CardTitle>
        <p className="text-neon-blue">Level {level} {type}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-neon-pink">Happiness</span>
              <span>{happiness}%</span>
            </div>
            <Progress value={happiness} className="h-2 bg-muted">
              <div 
                className="h-full gradient-neon transition-all duration-300"
                style={{ width: `${happiness}%` }}
              />
            </Progress>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-neon-blue">Energy</span>
              <span>{energy}%</span>
            </div>
            <Progress value={energy} className="h-2 bg-muted">
              <div 
                className="h-full bg-gradient-to-r from-neon-blue to-neon-green transition-all duration-300"
                style={{ width: `${energy}%` }}
              />
            </Progress>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-neon-green">Hunger</span>
              <span>{100 - hunger}%</span>
            </div>
            <Progress value={100 - hunger} className="h-2 bg-muted">
              <div 
                className="h-full bg-gradient-to-r from-neon-green to-accent transition-all duration-300"
                style={{ width: `${100 - hunger}%` }}
              />
            </Progress>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 pt-4">
          <Button 
            variant="outline" 
            size="sm"
            className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink hover:text-background"
          >
            <Heart className="w-4 h-4 mr-1" />
            Feed
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-background"
          >
            <Gamepad2 className="w-4 h-4 mr-1" />
            Play
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-neon-green/50 text-neon-green hover:bg-neon-green hover:text-background"
          >
            <Zap className="w-4 h-4 mr-1" />
            Train
          </Button>
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button 
            variant="outline" 
            size="sm"
            className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple hover:text-background flex-1"
          >
            <Gift className="w-4 h-4 mr-1" />
            Gift
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-background flex-1"
            asChild
          >
            <Link to="/pet/1">
              <Eye className="w-4 h-4 mr-1" />
              View
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PetCard;
