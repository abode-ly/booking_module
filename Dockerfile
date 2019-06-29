FROM node/8.16-alpine

WORKDIR /client/src

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]