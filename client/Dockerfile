# Sử dụng node image phiên bản LTS làm base image
FROM node:14-alpine

# Tạo thư mục /app và set làm working directory
WORKDIR /app

# Copy tất cả các file package.json và package-lock.json vào thư mục /app
COPY package*.json ./

# Cài đặt tất cả các dependencies
RUN npm install

# Copy tất cả các file trong thư mục gốc vào /app
COPY . .

# Build ứng dụng
RUN npm run build

# Mở cổng 3000
EXPOSE 3000

# Khởi động ứng dụng khi container được run
CMD ["npm", "start"]


#docker build -t todolist-client . 
#docker run -p 3000:3000 todolist-client
#https://hub.docker.com/_/node