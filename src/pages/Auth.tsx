
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Sparkles, Heart, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: ""
  });
  
  const { signIn, signUp, signInWithGoogle, signInWithGitHub, user } = useAuth();
  const navigate = useNavigate();

  // Redirect authenticated users to home
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const { error } = await signIn(formData.email, formData.password);
    
    if (!error) {
      navigate('/');
    }
    
    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const { error } = await signUp(formData.email, formData.password, formData.username);
    
    setIsLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    await signInWithGoogle();
    setIsLoading(false);
  };

  const handleGitHubSignIn = async () => {
    setIsLoading(true);
    await signInWithGitHub();
    setIsLoading(false);
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
              {/* Social Login Buttons */}
              <div className="space-y-3 mb-6">
                <Button 
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                  className="w-full bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>
                <Button 
                  onClick={handleGitHubSignIn}
                  disabled={isLoading}
                  className="w-full bg-gray-900 text-white hover:bg-gray-800"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Continue with GitHub
                </Button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-muted" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
                </div>
              </div>

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
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signin-email" className="text-neon-blue">Email</Label>
                      <Input 
                        id="signin-email"
                        name="email"
                        type="email" 
                        placeholder="trainer@pixelpals.com"
                        className="border-muted bg-background/50 focus:border-neon-blue"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signin-password" className="text-neon-pink">Password</Label>
                      <div className="relative">
                        <Input 
                          id="signin-password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="border-muted bg-background/50 focus:border-neon-pink pr-10"
                          value={formData.password}
                          onChange={handleInputChange}
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
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-username" className="text-neon-green">Username</Label>
                      <Input 
                        id="signup-username"
                        name="username"
                        type="text" 
                        placeholder="PixelTrainer123"
                        className="border-muted bg-background/50 focus:border-neon-green"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-neon-blue">Email</Label>
                      <Input 
                        id="signup-email"
                        name="email"
                        type="email" 
                        placeholder="trainer@pixelpals.com"
                        className="border-muted bg-background/50 focus:border-neon-blue"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-neon-pink">Password</Label>
                      <div className="relative">
                        <Input 
                          id="signup-password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          className="border-muted bg-background/50 focus:border-neon-pink pr-10"
                          value={formData.password}
                          onChange={handleInputChange}
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
