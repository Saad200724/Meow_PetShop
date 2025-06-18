import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, DollarSign, Truck, Award, HeadphonesIcon } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">About Meow Meow Pet Shop</h1>
        <p className="text-lg text-muted-foreground">Your trusted pet care partner since 2018</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Meow Meow Pet Shop was founded in 2018 with a simple mission: to provide the best possible care for pets in Savar and surrounding areas. What started as a small neighborhood store has grown into the most trusted pet supply destination in the region.
          </p>
          <p className="text-muted-foreground mb-4">
            We understand that pets are family members, not just animals. That's why we carefully select every product in our store, ensuring that we only offer items that we would use for our own beloved pets.
          </p>
          <p className="text-muted-foreground">
            Our team consists of passionate pet lovers who are always ready to help you find the perfect products for your furry, feathered, or scaled family members. We believe in building lasting relationships with our customers and their pets.
          </p>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
            alt="Meow Meow Pet Shop interior" 
            className="rounded-xl shadow-lg w-full h-auto" 
          />
          <div className="absolute -bottom-4 -right-4 bg-primary p-4 rounded-xl shadow-lg">
            <p className="font-bold text-primary-foreground text-lg">6+ Years</p>
            <p className="text-primary-foreground text-sm">Serving Pets</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <Card className="mb-16">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-accent-foreground w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Pet-Loving</h3>
              <p className="text-muted-foreground">Every decision we make is guided by our love for animals and commitment to their wellbeing.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-foreground w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Trusted</h3>
              <p className="text-muted-foreground">Built on trust and reliability, we're the go-to pet store for hundreds of families in Savar.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-accent-foreground w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Community-Focused</h3>
              <p className="text-muted-foreground">We're proud to be part of the Savar community and support local pet owners.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Choose Us Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-muted">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <DollarSign className="text-accent w-6 h-6 mr-2" />
              Affordable Prices
            </h3>
            <p className="text-muted-foreground">We believe quality pet care shouldn't break the bank. That's why we offer competitive prices on all our products while maintaining the highest quality standards.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <Truck className="text-accent w-6 h-6 mr-2" />
              Delivery Available
            </h3>
            <p className="text-muted-foreground">Can't make it to the store? No problem! We offer convenient delivery services throughout Savar and nearby areas. Free delivery for orders over ৳1,000.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <Award className="text-accent w-6 h-6 mr-2" />
              Quality Products
            </h3>
            <p className="text-muted-foreground">We partner with trusted brands and suppliers to ensure every product meets our high standards. Your pet's health and happiness are our top priority.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <HeadphonesIcon className="text-accent w-6 h-6 mr-2" />
              Expert Advice
            </h3>
            <p className="text-muted-foreground">Our knowledgeable staff is always ready to help you choose the right products for your pet's specific needs, age, and health requirements.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
