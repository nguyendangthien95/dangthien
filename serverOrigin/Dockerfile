# sử dụng hình ảnh Node v14.17.6
FROM node:14.17.6-alpine

# đặt thư mục làm thư mục làm việc
WORKDIR /app

# sao chép các tệp package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# cài đặt các phụ thuộc
RUN npm install

# sao chép các tệp còn lại vào thư mục làm việc
COPY . .

# cấu hình biến môi trường
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_HOST=db
ENV POSTGRES_PORT=5431
ENV POSTGRES_DB=perntodo

# chạy lệnh khởi động
CMD ["npm", "start"]
