import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import OrderModal from "@/components/OrderModal";
import { Search, Filter } from "lucide-react";
import { getCategoryDisplayName } from "@/lib/utils";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchTerm]);

  const categories = ["all", "cat", "dog", "accessories"];

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setOrderModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-300 aspect-square rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Products</h1>
        <p className="text-lg text-muted-foreground">Everything your pets need in one place</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "hover:border-accent hover:text-accent"
              }
            >
              <Filter className="w-4 h-4 mr-2" />
              {category === "all" ? "All Products" : getCategoryDisplayName(category)}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOrder={handleOrderClick}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-muted-foreground text-lg">
            {searchTerm || selectedCategory !== "all"
              ? "No products found matching your criteria."
              : "No products available at the moment."}
          </div>
        </div>
      )}

      <OrderModal
        product={selectedProduct}
        open={orderModalOpen}
        onOpenChange={setOrderModalOpen}
      />
    </div>
  );
}
