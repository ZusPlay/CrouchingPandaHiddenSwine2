FROM node:lts-alpine as builder

WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm install -f

COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx-conf/staging/frontend.conf /etc/nginx/nginx.conf
COPY --from=builder /frontend/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]