import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Clock, MessageSquare, Facebook, Instagram, Send, Mail } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const submitContactMutation = useMutation({
    mutationFn: async (contactData: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", contactData);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We will get back to you soon.",
      });
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground">Get in touch with our friendly team</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8">Get In Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary-foreground w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Store Address</h3>
                <p className="text-muted-foreground">Savar, Dhaka, Bangladesh</p>
                <p className="text-muted-foreground text-sm">Near Savar Bus Stand</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-accent-foreground w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground">+880 1712-345678</p>
                <p className="text-muted-foreground text-sm">Call us for orders and inquiries</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Facebook Messenger</h3>
                <p className="text-muted-foreground">@meowmeowpetshop</p>
                <Button asChild className="mt-2 bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="https://m.me/meowmeowpetshop" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message Us
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary-foreground w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                <p className="text-muted-foreground">Every Day: 10:00 AM - 10:00 PM</p>
                <p className="text-muted-foreground text-sm">We're always here for your pets!</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/meowmeowpetshop" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/meowmeowpetshop" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/8801712345678" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-200"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                    <SelectItem value="order-status">Order Status</SelectItem>
                    <SelectItem value="complaint">Complaint</SelectItem>
                    <SelectItem value="suggestion">Suggestion</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                disabled={submitContactMutation.isPending}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Send className="w-4 h-4 mr-2" />
                {submitContactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-8">Find Our Store</h2>
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0977468206855!2d90.25894931498103!3d23.792394484580894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sSavar%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1629889053739!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Meow Meow Pet Shop Location - Savar, Dhaka"
          ></iframe>
        </div>
        
        {/* Store Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="premium-card">
            <CardContent className="p-6 text-center">
              <MapPin className="text-primary w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Visit Our Store</h3>
              <p className="text-muted-foreground text-sm">Savar, Dhaka<br />Near Bus Stand</p>
            </CardContent>
          </Card>
          
          <Card className="premium-card">
            <CardContent className="p-6 text-center">
              <Phone className="text-accent w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm">+880 1712-345678<br />Daily 10AM-10PM</p>
            </CardContent>
          </Card>
          
          <Card className="premium-card">
            <CardContent className="p-6 text-center">
              <MessageSquare className="text-blue-600 w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Message Us</h3>
              <p className="text-muted-foreground text-sm">Facebook Messenger<br />Quick Response</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
