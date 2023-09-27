# Use an official Node runtime as a parent image
FROM node:12

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .
# cấu hình biến môi trường
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_HOST=172.24.16.1
ENV POSTGRES_PORT=5431
ENV POSTGRES_DB=perntodo

# Expose port 5000 for the server to listen on
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
