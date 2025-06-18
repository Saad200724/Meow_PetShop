import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Heart, Cat, Shield, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log("Form submitted:", { isLogin, formData });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen cat-gradient flex items-center justify-center p-4 paw-pattern">
      <div className="w-full max-w-md animate-fade-in">
        <Card className="premium-card shadow-2xl border-0">
          <CardContent className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4 animate-bounce-gentle">
                <Cat className="text-primary w-8 h-8" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                {isLogin ? "Welcome Back!" : "Join Our Cat Family"}
              </h1>
              <p className="text-muted-foreground">
                {isLogin 
                  ? "Sign in to your Meow Meow account" 
                  : "Create your account to start shopping"
                }
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="relative animate-slide-up">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="mt-1 h-12 rounded-xl border-2 border-border/50 focus:border-primary transition-all duration-300"
                    placeholder="Enter your full name"
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="relative">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1 h-12 rounded-xl border-2 border-border/50 focus:border-primary transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="relative">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="h-12 rounded-xl border-2 border-border/50 focus:border-primary transition-all duration-300 pr-12"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="relative animate-slide-up">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="mt-1 h-12 rounded-xl border-2 border-border/50 focus:border-primary transition-all duration-300"
                    placeholder="Confirm your password"
                    required={!isLogin}
                  />
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-12 premium-button bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold text-lg"
              >
                <Heart className="w-5 h-5 mr-2" />
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            {/* Toggle between login/signup */}
            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 text-primary font-semibold hover:underline transition-all duration-200"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>

            <Separator className="my-6" />

            {/* Admin Login Button */}
            <div className="text-center">
              <Link href="/admin/login">
                <Button
                  variant="outline"
                  className="w-full h-10 rounded-xl border-2 border-muted-foreground/20 hover:border-accent hover:bg-accent/5 transition-all duration-300"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Admin Login
                </Button>
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 text-primary/20 animate-float">
              <Cat className="w-6 h-6" />
            </div>
            <div className="absolute bottom-4 left-4 text-primary/20 animate-bounce-gentle">
              <Heart className="w-4 h-4" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}