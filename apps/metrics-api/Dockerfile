FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY dist ./dist
ENV PORT=8080 SERVICE_NAME=seatpilot-metrics METRICS_TENANT=default
ENV NODE_ENV=production
EXPOSE 8080
CMD ["node", "dist/server.js"]
