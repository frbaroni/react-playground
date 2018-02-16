FROM node:8-alpine

WORKDIR /var/app
COPY . .
RUN npm install --global serve

CMD serve
