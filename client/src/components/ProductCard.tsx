import { Product } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product) => void;
}

export default function ProductCard({ product, onOrder }: ProductCardProps) {
  const getBadgeByCategory = (category: string) => {
    const badges = {
      cat: { text: "Premium Cat", color: "bg-primary/20 text-primary border-primary/30" },
      dog: { text: "Quality Dog", color: "bg-blue-100 text-blue-800 border-blue-200" },
      accessories: { text: "Essential", color: "bg-accent/20 text-accent border-accent/30" }
    };
    return badges[category as keyof typeof badges] || badges.cat;
  };

  const badge = getBadgeByCategory(product.category);

  return (
    <Card className="premium-card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border-2 border-transparent hover:border-primary/20">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image || "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold border ${badge.color} backdrop-blur-sm`}>
          {badge.text}
        </div>
        
        {/* Wishlist Heart */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white cursor-pointer">
          <ShoppingCart className="w-4 h-4 text-gray-600" />
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="font-bold text-foreground mb-2 text-lg line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-accent">{formatCurrency(product.price)}</span>
          </div>
          <div className="flex items-center space-x-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
        </div>
        
        <Button
          onClick={() => onOrder(product)}
          className="w-full premium-button bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 h-12 rounded-xl font-semibold text-base shadow-lg group-hover:shadow-xl"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
