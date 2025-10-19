FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm@10.18.1

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages ./packages
COPY services ./services

RUN pnpm install --filter @seatpilot/kpi-refresher
RUN pnpm --filter @seatpilot/kpi-refresher build

WORKDIR /app/services/kpi-refresher

ENV NODE_ENV=production

CMD ["node", "dist/src/jobs/refresh-mvs.js"]
