FROM node:8-alpine

RUN npm install --global serve

WORKDIR /var/app
COPY . .

CMD serve
