
import PetCard from "./PetCard";

const PetGallery = () => {
  const pets = [
    {
      name: "Sparkle",
      type: "Crystal Fox",
      level: 15,
      happiness: 85,
      energy: 70,
      hunger: 25,
      image: "🦊"
    },
    {
      name: "Zappy",
      type: "Electric Cat",
      level: 12,
      happiness: 92,
      energy: 45,
      hunger: 60,
      image: "⚡"
    },
    {
      name: "Glimmer",
      type: "Neon Dragon",
      level: 20,
      happiness: 78,
      energy: 90,
      hunger: 15,
      image: "🐲"
    },
    {
      name: "Pixel",
      type: "Digital Bunny",
      level: 8,
      happiness: 95,
      energy: 60,
      hunger: 40,
      image: "🐰"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            <span className="text-neon-blue">Your Pet</span>{" "}
            <span className="text-neon-green">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Meet your adorable digital companions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pets.map((pet, index) => (
            <div key={pet.name} style={{ animationDelay: `${index * 0.2}s` }}>
              <PetCard {...pet} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetGallery;
