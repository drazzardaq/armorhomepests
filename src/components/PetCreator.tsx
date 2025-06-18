
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Plus } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface PetCreatorProps {
  onPetCreated: () => void;
}

const PetCreator = ({ onPetCreated }: PetCreatorProps) => {
  const [isCreating, setIsCreating] = useState(false);
  const [petData, setPetData] = useState({
    name: "",
    type: ""
  });
  const { user } = useAuth();
  const { toast } = useToast();

  const petTypes = [
    { value: "cat", label: "Cat 🐱", emoji: "🐱" },
    { value: "dog", label: "Dog 🐶", emoji: "🐶" },
    { value: "bird", label: "Bird 🐦", emoji: "🐦" },
    { value: "fish", label: "Fish 🐠", emoji: "🐠" },
    { value: "rabbit", label: "Rabbit 🐰", emoji: "🐰" },
    { value: "dragon", label: "Dragon 🐉", emoji: "🐉" },
    { value: "unicorn", label: "Unicorn 🦄", emoji: "🦄" }
  ];

  const handleCreatePet = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to create a pet.",
        variant: "destructive"
      });
      return;
    }

    if (!petData.name.trim() || !petData.type) {
      toast({
        title: "Missing Information",
        description: "Please provide both a name and type for your pet.",
        variant: "destructive"
      });
      return;
    }

    setIsCreating(true);

    try {
      const { error } = await supabase
        .from('pets')
        .insert([
          {
            user_id: user.id,
            name: petData.name.trim(),
            type: petData.type,
            level: 1,
            happiness: 50,
            health: 100,
            energy: 80
          }
        ]);

      if (error) {
        console.error('Error creating pet:', error);
        toast({
          title: "Creation Failed",
          description: "Failed to create your pet. Please try again.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Pet Created! 🎉",
          description: `Welcome ${petData.name} to your collection!`,
        });
        
        // Reset form
        setPetData({ name: "", type: "" });
        onPetCreated();
      }
    } catch (error) {
      console.error('Error creating pet:', error);
      toast({
        title: "Creation Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Card className="bg-card/90 backdrop-blur-lg border-neon-green/30 shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl gradient-cosmic bg-clip-text text-transparent flex items-center justify-center gap-2">
          <Plus className="w-6 h-6 text-neon-green" />
          Adopt a New Pet
        </CardTitle>
        <p className="text-muted-foreground">Create your perfect digital companion</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleCreatePet} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="pet-name" className="text-neon-pink">Pet Name</Label>
            <Input
              id="pet-name"
              type="text"
              placeholder="Enter your pet's name..."
              value={petData.name}
              onChange={(e) => setPetData(prev => ({ ...prev, name: e.target.value }))}
              className="border-muted bg-background/50 focus:border-neon-pink"
              maxLength={20}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pet-type" className="text-neon-blue">Pet Type</Label>
            <Select 
              value={petData.type} 
              onValueChange={(value) => setPetData(prev => ({ ...prev, type: value }))}
            >
              <SelectTrigger className="border-muted bg-background/50 focus:border-neon-blue">
                <SelectValue placeholder="Choose a pet type..." />
              </SelectTrigger>
              <SelectContent className="bg-card border-muted">
                {petTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value} className="focus:bg-neon-blue/20">
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{type.emoji}</span>
                      {type.label}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Preview */}
          {petData.type && (
            <div className="text-center p-4 bg-muted/20 rounded-lg border border-neon-purple/30">
              <div className="text-4xl mb-2">
                {petTypes.find(t => t.value === petData.type)?.emoji}
              </div>
              <p className="text-sm text-muted-foreground">
                Your {petData.name || 'pet'} will be a {petTypes.find(t => t.value === petData.type)?.label.replace(/\s🐱|🐶|🐦|🐠|🐰|🐉|🦄/, '')}
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isCreating || !petData.name.trim() || !petData.type}
            className="w-full gradient-cosmic text-white hover:opacity-90"
          >
            {isCreating ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                Creating Pet...
              </div>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Adopt Pet
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PetCreator;
