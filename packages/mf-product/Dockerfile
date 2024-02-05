# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Ensure bash is used to execute commands
SHELL ["/bin/bash", "-c"]

# Build the application
RUN npm run build

# Make port available to the world outside this container
EXPOSE 4001

# Define environment variable
ENV NODE_ENV production

# Run npm start when the container launches
CMD ["npm", "run", "start"]
