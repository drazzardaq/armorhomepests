
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PetGallery from "@/components/PetGallery";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PetGallery />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
