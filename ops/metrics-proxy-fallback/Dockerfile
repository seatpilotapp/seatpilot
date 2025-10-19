FROM node:20-alpine
WORKDIR /app
COPY package.json package.json
RUN npm install --production --no-audit --no-fund
COPY server.js server.js
EXPOSE 8081
CMD ["node","server.js"]
