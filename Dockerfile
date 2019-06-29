FROM mhart/alpine-node:8.15.1

WORKDIR /client/src

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]