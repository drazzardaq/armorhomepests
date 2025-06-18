
import { Button } from "@/components/ui/button";
import { Home, Users, Store, Trophy, Settings, User, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";

const Navigation = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-neon-pink/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              🐰
              <span className="ml-2 text-neon-pink neon-text">Pixel</span>
              <span className="text-neon-blue neon-text">Pals</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              className={`text-neon-pink hover:text-neon-pink hover:bg-neon-pink/10 ${
                isActive('/') ? 'bg-neon-pink/20' : ''
              }`}
              asChild
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className={`text-neon-blue hover:text-neon-blue hover:bg-neon-blue/10 ${
                isActive('/friends') ? 'bg-neon-blue/20' : ''
              }`}
              asChild
            >
              <Link to="/friends">
                <Users className="w-4 h-4 mr-2" />
                Friends
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className={`text-neon-green hover:text-neon-green hover:bg-neon-green/10 ${
                isActive('/shop') ? 'bg-neon-green/20' : ''
              }`}
              asChild
            >
              <Link to="/shop">
                <Store className="w-4 h-4 mr-2" />
                Shop
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className={`text-neon-purple hover:text-neon-purple hover:bg-neon-purple/10 ${
                isActive('/achievements') ? 'bg-neon-purple/20' : ''
              }`}
              asChild
            >
              <Link to="/achievements">
                <Trophy className="w-4 h-4 mr-2" />
                Achievements
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className={`text-neon-blue hover:text-neon-blue hover:bg-neon-blue/10 ${
                isActive('/profile') ? 'bg-neon-blue/20' : ''
              }`}
              asChild
            >
              <Link to="/profile">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground hover:bg-muted/20"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
              {theme === 'dark' ? 'Light' : 'Dark'}
            </Button>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background"
              asChild
            >
              <Link to="/auth">
                Sign In
              </Link>
            </Button>
            <Button 
              className="gradient-cosmic text-white hover:opacity-90"
              asChild
            >
              <Link to="/auth">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
