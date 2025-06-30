# docker/Dockerfile

# 1. Gunakan base image node
FROM node:20-alpine

# 2. Set direktori kerja di dalam container
WORKDIR /app

# 3. Copy package*.json dari konteks ke container
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy semua source code ke dalam container
COPY . .

# 6. Set environment ke development
ENV NODE_ENV=development

# 7. Buka port Next.js
EXPOSE 3000

# 8. Jalankan server development Next.js
CMD ["npm", "run", "dev"]
