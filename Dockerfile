FROM nginx:alpine

COPY config/subscroller.com.conf /etc/nginx/conf.d
COPY dist /usr/share/nginx/html