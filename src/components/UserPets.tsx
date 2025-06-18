
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import PetInteraction from "./PetInteraction";
import PetCreator from "./PetCreator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Star, Zap } from "lucide-react";

interface Pet {
  id: string;
  name: string;
  type: string;
  level: number;
  happiness: number;
  health: number;
  energy: number;
  image_url?: string;
  created_at: string;
}

const UserPets = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchPets = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('pets')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching pets:', error);
        toast({
          title: "Failed to Load Pets",
          description: "Could not load your pets. Please try again.",
          variant: "destructive"
        });
      } else {
        setPets(data || []);
        if (data && data.length > 0 && !selectedPet) {
          setSelectedPet(data[0]);
        }
      }
    } catch (error) {
      console.error('Error fetching pets:', error);
    } finally {
      setLoading(false);
    }
  };

  const updatePet = async (updatedPet: Pet) => {
    try {
      const { error } = await supabase
        .from('pets')
        .update({
          happiness: updatedPet.happiness,
          health: updatedPet.health,
          energy: updatedPet.energy,
          updated_at: new Date().toISOString()
        })
        .eq('id', updatedPet.id);

      if (error) {
        console.error('Error updating pet:', error);
        toast({
          title: "Update Failed",
          description: "Could not update your pet. Please try again.",
          variant: "destructive"
        });
      } else {
        // Update local state
        setPets(prev => prev.map(pet => 
          pet.id === updatedPet.id ? updatedPet : pet
        ));
        setSelectedPet(updatedPet);
      }
    } catch (error) {
      console.error('Error updating pet:', error);
    }
  };

  const handlePetCreated = () => {
    fetchPets();
  };

  useEffect(() => {
    fetchPets();
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="w-8 h-8 border-2 border-neon-pink/20 border-t-neon-pink rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <Card className="bg-card/90 backdrop-blur-lg border-neon-pink/30 shadow-xl">
        <CardContent className="text-center p-8">
          <p className="text-muted-foreground">Please sign in to manage your pets.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="pets" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-muted/50">
          <TabsTrigger 
            value="pets" 
            className="data-[state=active]:bg-neon-pink/20 data-[state=active]:text-neon-pink"
          >
            My Pets ({pets.length})
          </TabsTrigger>
          <TabsTrigger 
            value="adopt" 
            className="data-[state=active]:bg-neon-green/20 data-[state=active]:text-neon-green"
          >
            Adopt New Pet
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pets" className="space-y-6">
          {pets.length === 0 ? (
            <Card className="bg-card/90 backdrop-blur-lg border-neon-pink/30 shadow-xl">
              <CardContent className="text-center p-8 space-y-4">
                <div className="text-6xl mb-4">🐾</div>
                <h3 className="text-xl font-semibold">No Pets Yet</h3>
                <p className="text-muted-foreground">
                  Start your journey by adopting your first digital pet!
                </p>
                <Button 
                  onClick={() => {
                    const adoptTab = document.querySelector('[data-value="adopt"]') as HTMLElement;
                    adoptTab?.click();
                  }}
                  className="gradient-cosmic text-white hover:opacity-90"
                >
                  Adopt Your First Pet
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pet Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neon-pink">Your Pets</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {pets.map((pet) => (
                    <Card 
                      key={pet.id}
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedPet?.id === pet.id 
                          ? 'bg-neon-pink/20 border-neon-pink/50' 
                          : 'bg-card/50 border-muted hover:bg-card/70'
                      }`}
                      onClick={() => setSelectedPet(pet)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">
                            {pet.type === 'cat' && '🐱'}
                            {pet.type === 'dog' && '🐶'}
                            {pet.type === 'bird' && '🐦'}
                            {pet.type === 'fish' && '🐠'}
                            {pet.type === 'rabbit' && '🐰'}
                            {pet.type === 'dragon' && '🐉'}
                            {pet.type === 'unicorn' && '🦄'}
                            {!['cat', 'dog', 'bird', 'fish', 'rabbit', 'dragon', 'unicorn'].includes(pet.type) && '🦄'}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{pet.name}</h4>
                            <p className="text-sm text-muted-foreground capitalize">
                              {pet.type} • Level {pet.level}
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-xs">
                              <span className="flex items-center gap-1">
                                <Heart className="w-3 h-3 text-red-500" />
                                {pet.health}
                              </span>
                              <span className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-500" />
                                {pet.happiness}
                              </span>
                              <span className="flex items-center gap-1">
                                <Zap className="w-3 h-3 text-neon-blue" />
                                {pet.energy}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Pet Interaction */}
              <div>
                {selectedPet ? (
                  <PetInteraction 
                    pet={selectedPet} 
                    onUpdate={updatePet}
                  />
                ) : (
                  <Card className="bg-card/90 backdrop-blur-lg border-muted shadow-xl">
                    <CardContent className="text-center p-8">
                      <p className="text-muted-foreground">Select a pet to interact with</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="adopt">
          <PetCreator onPetCreated={handlePetCreated} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserPets;
