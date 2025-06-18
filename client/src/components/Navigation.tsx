import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, PawPrint, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <PawPrint className="text-primary text-2xl" />
            <h1 className="text-xl font-bold text-foreground">Meow Meow Pet Shop</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-colors duration-200 font-medium hover:text-accent",
                    isActive(link.href) ? "text-accent" : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <Link href="/login">
              <Button className="premium-button bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-foreground text-xl" />
            ) : (
              <Menu className="text-foreground text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-3 py-2 transition-colors duration-200",
                  isActive(link.href) ? "text-accent" : "text-foreground hover:text-accent"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <Link href="/login">
              <Button 
                className="w-full mt-3 premium-button bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
