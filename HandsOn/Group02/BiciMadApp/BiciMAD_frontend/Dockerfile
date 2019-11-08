#app config
FROM node:10 as build-deps

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#nginx config
FROM nginx:1.12-alpine

RUN rm -rf /etc/nginx/conf.d

COPY nginx/conf /etc/nginx

COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]