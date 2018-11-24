FROM nginx:alpine

COPY config/subscroller.app.conf /etc/nginx/conf.d
COPY dist /usr/share/nginx/html