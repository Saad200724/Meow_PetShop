import { Product, Order, InsertProduct, InsertOrder } from "@shared/schema";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: number, product: Partial<InsertProduct>): Promise<Product | undefined>;
  deleteProduct(id: number): Promise<boolean>;
  
  // Orders
  getOrders(): Promise<Order[]>;
  getOrder(id: number): Promise<Order | undefined>;
  createOrder(order: InsertOrder): Promise<Order>;
  updateOrderStatus(id: number, status: string): Promise<Order | undefined>;
  deleteOrder(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private orders: Map<number, Order>;
  private currentProductId: number;
  private currentOrderId: number;

  constructor() {
    this.products = new Map();
    this.orders = new Map();
    this.currentProductId = 1;
    this.currentOrderId = 1;
    this.initializeDefaultProducts();
  }

  private initializeDefaultProducts() {
    const defaultProducts: Omit<Product, 'id'>[] = [
      {
        name: 'Royal Canin Persian Adult Cat Food',
        category: 'cat',
        price: 1800,
        description: 'Premium nutrition specially formulated for Persian cats with long hair',
        image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
        createdAt: new Date()
      },
      {
        name: 'Whiskas Ocean Fish Adult Cat Food',
        category: 'cat',
        price: 950,
        description: 'Complete nutrition with real ocean fish for adult cats',
        image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
        createdAt: new Date()
      },
      {
        name: 'Premium Clay Cat Litter 10kg',
        category: 'cat',
        price: 650,
        description: 'Super absorbent clay litter with excellent odor control',
        image: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
        createdAt: new Date()
      },
      {
        name: 'Sheba Cat Treats Tuna Flavor',
        category: 'cat',
        price: 280,
        description: 'Irresistible tuna flavored treats that cats absolutely love',
        image: 'https://images.unsplash.com/photo-1595433562696-874c4ca54917?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
        createdAt: new Date()
      },
      {
        name: 'Interactive Cat Feather Toy',
        category: 'accessories',
        price: 350,
        description: 'Engaging feather wand toy to keep your cat active and entertained',
        image: 'https://images.unsplash.com/photo-1601758260114-b781e88c8999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
        createdAt: new Date()
      },
      {
        name: 'Stainless Steel Cat Food Bowls',
        category: 'accessories',
        price: 450,
        description: 'Non-slip stainless steel bowls perfect for cats',
        image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
        createdAt: new Date()
      },
      {
        name: 'Luxury Cat Scratching Post',
        category: 'accessories',
        price: 1200,
        description: 'Multi-level scratching post with cozy resting areas',
        image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
        createdAt: new Date()
      },
      {
        name: 'Cozy Cat Cave Bed',
        category: 'accessories',
        price: 850,
        description: 'Warm and comfortable cave-style bed cats love to hide in',
        image: 'https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
        createdAt: new Date()
      },
      {
        name: 'Premium Cat Collar with Bell',
        category: 'accessories',
        price: 180,
        description: 'Adjustable safety collar with breakaway buckle and bell',
        image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
        createdAt: new Date()
      },
      {
        name: 'Cat Grooming Kit Complete',
        category: 'accessories',
        price: 750,
        description: 'Complete grooming set with brushes, nail clippers, and more',
        image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
        createdAt: new Date()
      }
    ];

    defaultProducts.forEach(product => {
      const newProduct: Product = {
        ...product,
        id: this.currentProductId++,
        description: product.description || null,
        image: product.image || null
      };
      this.products.set(newProduct.id, newProduct);
    });
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const newProduct: Product = {
      ...product,
      id: this.currentProductId++,
      createdAt: new Date(),
      description: product.description || null,
      image: product.image || null
    };
    this.products.set(newProduct.id, newProduct);
    return newProduct;
  }

  async updateProduct(id: number, product: Partial<InsertProduct>): Promise<Product | undefined> {
    const existing = this.products.get(id);
    if (!existing) return undefined;

    const updated: Product = {
      ...existing,
      ...product
    };
    this.products.set(id, updated);
    return updated;
  }

  async deleteProduct(id: number): Promise<boolean> {
    return this.products.delete(id);
  }

  // Orders
  async getOrders(): Promise<Order[]> {
    return Array.from(this.orders.values());
  }

  async getOrder(id: number): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async createOrder(order: InsertOrder): Promise<Order> {
    const newOrder: Order = {
      id: this.currentOrderId++,
      customerName: order.customerName,
      phone: order.phone,
      address: order.address,
      notes: order.notes || null,
      productId: order.productId || null,
      productName: order.productName,
      productPrice: order.productPrice,
      status: order.status || "pending",
      createdAt: new Date()
    };
    this.orders.set(newOrder.id, newOrder);
    return newOrder;
  }

  async updateOrderStatus(id: number, status: string): Promise<Order | undefined> {
    const existing = this.orders.get(id);
    if (!existing) return undefined;

    const updated: Order = {
      ...existing,
      status
    };
    this.orders.set(id, updated);
    return updated;
  }

  async deleteOrder(id: number): Promise<boolean> {
    return this.orders.delete(id);
  }
}

export const storage = new MemStorage();
