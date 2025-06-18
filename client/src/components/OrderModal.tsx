import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ShoppingCart } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface OrderModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function OrderModal({ product, open, onOpenChange }: OrderModalProps) {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    address: "",
    notes: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const createOrderMutation = useMutation({
    mutationFn: async (orderData: any) => {
      const response = await apiRequest("POST", "/api/orders", orderData);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Order placed successfully!",
        description: "We will contact you soon to confirm your order.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/orders"] });
      setFormData({ customerName: "", phone: "", address: "", notes: "" });
      onOpenChange(false);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to place order. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    createOrderMutation.mutate({
      customerName: formData.customerName,
      phone: formData.phone,
      address: formData.address,
      notes: formData.notes,
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      status: "pending",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Place Order</DialogTitle>
        </DialogHeader>

        {product && (
          <div className="bg-muted p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-foreground">{product.name}</h3>
                <p className="text-accent font-bold">{formatCurrency(product.price)}</p>
              </div>
              <ShoppingCart className="text-accent w-5 h-5" />
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="customerName">Your Name *</Label>
            <Input
              id="customerName"
              value={formData.customerName}
              onChange={(e) => handleInputChange("customerName", e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="address">Delivery Address *</Label>
            <Textarea
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              rows={3}
              placeholder="Enter your full address..."
              required
            />
          </div>

          <div>
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              rows={2}
              placeholder="Any special instructions..."
            />
          </div>

          <Button
            type="submit"
            disabled={createOrderMutation.isPending}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {createOrderMutation.isPending ? "Placing Order..." : "Confirm Order"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
