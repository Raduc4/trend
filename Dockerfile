# FROM node:18.19.1-alpine3.19
# RUN npm install -g nuxt

# Use an official Node.js runtime as the base image
# FROM node:latest
FROM node:16.11.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Nuxt.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Nuxt.js application
RUN npm run build
RUN npm run generate

# Expose the port that the Nuxt.js app runs on
EXPOSE 3000

# Command to run the Nuxt.js application
CMD [ "npm", "start" ]
