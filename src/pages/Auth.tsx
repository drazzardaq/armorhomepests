
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Sparkles, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth process
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to main app
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background retro-grid relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 gradient-cosmic rounded-full animate-float opacity-30"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-neon-blue/20 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-neon-green/20 rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-neon-purple/20 rounded-full animate-float opacity-35" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center animate-float">
            <Link to="/" className="inline-block">
              <h1 className="text-4xl font-bold mb-2 neon-text">
                <span className="text-neon-pink">Pixel</span>
                <span className="text-neon-blue">Pals</span>
              </h1>
            </Link>
            <div className="flex justify-center items-center gap-2 mb-6">
              <Sparkles className="text-neon-green w-6 h-6 animate-pulse" />
              <p className="text-muted-foreground">Welcome to your digital pet world</p>
              <Heart className="text-neon-pink w-6 h-6 animate-pulse" />
            </div>
          </div>

          {/* Auth Card */}
          <Card className="bg-card/90 backdrop-blur-lg border-neon-pink/30 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl gradient-cosmic bg-clip-text text-transparent">
                Join the Adventure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="signin" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2 bg-muted/50">
                  <TabsTrigger value="signin" className="data-[state=active]:bg-neon-pink/20 data-[state=active]:text-neon-pink">
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger value="signup" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">
                    Sign Up
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="signin" className="space-y-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-neon-blue">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="trainer@pixelpals.com"
                        className="border-muted bg-background/50 focus:border-neon-blue"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-neon-pink">Password</Label>
                      <div className="relative">
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="border-muted bg-background/50 focus:border-neon-pink pr-10"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full gradient-cosmic text-white hover:opacity-90"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          Signing In...
                        </div>
                      ) : (
                        <>
                          <Zap className="w-4 h-4 mr-2" />
                          Sign In
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signup" className="space-y-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-neon-green">Username</Label>
                      <Input 
                        id="username" 
                        type="text" 
                        placeholder="PixelTrainer123"
                        className="border-muted bg-background/50 focus:border-neon-green"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-neon-blue">Email</Label>
                      <Input 
                        id="signup-email" 
                        type="email" 
                        placeholder="trainer@pixelpals.com"
                        className="border-muted bg-background/50 focus:border-neon-blue"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-neon-pink">Password</Label>
                      <div className="relative">
                        <Input 
                          id="signup-password" 
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          className="border-muted bg-background/50 focus:border-neon-pink pr-10"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full gradient-cosmic text-white hover:opacity-90"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          Creating Account...
                        </div>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 mr-2" />
                          Create Account
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  By continuing, you agree to our{" "}
                  <a href="#" className="text-neon-blue hover:underline">Terms of Service</a>
                  {" "}and{" "}
                  <a href="#" className="text-neon-pink hover:underline">Privacy Policy</a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features preview */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-neon-pink/20">
              <div className="text-2xl mb-2">🐾</div>
              <p className="text-xs text-muted-foreground">Adopt Pets</p>
            </div>
            <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-neon-blue/20">
              <div className="text-2xl mb-2">🎮</div>
              <p className="text-xs text-muted-foreground">Play Games</p>
            </div>
            <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-neon-green/20">
              <div className="text-2xl mb-2">👥</div>
              <p className="text-xs text-muted-foreground">Make Friends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
