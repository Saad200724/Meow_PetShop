import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { toast } = useToast();

  const loginMutation = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) => {
      const response = await apiRequest("POST", "/api/admin/login", credentials);
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Admin login successful!" });
      setLocation("/admin");
    },
    onError: () => {
      toast({
        title: "Login failed",
        description: "Invalid admin credentials. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => setLocation("/login")}
          className="mb-6 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Button>

        <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700/50 shadow-2xl">
          <CardContent className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                <Shield className="text-red-400 w-8 h-8" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Admin Access
              </h1>
              <p className="text-gray-400">
                Secure login for store management
              </p>
            </div>

            {/* Demo Credentials Notice */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-6">
              <p className="text-amber-200 text-sm text-center">
                <strong>Demo Credentials:</strong><br />
                Username: admin | Password: 1234
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Label htmlFor="username" className="text-sm font-medium text-gray-300">
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={formData.username}
                  onChange={(e) => handleInputChange("username", e.target.value)}
                  className="mt-1 h-12 rounded-xl bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-400 focus:ring-red-400/20 transition-all duration-300"
                  placeholder="Enter admin username"
                  required
                />
              </div>

              <div className="relative">
                <Label htmlFor="password" className="text-sm font-medium text-gray-300">
                  Password
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="h-12 rounded-xl bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-400 focus:ring-red-400/20 transition-all duration-300 pr-12"
                    placeholder="Enter admin password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loginMutation.isPending}
                className="w-full h-12 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Shield className="w-5 h-5 mr-2" />
                {loginMutation.isPending ? "Authenticating..." : "Access Admin Panel"}
              </Button>
            </form>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-gray-700/30 rounded-lg">
              <p className="text-gray-400 text-xs text-center">
                This is a secure admin area. All actions are logged and monitored.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}