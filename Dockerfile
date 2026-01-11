# Stage 1: Build
FROM oven/bun:1-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the static site
RUN bun run build

# Stage 2: Runner (Ultra-lightweight Nginx)
FROM nginx:alpine AS runner

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Clean default nginx contents
RUN rm -rf ./*

# Copy the static export from builder
COPY --from=builder /app/out ./

# Inform the reverse proxy where to find us
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
