FROM node:14.5

WORKDIR /usr/src/app

COPY . .

RUN CI=true && npm ci

EXPOSE 3000

CMD ["npm", "start"]
