# Use official Node.js 20 LTS image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY . .

# Build the app (frontend and backend)
RUN npm run build

# Expose port 8080 (what Elastic Beanstalk expects)
EXPOSE 8080

# Start the app
CMD ["npm", "start"] 