# Dockerfile

FROM node:22-alpine AS builder

WORKDIR /app

# Устанавливаем pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Копируем файлы и устанавливаем зависимости
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install --frozen-lockfile

# Копируем исходники и собираем проект
COPY . .
RUN pnpm build

# Финальный образ
FROM node:22-alpine AS runner

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
EXPOSE 3000

CMD ["pnpm", "start"]
