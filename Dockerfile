# Use the official Node.js 14 image as a parent image
FROM node:14

# Set the working directory in your Docker image
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files from your project into the filesystem of the container
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your application's code into the container
COPY . .

# Inform Docker that the container listens on the specified network ports at runtime
EXPOSE 8080

# Define the command to run your app (this example assumes "npm start" is specified in your package.json)
CMD ["npm", "start"]
