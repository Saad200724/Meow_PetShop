import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Product } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import OrderModal from "@/components/OrderModal";
import { ShoppingCart, Phone, MessageSquare, Truck, Award, Clock, Star, Heart, PawPrint } from "lucide-react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const featuredProducts = products.slice(0, 4);

  const handleOrderClick = (product?: Product) => {
    setSelectedProduct(product || null);
    setOrderModalOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative cat-gradient min-h-screen flex items-center paw-pattern overflow-hidden">
        <div className="max-w-7xl tv-max-width ultrawide-max-width mx-auto spacing-responsive-md">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in mobile-center order-2 lg:order-1">
              <div className="inline-flex items-center bg-primary/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 animate-bounce-gentle">
                <PawPrint className="text-primary w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                <span className="text-primary font-semibold text-xs sm:text-sm">Premium Cat Care Since 2018</span>
              </div>
              
              <h1 className="text-responsive-hero font-bold text-foreground mb-4 sm:mb-6 leading-tight tv-large-text ultrawide-text">
                Meow Meow
                <span className="block text-primary">Pet Shop</span>
              </h1>
              <p className="text-responsive-xl text-muted-foreground mb-3 sm:mb-6 font-medium">
                Everything Your Cat Needs
              </p>
              <p className="text-responsive-base text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                Bangladesh's most trusted cat care destination in Savar. Premium products, expert advice, and endless love for your feline family.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-start">
                <Link href="/products" className="w-full sm:w-auto">
                  <Button className="premium-button bg-accent text-accent-foreground hover:bg-accent/90 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-xl w-full sm:w-auto whitespace-nowrap">
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    Shop Cat Products
                  </Button>
                </Link>
                <Button 
                  onClick={() => handleOrderClick()}
                  className="premium-button bg-primary text-primary-foreground hover:bg-primary/90 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-xl w-full sm:w-auto whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Order Now
                </Button>
                <Button 
                  asChild
                  className="premium-button bg-blue-600 text-white hover:bg-blue-700 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-xl w-full sm:w-auto whitespace-nowrap"
                >
                  <a href="https://m.me/meowmeowpetshop" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    Message Us
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Beautiful cat with premium cat products" 
                  className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl w-full h-auto animate-float" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl sm:rounded-3xl"></div>
              </div>
              
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 glass-effect p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-lg hidden sm:block">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Clock className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                  <div>
                    <p className="font-bold text-white text-sm sm:text-lg">Open Every Day</p>
                    <p className="text-white/80 text-xs sm:text-base">10AM - 10PM</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 glass-effect p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-lg hidden md:block">
                <div className="flex items-center space-x-2">
                  <Heart className="text-red-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-white font-semibold text-xs sm:text-base">Trusted by 500+ Cat Parents</span>
                </div>
              </div>
              
              {/* Floating cat icons - hidden on mobile */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 text-primary/30 animate-float hidden sm:block">
                <PawPrint className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="absolute bottom-16 sm:bottom-20 right-2 sm:right-4 text-primary/30 animate-bounce-gentle hidden sm:block">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator - hidden on mobile */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle hidden sm:block">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-primary/50 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-accent/10 rounded-full px-6 py-3 mb-6">
            <ShoppingCart className="text-accent w-5 h-5 mr-2" />
            <span className="text-accent font-semibold">Premium Cat Products</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Top Picks for Your
            <span className="block text-primary">Feline Friend</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully selected premium products that cats love and owners trust
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProductCard
                product={product}
                onOrder={handleOrderClick}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/products">
            <Button className="premium-button bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-lg rounded-xl shadow-lg">
              View All Cat Products
              <ShoppingCart className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground">Your pet's happiness is our priority</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-primary-foreground w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Free Delivery</h3>
              <p className="text-muted-foreground">Free delivery within Savar area for orders over ৳1,000</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-accent-foreground w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Quality Products</h3>
              <p className="text-muted-foreground">Only the best brands and highest quality products for your pets</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary-foreground w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Always Open</h3>
              <p className="text-muted-foreground">Open every day from 10AM to 10PM for your convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Happy Pet Parents</h2>
            <p className="text-lg text-muted-foreground">What our customers say about us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Amazing service! My cat Fluffy loves the food here. The delivery is always on time and the staff is so friendly."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b332c3de?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80" 
                    alt="Happy customer with pet" 
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                  <div>
                    <p className="font-semibold text-foreground">Sarah Rahman</p>
                    <p className="text-sm text-muted-foreground">Cat Mom</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Best pet shop in Savar! Great prices and excellent quality. My dog Max is healthier than ever."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80" 
                    alt="Happy customer with dog" 
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                  <div>
                    <p className="font-semibold text-foreground">Ahmed Hassan</p>
                    <p className="text-sm text-muted-foreground">Dog Dad</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Trustworthy and reliable. They always have what I need for my pets. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80" 
                    alt="Happy family with pets" 
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                  <div>
                    <p className="font-semibold text-foreground">Fatima Begum</p>
                    <p className="text-sm text-muted-foreground">Pet Lover</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <OrderModal
        product={selectedProduct}
        open={orderModalOpen}
        onOpenChange={setOrderModalOpen}
      />
    </div>
  );
}
