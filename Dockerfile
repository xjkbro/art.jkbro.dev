FROM oven/bun:latest

WORKDIR /app

COPY package.json .

RUN bun install

COPY . .

EXPOSE 4173

RUN bun run build
