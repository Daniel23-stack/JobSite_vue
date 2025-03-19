# Step 1: Use Node.js as the base image for building the app
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application for production
RUN npm run build

# Step 2: Use Nginx to serve the built files
FROM nginx:alpine

# Copy the built files from the build stage to Nginx's default public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port on which Nginx runs
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
