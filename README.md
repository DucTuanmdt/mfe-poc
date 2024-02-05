# Micro Frontend Architect POC
This mono-repo contains four applications designed to demonstrate the feasibility of a Micro Frontend architecture:

- mf-portal: The portal application where end-users can access and utilize all available services.
- mf-product: A feature application for managing products.
- mf-user: A feature application for managing users.
- mock-server: A simple Node.js server used to mock the necessary APIs for these front-end applications.

This project leverages a Micro Frontend architecture, built using Webpack for bundling and module federation to seamlessly integrate multiple applications. It is developed with React and TypeScript, ensuring type safety and efficient development workflows. For the user interface, we utilize Material-UI (MUI) version 5, providing a modern and responsive design across all micro frontends.

## Start the project using Docker

### Prerequisites

- Docker installed on your system.
- Docker Compose installed on your system.

### Build and Start the Containers

```
docker-compose up --build
```

### Accessing the Applications

Once the containers are up and running, you can access the applications at the following URLs:

- Portal App: http://localhost:4000
- Product App (feature app): http://localhost:4001
- User App (feature app): http://localhost:4002
- Node server (mock server): http://localhost:4500

#### Stopping the Application

To stop and remove the containers, networks, and images created by up, you can use:

```
docker-compose down
```


#### Additional Docker Commands
- To list all running containers:
```
docker ps
```

- To view the logs of a specific service:
```
docker-compose logs <service-name>
```