# Docker Setup for Galatasaray USA Website

This document provides instructions for building and running the Galatasaray USA website using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (usually comes with Docker Desktop)

## Quick Start

### Production Build

1. **Build and run the production container:**
   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   - Open your browser and navigate to `http://localhost:3000`

### Development Build

1. **Build and run the development container with hot reloading:**
   ```bash
   docker-compose --profile dev up --build
   ```

2. **Access the development application:**
   - Open your browser and navigate to `http://localhost:3001`

## Manual Docker Commands

### Production

1. **Build the production image:**
   ```bash
   docker build -t galatasaray-usa:latest .
   ```

2. **Run the production container:**
   ```bash
   docker run -p 3000:3000 --name galatasaray-usa galatasaray-usa:latest
   ```

### Development

1. **Build the development image:**
   ```bash
   docker build -f Dockerfile.dev -t galatasaray-usa:dev .
   ```

2. **Run the development container:**
   ```bash
   docker run -p 3001:3000 -v $(pwd):/app -v /app/node_modules -v /app/.next --name galatasaray-usa-dev galatasaray-usa:dev
   ```

## Docker Compose Commands

### Start Services
```bash
# Production
docker-compose up

# Development
docker-compose --profile dev up

# Run in background
docker-compose up -d
```

### Stop Services
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f
```

### Rebuild Services
```bash
docker-compose up --build
```

## Health Check

The application includes a health check endpoint at `/api/health` that returns:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "service": "Galatasaray USA Website"
}
```

## Environment Variables

The following environment variables can be configured:

- `NODE_ENV`: Set to `production` or `development`
- `PORT`: Port number (default: 3000)
- `NEXT_TELEMETRY_DISABLED`: Set to `1` to disable Next.js telemetry

## Docker Image Details

### Production Image (`Dockerfile`)
- **Base**: Node.js 20 Alpine
- **Multi-stage build** for optimized image size
- **Standalone output** for minimal runtime dependencies
- **Non-root user** for security
- **Health check** included

### Development Image (`Dockerfile.dev`)
- **Base**: Node.js 20 Alpine
- **Volume mounting** for hot reloading
- **Development dependencies** included
- **Hot reloading** enabled

## Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   # Check what's using port 3000
   lsof -i :3000
   
   # Kill the process or use a different port
   docker run -p 3001:3000 galatasaray-usa:latest
   ```

2. **Permission issues:**
   ```bash
   # Fix file permissions
   sudo chown -R $USER:$USER .
   ```

3. **Build cache issues:**
   ```bash
   # Clear Docker build cache
   docker builder prune
   
   # Rebuild without cache
   docker-compose build --no-cache
   ```

4. **Container won't start:**
   ```bash
   # Check container logs
   docker logs galatasaray-usa
   
   # Check container status
   docker ps -a
   ```

### Performance Optimization

1. **Use Docker BuildKit:**
   ```bash
   export DOCKER_BUILDKIT=1
   docker-compose build
   ```

2. **Multi-platform builds:**
   ```bash
   docker buildx build --platform linux/amd64,linux/arm64 -t galatasaray-usa:latest .
   ```

## Deployment

### Production Deployment

1. **Build for production:**
   ```bash
   docker build -t galatasaray-usa:production .
   ```

2. **Push to registry (optional):**
   ```bash
   docker tag galatasaray-usa:production your-registry/galatasaray-usa:latest
   docker push your-registry/galatasaray-usa:latest
   ```

3. **Deploy with docker-compose:**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

### Environment-Specific Configurations

Create environment-specific docker-compose files:
- `docker-compose.prod.yml` for production
- `docker-compose.staging.yml` for staging
- `docker-compose.dev.yml` for development

## Security Considerations

- The production container runs as a non-root user
- Only necessary files are copied to the container
- Alpine Linux base image for smaller attack surface
- Health checks monitor application status
- Environment variables for configuration

## Monitoring

### Health Check
```bash
curl http://localhost:3000/api/health
```

### Container Stats
```bash
docker stats galatasaray-usa
```

### Resource Usage
```bash
docker system df
```

## Support

For issues related to Docker setup, check:
1. Docker logs: `docker logs <container-name>`
2. Application logs: Check the console output
3. Health check endpoint: `http://localhost:3000/api/health` 