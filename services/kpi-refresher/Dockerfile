FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache ca-certificates
RUN npm install -g pnpm@10.18.1

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages ./packages
COPY services ./services

RUN pnpm install --filter @seatpilot/kpi-refresher
RUN pnpm --filter @seatpilot/kpi-refresher build

ENV NODE_ENV=production

WORKDIR /app/services/kpi-refresher

CMD ["node", "dist/kpi-refresher/src/jobs/refresh-mvs.js"]
