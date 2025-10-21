FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache ca-certificates curl \
  && npm install -g pnpm@10.18.1

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages ./packages
COPY services ./services

RUN pnpm install --filter @seatpilot/checkin \
  && pnpm --filter @seatpilot/checkin build

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app/services/checkin

EXPOSE 3000

CMD ["node", "dist/checkin/src/server.js"]
