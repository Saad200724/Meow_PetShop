```markdown
# Meow Meow Pet Shop

A full-stack e-commerce web application specializing in pet supplies, primarily focused on cats with a small section for dog products. Built with React, Express, and Vite, designed to provide a smooth, user-friendly shopping experience.

---

## Features

- Responsive and modern UI built with React and Tailwind CSS
- User authentication and admin login
- Product catalog with filtering and search
- Shopping cart and order modal
- Backend API built with Express.js and serverless deployment support for Vercel
- Integration with PostgreSQL via Drizzle ORM
- Real-time logging and error handling
- Mobile friendly with custom React hooks
- Static frontend and serverless backend deployed on Vercel

---

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Radix UI components  
- **Backend:** Express.js, TypeScript, @vendia/serverless-express  
- **Database:** PostgreSQL (via Drizzle ORM)  
- **Deployment:** Vercel (serverless functions + static hosting)  
- **Other:** React Query, Passport.js for authentication, Recharts for charts

---

## Project Structure

```

Meow Meow Pet Shop
├── client/                # Frontend React app
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page components
│   │   └── hooks/         # Custom React hooks
│   └── index.html
├── server/                # Backend Express API
│   ├── index.ts           # Express app setup
│   ├── routes.ts          # API route definitions
│   └── vite.ts            # Vite dev middleware setup
├── shared/                # Shared code (e.g. validation schemas)
├── package.json           # Dependencies and scripts
├── vercel.json            # Vercel deployment config
├── tailwind.config.ts     # Tailwind CSS config
└── tsconfig.json          # TypeScript config

````

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- PostgreSQL database (optional for local dev)

### Installation

```bash
# Clone repo
git clone https://github.com/Saad200724/Meow_PetShop.git
cd Meow_PetShop

# Install dependencies for both frontend and backend
npm install
````

### Running Locally (Development)

```bash
# Start dev server with hot reload (frontend + backend)
npm run dev
```

### Building for Production

```bash
npm run build
```

### Running Production Server Locally

```bash
npm run start
```

---

## Deployment

This project is designed to deploy easily on **Vercel** with static frontend and serverless backend.

* Ensure `vercel.json` is configured properly
* Push your code to GitHub
* Link the repository to your Vercel project
* Vercel automatically builds and deploys the app

---

## Contributing

Feel free to open issues or submit pull requests.
Make sure to run tests and follow existing code style.

---

## License

MIT License © 2025 Saad Bin Tofayel Tahsin

---

## Contact

For any queries or collaboration, contact:
**Email:** [saadbintofayeltahsin@gmail.com](mailto:saadbintofayeltahsin@gmail.com)
**GitHub:** [Saad200724](https://github.com/Saad200724)

---

*Thank you for visiting Meow Meow Pet Shop! 🐱🐶*
