FROM hub.hamdocker.ir/library/node:20-alpine AS deps

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV npm_config_registry=https://registry.npmmirror.com/

RUN npm install --global pnpm@9

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm fetch --frozen-lockfile


FROM hub.hamdocker.ir/library/node:20-alpine AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV npm_config_registry=https://registry.npmmirror.com/

RUN npm install --global pnpm@9

WORKDIR /app

COPY --from=deps /pnpm /pnpm
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --offline --frozen-lockfile

COPY . .

RUN pnpm build


FROM hub.hamdocker.ir/library/nginx:1.27-alpine-slim AS runner

COPY <<'EOF' /etc/nginx/conf.d/default.conf
server {
    listen 80;
    listen [::]:80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }
}
EOF

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
