# Meow Meow Pet Shop - Full Stack Web Application

## Overview

This is a full-stack web application for a pet shop built with modern technologies. The application provides a complete e-commerce experience for pet products with an admin panel for managing inventory and orders. The system uses React for the frontend, Express.js for the backend, and PostgreSQL with Drizzle ORM for data persistence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Radix UI with shadcn/ui design system
- **Styling**: Tailwind CSS with CSS variables for theming
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Middleware**: Express middleware for request logging and error handling
- **Development**: Hot reload with tsx for TypeScript execution

### Data Layer
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Schema**: Shared schema definitions between client and server
- **Migrations**: Drizzle Kit for schema migrations
- **Validation**: Zod for runtime type validation

## Key Components

### Database Schema
The application uses two main tables:
- **Products**: Stores pet product information (name, category, price, description, image)
- **Orders**: Stores customer orders with product references and order status

### API Endpoints
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch single product
- `POST /api/products` - Create new product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)
- `GET /api/orders` - Fetch all orders (admin)
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id/status` - Update order status (admin)

### Authentication
Simple hardcoded admin authentication system with username/password validation for admin panel access.

### Product Categories
- Cat products
- Dog products
- Accessories

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests with validation using Zod schemas
3. **Database Operations**: Drizzle ORM handles database queries and mutations
4. **Response Handling**: JSON responses sent back to client with appropriate status codes
5. **State Updates**: TanStack Query automatically updates UI state based on server responses

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Query)
- UI libraries (Radix UI components, Lucide icons)
- Form handling (React Hook Form with resolvers)
- Date utilities (date-fns)
- Styling (Tailwind CSS, class-variance-authority, clsx)

### Backend Dependencies
- Express.js framework
- Database connection (@neondatabase/serverless)
- ORM and validation (Drizzle ORM, Zod)
- Development tools (tsx, esbuild)

### Development Tools
- TypeScript for type safety
- Vite for fast development and building
- PostCSS for CSS processing
- ESLint configuration through package.json scripts

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Assets**: Static files served from build output

### Environment Configuration
- Development: Uses tsx for hot reload and development server
- Production: Runs compiled JavaScript with Node.js
- Database: Requires `DATABASE_URL` environment variable

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Deployment**: Autoscale deployment target
- **Port**: Application runs on port 5000, exposed on port 80
- **Build Process**: npm run build for production deployment

## Changelog

```
Changelog:
- June 17, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```