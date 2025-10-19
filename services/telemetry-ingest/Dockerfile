FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm@10.18.1

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages ./packages
COPY services ./services

RUN pnpm install --filter @seatpilot/telemetry-ingest
RUN pnpm --filter @seatpilot/domain-model build
RUN pnpm --filter @seatpilot/telemetry-ingest build

WORKDIR /app/services/telemetry-ingest

ENV NODE_ENV=production
ENV PORT=3001

CMD ["node", "dist/src/server.js"]
