
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center retro-grid overflow-hidden pet-bg">
      <div className="absolute inset-0 bg-background/60"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-16 h-16 gradient-cosmic rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-neon-blue/20 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-neon-green/20 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 animate-float">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
            <span className="text-neon-pink">Pixel</span>
            <span className="text-neon-blue">Pals</span>
          </h1>
          <div className="flex justify-center items-center gap-4 mb-6">
            <Sparkles className="text-neon-green w-8 h-8 animate-pulse" />
            <p className="text-xl md:text-2xl text-muted-foreground">
              Adopt • Care • Evolve • Connect
            </p>
            <Heart className="text-neon-pink w-8 h-8 animate-pulse" />
          </div>
        </div>
        
        <div className="mb-12">
          <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
            Welcome to the ultimate virtual pet experience! Adopt adorable pixel creatures, 
            watch them evolve, and connect with friends in a vibrant digital world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-cosmic animate-gradient text-white hover:opacity-90 px-8 py-6 text-lg font-bold"
            >
              <Zap className="mr-2 w-5 h-5" />
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-300 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-neon-pink/30 hover:border-neon-pink transition-all duration-300 nature-bg">
            <div className="absolute inset-0 bg-background/70 rounded-lg"></div>
            <div className="relative z-10">
              <div className="text-neon-pink text-3xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2 text-neon-pink">Interactive Care</h3>
              <p className="text-muted-foreground">Feed, play, and nurture your pets with engaging mini-games</p>
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 forest-bg">
            <div className="absolute inset-0 bg-background/70 rounded-lg"></div>
            <div className="relative z-10">
              <div className="text-neon-blue text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-neon-blue">Evolution System</h3>
              <p className="text-muted-foreground">Watch your pets grow and evolve into unique forms</p>
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-neon-green/30 hover:border-neon-green transition-all duration-300">
            <div className="text-neon-green text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-2 text-neon-green">Social Network</h3>
            <p className="text-muted-foreground">Connect with friends and visit each other's pets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
