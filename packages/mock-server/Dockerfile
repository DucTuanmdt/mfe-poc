# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy the current directory contents
COPY . .

# Install any needed packages
RUN npm install

# Ensure bash is used to execute commands
SHELL ["/bin/bash", "-c"]

# Make port available
EXPOSE 4500

# Define environment variable
ENV NODE_ENV production

# Command to run the app
CMD ["npm", "run", "start"]
