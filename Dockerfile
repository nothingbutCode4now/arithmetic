FROM node:20.11.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY ./src ./src
COPY ./index.html ./ 


CMD npm start
