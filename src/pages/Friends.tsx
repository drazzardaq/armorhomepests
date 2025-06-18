
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Gift, Eye, UserPlus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Friends = () => {
  const friends = [
    {
      id: 1,
      username: "NeonRider88",
      status: "online",
      petCount: 4,
      lastActive: "now",
      favoritePet: "Sparkle the Crystal Fox",
      level: 25
    },
    {
      id: 2,
      username: "PixelMaster",
      status: "playing",
      petCount: 7,
      lastActive: "2 minutes ago",
      favoritePet: "Glimmer the Neon Dragon",
      level: 32
    },
    {
      id: 3,
      username: "CyberPet_Lover",
      status: "offline",
      petCount: 3,
      lastActive: "1 hour ago",
      favoritePet: "Zappy the Electric Cat",
      level: 18
    },
    {
      id: 4,
      username: "RetroGamer_2025",
      status: "online",
      petCount: 5,
      lastActive: "5 minutes ago",
      favoritePet: "Pixel the Digital Bunny",
      level: 28
    }
  ];

  const friendRequests = [
    { id: 1, username: "StarCollector", level: 15, mutualFriends: 3 },
    { id: 2, username: "NeonDreamer", level: 22, mutualFriends: 1 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-neon-green";
      case "playing": return "bg-neon-blue";
      case "offline": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 neon-text">
              <span className="text-neon-blue">Friends</span>{" "}
              <span className="text-neon-pink">Network</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect with fellow pet trainers around the world
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Friend Requests */}
            <div className="lg:col-span-1">
              <Card className="bg-card/80 backdrop-blur-sm border-neon-pink/30 mb-6">
                <CardHeader>
                  <CardTitle className="text-neon-pink flex items-center">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Friend Requests
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {friendRequests.map((request) => (
                    <div key={request.id} className="p-4 bg-muted/20 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-bold text-neon-pink">{request.username}</h4>
                          <p className="text-sm text-muted-foreground">Level {request.level}</p>
                          <p className="text-xs text-muted-foreground">{request.mutualFriends} mutual friends</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-neon-green hover:bg-neon-green/80 flex-1">
                          Accept
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Decline
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Search Friends */}
              <Card className="bg-card/80 backdrop-blur-sm border-neon-blue/30">
                <CardHeader>
                  <CardTitle className="text-neon-blue flex items-center">
                    <Search className="w-5 h-5 mr-2" />
                    Find Friends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input 
                      placeholder="Search by username..." 
                      className="bg-muted/20 border-neon-blue/30"
                    />
                    <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple">
                      Search
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Friends List */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {friends.map((friend, index) => (
                  <Card 
                    key={friend.id}
                    className="bg-card/80 backdrop-blur-sm border-neon-blue/30 hover:border-neon-blue transition-all duration-300 animate-float"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-neon-blue">{friend.username}</CardTitle>
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(friend.status)}`}></div>
                          <Badge variant="outline" className="text-xs">
                            Lv. {friend.level}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground capitalize">{friend.status}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm">
                          <span className="text-neon-green font-semibold">{friend.petCount}</span> pets
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Favorite: {friend.favoritePet}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Last active: {friend.lastActive}
                        </p>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-background flex-1"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Visit
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink hover:text-background flex-1"
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Chat
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-neon-green/50 text-neon-green hover:bg-neon-green hover:text-background"
                        >
                          <Gift className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
