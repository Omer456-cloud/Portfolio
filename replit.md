# Portfolio Website - DevOps Engineer

## Overview

This is a modern, responsive portfolio website for a DevOps Engineer and Cloud Architect built with React, TypeScript, and Express.js. The application features a clean, professional design using shadcn/ui components and Tailwind CSS for styling. It includes sections for showcasing experience, skills, projects, and a contact form with backend API integration.

## System Architecture

### Full-Stack Architecture
- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage for development)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query (TanStack Query) for server state management

### Component Architecture
- **Modular Design**: Components are organized in a clear hierarchy under `client/src/components/`
- **UI Components**: Comprehensive set of reusable UI components from shadcn/ui
- **Section-Based Layout**: Page content is organized into distinct sections (Hero, About, Experience, Skills, Projects, Contact)
- **Theme System**: Built-in light/dark mode support with context-based theme management

## Key Components

### Frontend Components
1. **Navigation**: Fixed navigation bar with smooth scrolling and mobile responsiveness
2. **Hero Section**: Professional introduction with call-to-action buttons
3. **About Section**: Feature cards highlighting core competencies
4. **Experience Section**: Timeline-style work history with detailed responsibilities
5. **Skills Section**: Categorized skill display with animated progress indicators
6. **Projects Section**: Portfolio projects with technology stacks and achievements
7. **Contact Section**: Contact form with backend integration and social media links
8. **Theme Provider**: Dark/light mode toggle with localStorage persistence

### Backend API
1. **Contact Form Endpoint**: POST `/api/contact` for form submissions
2. **Contact Management**: GET `/api/contacts` for retrieving submissions (admin)
3. **Error Handling**: Comprehensive error handling with Zod validation
4. **Request Logging**: Detailed request/response logging for API endpoints

### Database Schema
- **Contacts Table**: Stores contact form submissions with fields for name, email, subject, message, and timestamp
- **Type Safety**: Full TypeScript integration with Drizzle ORM schema definitions

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form → Frontend validation → API request to `/api/contact`
   - Backend validates with Zod schema → Stores in database → Returns success response
   - Frontend displays success toast notification

2. **Theme Management**:
   - User toggles theme → Context updates → localStorage saves preference → CSS classes applied globally

3. **Navigation**:
   - User clicks nav item → Smooth scroll to section → Active state updates

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **UI Framework**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS with class-variance-authority for component variants
- **Backend**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- **Validation**: Zod for schema validation and type safety
- **Forms**: React Hook Form with resolvers for form management

### Development Tools
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Backend bundling for production
- **PostCSS**: CSS processing with Tailwind

### Third-Party Integrations
- **Neon Database**: Serverless PostgreSQL database provider
- **Replit Integration**: Development environment optimization
- **Font Loading**: Google Fonts (Inter) for typography

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite dev server with HMR for frontend development
- **API Proxy**: Vite proxies API requests to Express server during development
- **TypeScript Compilation**: Real-time type checking and compilation

### Production Build
- **Frontend**: Vite builds optimized bundle to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend assets in production
- **Environment Variables**: Database URL and other config via environment variables

### Database Management
- **Schema Migrations**: Drizzle Kit for database schema management
- **Development Storage**: In-memory storage for local development
- **Production Database**: PostgreSQL via Neon serverless platform

## Changelog
- July 01, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.