FROM node:16-alpine

WORKDIR /app

COPY package.json /app

RUN npx install

COPY .  /app

CMD [“npx”, “run”, “start”]