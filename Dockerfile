FROM node:alpine as builder
WORKDIR '/app'
COPY package*.json ./
RUN npm install --production --silent
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]