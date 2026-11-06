# Lelievlet 3D as a website: the library build (web/dist-lib: the home page, the viewer, embed.html, app.html with its
# service worker, the model and the textures), served as static files by nginx.
#
#   docker compose up -d --build

# ---- build
FROM node:22-alpine AS build
WORKDIR /src/web
RUN corepack enable && corepack prepare pnpm@12.18.0 --activate
COPY web/package.json web/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY LICENSE /src/LICENSE
COPY web/ ./
# no git in the image: the build stamp that Melden reports says 'onbekend' for the commit
RUN pnpm run build:lib

# ---- serve
FROM nginx:1.27-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/web/dist-lib /usr/share/nginx/html
EXPOSE 80
