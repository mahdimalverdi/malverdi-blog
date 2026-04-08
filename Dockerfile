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

COPY build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
