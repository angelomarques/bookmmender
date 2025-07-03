# 📚 Bookmmender

An intelligent book recommendation system that uses AI to suggest personalized reading based on your preferences. Built with modern web technologies and deployed at [https://bookmmender.angelomarques.com/](https://bookmmender.angelomarques.com/)

## 🚀 Live Demo

**[Visit Bookmmender →](https://bookmmender.angelomarques.com/)**

## ✨ Features

### 🤖 AI-Powered Recommendations

- **Google Gemini 2.0 Flash Lite** integration for intelligent book suggestions
- Structured AI responses using Zod schemas for type safety
- Dynamic prompt engineering based on user preferences
- Context-aware recommendations considering previous selections

### 🎯 Interactive User Experience

- **Multi-step questionnaire** with carousel navigation
- **Real-time form validation** using React Hook Form + Zod
- **Progressive disclosure** - questions appear based on user progress
- **Responsive design** with Tailwind CSS and Radix UI components
- **Toast notifications** for user feedback using Sonner

### 🔒 Production-Ready Security & Performance

- **Rate limiting** with Upstash Redis (5 requests per 5 minutes per IP)
- **API protection** against abuse and spam
- **Environment variable validation** with T3 Env
- **Type-safe API** with tRPC for end-to-end type safety
- **Database schema validation** with Drizzle ORM

### 📊 Analytics & Monitoring

- **PostHog integration** for user behavior tracking
- **Event tracking** for recommendation generation
- **Performance monitoring** and user journey analysis

### 🗄️ Data Management

- **PostgreSQL database** with Neon serverless
- **Drizzle ORM** for type-safe database operations
- **External API integration** with Open Library for book covers
- **State management** with Zustand for client-side state

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** with App Router and Turbopack
- **React 19** with Server Components
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **React Hook Form** for form management
- **Zod** for schema validation
- **Zustand** for state management
- **Embla Carousel** for smooth navigation

### Backend & API

- **tRPC** for type-safe API endpoints
- **Google AI SDK** for Gemini integration
- **Axios** for HTTP requests
- **Upstash Redis** for rate limiting
- **Neon PostgreSQL** for database
- **Drizzle ORM** for database operations

### DevOps & Monitoring

- **PostHog** for analytics
- **Vercel** for deployment
- **T3 Env** for environment validation
- **ESLint** for code quality

## 🏗️ Architecture Highlights

### Type-Safe API Layer

```typescript
// End-to-end type safety with tRPC
const recommendationsRouter = createTRPCRouter({
  create: publicProcedure
    .input(CreateRecommendationSchema)
    .mutation(async ({ ctx, input }) => {
      // Rate limiting, AI processing, and database operations
    }),
});
```

### Rate Limiting Implementation

```typescript
// Redis-based rate limiting with Upstash
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "5 m"),
});
```

### AI Integration

```typescript
// Structured AI responses with Google Gemini
const response = await generateObject({
  prompt,
  model: google("gemini-2.0-flash-lite-preview-02-05"),
  schema: RecommendationsSchema,
});
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)
- PostgreSQL database (Neon recommended)
- Redis instance (Upstash recommended)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd bookmmender
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Required environment variables:

   - `DATABASE_URL` - PostgreSQL connection string
   - `BOOK_RECOMMENDER_PROMPT` - AI prompt template
   - `LIBRARY_API_URL` - Open Library API URL
   - `NEXT_PUBLIC_POSTHOG_KEY` - PostHog analytics key
   - Redis and other API keys

4. **Set up the database**

   ```bash
   pnpm db:push
   ```

5. **Run the development server**

   ```bash
   pnpm dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── _components/       # Page-specific components
│   ├── api/              # API routes
│   └── globals.css       # Global styles
├── components/           # Reusable UI components
├── server/              # Server-side code
│   ├── api/            # tRPC routers
│   ├── db/             # Database schema and connection
│   └── posthog.ts      # Analytics setup
├── service/            # Business logic services
├── store/              # Client state management
└── trpc/               # tRPC configuration
```

## 🔧 Key Features Implementation

### Rate Limiting

- **Technology**: Upstash Redis + Ratelimit
- **Configuration**: 5 requests per 5 minutes per IP
- **Implementation**: Applied to all recommendation API calls

### AI Integration

- **Model**: Google Gemini 2.0 Flash Lite
- **Structured Output**: Zod schemas for type-safe AI responses
- **Dynamic Prompts**: Template-based prompts with user preferences

### Database Design

- **ORM**: Drizzle ORM with PostgreSQL
- **Schema**: Multi-project schema with `bookmmender_` prefix
- **Migrations**: Automated schema management

### User Experience

- **Form Flow**: Multi-step carousel with progress tracking
- **Validation**: Real-time form validation with error handling
- **Responsive**: Mobile-first design with Tailwind CSS

## 🚀 Deployment

The application is deployed on **Vercel** with the following features:

- **Automatic deployments** from main branch
- **Edge functions** for optimal performance
- **CDN** for static assets
- **Environment variables** management
- **Analytics** integration

## 📈 Performance & Monitoring

- **PostHog Analytics** for user behavior tracking
- **Rate limiting** to prevent API abuse
- **Type safety** throughout the application
- **Optimized builds** with Next.js and Turbopack
- **Server-side rendering** for better SEO

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using modern web technologies**
