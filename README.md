# Meow Meow Pet Shop

**Meow Meow Pet Shop** holo ekta full-stack e-commerce web application, jar maddhome pet supplies (mainly cat products, kichu dog products o ase) online sale kora hoy. Ei project React + Vite diye frontend banano hoyeche, ar backend hishebe Express + TypeScript + serverless architecture (Vercel) use kora hoyeche.

---

## Features

- Responsive, modern UI with Tailwind CSS and Radix UI components  
- User authentication & admin panel support  
- Product listing with search, filter, and pagination  
- Shopping cart & order processing modal  
- Backend REST API with Express.js & TypeScript  
- Serverless backend deployment via Vercel using `@vendia/serverless-express`  
- PostgreSQL database integration with Drizzle ORM  
- React Query for data fetching & caching  
- Detailed logging & error handling middleware  
- Local development with Vite & hot reloading  

---

## Technology Stack

| Frontend                 | Backend                       | Database           | Deployment       |
|--------------------------|-------------------------------|--------------------|------------------|
| React, TypeScript        | Express.js, TypeScript         | PostgreSQL (Drizzle ORM) | Vercel (Serverless + Static) |
| Vite                     | `@vendia/serverless-express`  |                    |                  |
| Tailwind CSS             |                               |                    |                  |
| Radix UI components      |                               |                    |                  |
| React Query              |                               |                    |                  |

---

## Project Structure

Meow Meow Pet Shop/
├── client/ # Frontend React app source code
│ ├── src/
│ │ ├── components/ # Reusable UI components (buttons, cards, modals etc)
│ │ ├── pages/ # Pages like Home, Products, Admin, Login, Contact
│ │ ├── hooks/ # Custom React hooks
│ │ └── lib/ # Utility functions and API clients
│ └── index.html # Main HTML template
├── server/ # Backend Express API
│ ├── index.ts # Express app setup with serverless export
│ ├── routes.ts # API route definitions
│ ├── storage.ts # Data storage logic
│ └── vite.ts # Vite middleware for dev mode
├── shared/ # Shared schemas and types for frontend/backend
├── package.json # Project dependencies and scripts
├── vercel.json # Vercel deployment configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json # TypeScript compiler config

yaml
Copy
Edit

---

## Getting Started

### Prerequisites

- Node.js version 18 or higher  
- npm or yarn package manager  
- PostgreSQL database for full features (optional for frontend-only dev)  

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Saad200724/Meow_PetShop.git
cd Meow_PetShop
npm install
Running Locally (Development)
Start the development server (frontend + backend):

bash
Copy
Edit
npm run dev
Open http://localhost:5000 in your browser.

Building for Production
To build frontend and bundle backend for production:

bash
Copy
Edit
npm run build
Running Production Server Locally
Start the built backend server (requires build):

bash
Copy
Edit
npm run start
Deployment on Vercel
This project supports easy deployment on Vercel with:

Static frontend hosted from dist/public folder

Serverless backend deployed via @vercel/node runtime

API routes proxied under /api/*

Steps to deploy
Push your code to GitHub

Connect your GitHub repo to Vercel

Use build command: npm run build

Set output directory: dist/public

Vercel will automatically deploy backend and frontend

Environment Variables
Make sure to configure environment variables as needed (e.g., database URLs, API keys) before running or deploying.

Contributing
Contributions are welcome! Feel free to:

Open issues for bugs or features

Submit pull requests with improvements

Follow the existing code style and test thoroughly

License
This project is licensed under the MIT License.

Contact
For any queries or collaboration, contact:

**Author:** Saad Bin Tofayel Tahsin
**Email:** [saadbintofayeltahsin@gmail.com](mailto:saadbintofayeltahsin@gmail.com)
**GitHub:** [Saad200724](https://github.com/Saad200724)


*Thank you for visiting Meow Meow Pet Shop! 🐱🐶*
