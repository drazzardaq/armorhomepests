
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PetGallery from "@/components/PetGallery";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import UserPets from "@/components/UserPets";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-neon-pink/20 border-t-neon-pink rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {user ? (
        <div className="pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold mb-4">
                <span className="text-neon-pink neon-text">Welcome back</span>
                <span className="text-neon-blue neon-text"> to PixelPals!</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Take care of your digital companions and watch them grow
              </p>
            </div>
            <UserPets />
          </div>
        </div>
      ) : (
        <>
          <Hero />
          <PetGallery />
          <Stats />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
