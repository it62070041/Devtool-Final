FROM node:16.13.0-alpine
WORKDIR /usr/app/backend
COPY ./package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]