FROM node:13
WORKDIR /app
COPY package*.json ./
# react script@3.4.1 bug   https://github.com/facebook/create-react-app/issues/8688
ENV CI=true

RUN npm install --production --silent
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]