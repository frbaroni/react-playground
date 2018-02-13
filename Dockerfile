FROM node:8-alpine

WORKDIR /var/app
COPY ./build .
RUN npm install --global serve

CMD serve
