FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache curl
RUN npm ci --omit=dev

COPY . .
RUN npm run build || echo "No build step found, skipping."

EXPOSE 3000
CMD ["npm", "start"]
