
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Star, Coins, Sparkles, Heart, Zap } from "lucide-react";

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [cartItems, setCartItems] = useState(0);

  const shopItems = [
    {
      id: 1,
      name: "Rainbow Food Bowl",
      price: 150,
      category: "food",
      rarity: "rare",
      image: "https://images.unsplash.com/photo-1585195358331-8dbdc0ea8b91?w=300&q=80",
      description: "Magical bowl that makes any food taste amazing"
    },
    {
      id: 2,
      name: "Crystal Collar",
      price: 300,
      category: "accessory",
      rarity: "legendary",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&q=80",
      description: "Increases pet's happiness by 25%"
    },
    {
      id: 3,
      name: "Energy Potion",
      price: 75,
      category: "consumable",
      rarity: "common",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&q=80",
      description: "Instantly restores 50 energy points"
    },
    {
      id: 4,
      name: "Pixel Toy Ball",
      price: 120,
      category: "toy",
      rarity: "uncommon",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&q=80",
      description: "Interactive ball that keeps pets entertained"
    },
    {
      id: 5,
      name: "Cosmic Bed",
      price: 500,
      category: "furniture",
      rarity: "epic",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&q=80",
      description: "Luxury bed that improves sleep quality"
    },
    {
      id: 6,
      name: "Evolution Stone",
      price: 800,
      category: "evolution",
      rarity: "legendary",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&q=80",
      description: "Rare stone that unlocks new evolution paths"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "text-gray-400";
      case "uncommon": return "text-neon-green";
      case "rare": return "text-neon-blue";
      case "epic": return "text-neon-purple";
      case "legendary": return "text-neon-pink";
      default: return "text-gray-400";
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case "common": return "border-gray-400/30";
      case "uncommon": return "border-neon-green/30";
      case "rare": return "border-neon-blue/30";
      case "epic": return "border-neon-purple/30";
      case "legendary": return "border-neon-pink/30";
      default: return "border-gray-400/30";
    }
  };

  const filteredItems = shopItems.filter(item => 
    item.price >= priceRange[0] && item.price <= priceRange[1]
  );

  const addToCart = (item: any) => {
    setCartItems(prev => prev + 1);
    // Add some visual feedback here
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-neon-pink neon-text">Pixel</span>
              <span className="text-neon-blue neon-text"> Shop</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Discover amazing items for your digital companions
            </p>
            
            {/* Currency Display */}
            <div className="flex justify-center items-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-neon-pink/30">
                <Coins className="w-5 h-5 text-neon-pink" />
                <span className="text-neon-pink font-bold">2,450</span>
                <span className="text-muted-foreground">Pixels</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-neon-blue/30">
                <ShoppingCart className="w-5 h-5 text-neon-blue" />
                <span className="text-neon-blue font-bold">{cartItems}</span>
                <span className="text-muted-foreground">Items</span>
              </div>
            </div>
          </div>

          {/* Filters */}
          <Card className="mb-8 bg-card/80 backdrop-blur-sm border-neon-green/30">
            <CardHeader>
              <CardTitle className="text-neon-green">Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-3 block">
                    Price Range: {priceRange[0]} - {priceRange[1]} Pixels
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    min={0}
                    step={25}
                    className="w-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shop Items */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8 bg-muted/50">
              <TabsTrigger value="all">All Items</TabsTrigger>
              <TabsTrigger value="food">Food</TabsTrigger>
              <TabsTrigger value="accessory">Accessories</TabsTrigger>
              <TabsTrigger value="toy">Toys</TabsTrigger>
              <TabsTrigger value="furniture">Furniture</TabsTrigger>
              <TabsTrigger value="evolution">Evolution</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card 
                  key={item.id} 
                  className={`bg-card/80 backdrop-blur-sm ${getRarityBorder(item.rarity)} hover:scale-105 transition-all duration-300 overflow-hidden`}
                >
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge 
                      className={`absolute top-2 right-2 ${getRarityColor(item.rarity)} border-current`}
                      variant="outline"
                    >
                      {item.rarity}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-foreground">{item.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Coins className="w-4 h-4 text-neon-pink" />
                        <span className="font-bold text-neon-pink">{item.price}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm">4.8</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => addToCart(item)}
                      className="w-full gradient-cosmic text-white hover:opacity-90"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Category-specific tabs */}
            {["food", "accessory", "toy", "furniture", "evolution"].map(category => (
              <TabsContent key={category} value={category} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.filter(item => item.category === category).map((item) => (
                  <Card 
                    key={item.id} 
                    className={`bg-card/80 backdrop-blur-sm ${getRarityBorder(item.rarity)} hover:scale-105 transition-all duration-300 overflow-hidden`}
                  >
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <Badge 
                        className={`absolute top-2 right-2 ${getRarityColor(item.rarity)} border-current`}
                        variant="outline"
                      >
                        {item.rarity}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-foreground">{item.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          <Coins className="w-4 h-4 text-neon-pink" />
                          <span className="font-bold text-neon-pink">{item.price}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm">4.8</span>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => addToCart(item)}
                        className="w-full gradient-cosmic text-white hover:opacity-90"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Shop;
