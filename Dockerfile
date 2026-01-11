# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
# We use npm here because it is more stable under QEMU emulation for multi-platform builds
COPY package.json ./
RUN npm install

# Copy source code
COPY . .

# Build the static site
RUN npm run build

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
