FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm installll
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
