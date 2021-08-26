FROM node:14.15.1

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 5000

ENV NODE_ENV production

CMD ["node", "index.js"] 