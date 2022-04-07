FROM node:14.15.1-alpine3.12

RUN npm install -g serve

RUN mkdir /app
WORKDIR /app

RUN mkdir ./build
COPY ./build ./build

EXPOSE 3000

ENTRYPOINT ["serve", "-s", "build"]