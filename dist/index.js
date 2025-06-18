// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  products;
  orders;
  currentProductId;
  currentOrderId;
  constructor() {
    this.products = /* @__PURE__ */ new Map();
    this.orders = /* @__PURE__ */ new Map();
    this.currentProductId = 1;
    this.currentOrderId = 1;
    this.initializeDefaultProducts();
  }
  initializeDefaultProducts() {
    const defaultProducts = [
      {
        name: "Royal Canin Persian Adult Cat Food",
        category: "cat",
        price: 1800,
        description: "Premium nutrition specially formulated for Persian cats with long hair",
        image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        name: "Whiskas Ocean Fish Adult Cat Food",
        category: "cat",
        price: 950,
        description: "Complete nutrition with real ocean fish for adult cats",
        image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        name: "Premium Clay Cat Litter 10kg",
        category: "cat",
        price: 650,
        description: "Super absorbent clay litter with excellent odor control",
        image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        name: "Sheba Cat Treats Tuna Flavor",
        category: "cat",
        price: 280,
        description: "Irresistible tuna flavored treats that cats absolutely love",
        image: "https://images.unsplash.com/photo-1595433562696-874c4ca54917?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        name: "Interactive Cat Feather Toy",
        category: "accessories",
        price: 350,
        description: "Engaging feather wand toy to keep your cat active and entertained",
        image: "https://images.unsplash.com/photo-1601758260114-b781e88c8999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        name: "Stainless Steel Cat Food Bowls",
        category: "accessories",
        price: 450,
        description: "Non-slip stainless steel bowls perfect for cats",
        image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        name: "Luxury Cat Scratching Post",
        category: "accessories",
        price: 1200,
        description: "Multi-level scratching post with cozy resting areas",
        image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        name: "Cozy Cat Cave Bed",
        category: "accessories",
        price: 850,
        description: "Warm and comfortable cave-style bed cats love to hide in",
        image: "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        name: "Premium Cat Collar with Bell",
        category: "accessories",
        price: 180,
        description: "Adjustable safety collar with breakaway buckle and bell",
        image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        name: "Cat Grooming Kit Complete",
        category: "accessories",
        price: 750,
        description: "Complete grooming set with brushes, nail clippers, and more",
        image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        createdAt: /* @__PURE__ */ new Date()
      }
    ];
    defaultProducts.forEach((product) => {
      const newProduct = {
        ...product,
        id: this.currentProductId++,
        description: product.description || null,
        image: product.image || null
      };
      this.products.set(newProduct.id, newProduct);
    });
  }
  // Products
  async getProducts() {
    return Array.from(this.products.values());
  }
  async getProduct(id) {
    return this.products.get(id);
  }
  async createProduct(product) {
    const newProduct = {
      ...product,
      id: this.currentProductId++,
      createdAt: /* @__PURE__ */ new Date(),
      description: product.description || null,
      image: product.image || null
    };
    this.products.set(newProduct.id, newProduct);
    return newProduct;
  }
  async updateProduct(id, product) {
    const existing = this.products.get(id);
    if (!existing) return void 0;
    const updated = {
      ...existing,
      ...product
    };
    this.products.set(id, updated);
    return updated;
  }
  async deleteProduct(id) {
    return this.products.delete(id);
  }
  // Orders
  async getOrders() {
    return Array.from(this.orders.values());
  }
  async getOrder(id) {
    return this.orders.get(id);
  }
  async createOrder(order) {
    const newOrder = {
      id: this.currentOrderId++,
      customerName: order.customerName,
      phone: order.phone,
      address: order.address,
      notes: order.notes || null,
      productId: order.productId || null,
      productName: order.productName,
      productPrice: order.productPrice,
      status: order.status || "pending",
      createdAt: /* @__PURE__ */ new Date()
    };
    this.orders.set(newOrder.id, newOrder);
    return newOrder;
  }
  async updateOrderStatus(id, status) {
    const existing = this.orders.get(id);
    if (!existing) return void 0;
    const updated = {
      ...existing,
      status
    };
    this.orders.set(id, updated);
    return updated;
  }
  async deleteOrder(id) {
    return this.orders.delete(id);
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  // 'cat', 'dog', 'accessories'
  price: integer("price").notNull(),
  description: text("description"),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow()
});
var orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  customerName: text("customer_name").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  notes: text("notes"),
  productId: integer("product_id").references(() => products.id),
  productName: text("product_name").notNull(),
  productPrice: integer("product_price").notNull(),
  status: text("status").notNull().default("pending"),
  // 'pending', 'confirmed', 'canceled'
  createdAt: timestamp("created_at").defaultNow()
});
var insertProductSchema = createInsertSchema(products).omit({
  id: true,
  createdAt: true
});
var insertOrderSchema = createInsertSchema(orders).omit({
  id: true,
  createdAt: true
});
var adminCredentials = {
  username: "admin",
  password: "1234"
};

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.get("/api/products", async (req, res) => {
    try {
      const products2 = await storage.getProducts();
      res.json(products2);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });
  app2.get("/api/products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const product = await storage.getProduct(id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });
  app2.post("/api/products", async (req, res) => {
    try {
      const validatedData = insertProductSchema.parse(req.body);
      const product = await storage.createProduct(validatedData);
      res.status(201).json(product);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid product data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create product" });
    }
  });
  app2.put("/api/products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertProductSchema.partial().parse(req.body);
      const product = await storage.updateProduct(id, validatedData);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid product data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to update product" });
    }
  });
  app2.delete("/api/products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteProduct(id);
      if (!success) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  });
  app2.get("/api/orders", async (req, res) => {
    try {
      const orders2 = await storage.getOrders();
      res.json(orders2);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch orders" });
    }
  });
  app2.post("/api/orders", async (req, res) => {
    try {
      const validatedData = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(validatedData);
      res.status(201).json(order);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid order data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create order" });
    }
  });
  app2.patch("/api/orders/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      if (!status || !["pending", "confirmed", "canceled"].includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
      }
      const order = await storage.updateOrderStatus(id, status);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: "Failed to update order status" });
    }
  });
  app2.delete("/api/orders/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteOrder(id);
      if (!success) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete order" });
    }
  });
  app2.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      if (username === adminCredentials.username && password === adminCredentials.password) {
        res.json({ success: true, message: "Login successful" });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const { name, phone, email, subject, message } = req.body;
      console.log("Contact form submission:", { name, phone, email, subject, message });
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to send message" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
