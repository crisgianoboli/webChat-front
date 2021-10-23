FROM node:14.16.0-alpine
ENV CI true
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
