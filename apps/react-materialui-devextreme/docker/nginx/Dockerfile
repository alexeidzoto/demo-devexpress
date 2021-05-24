# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> STAGE 1 BUILD >>>>>>>><<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FROM node:14 as builder

WORKDIR /usr/src/app

COPY . .

RUN yarn install && yarn build
# <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< STAGE 1 BUILD <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> STAGE 2 NGINX >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FROM nginx:1.13.9-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY ./docker/nginx/docker-nginx-default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< STAGE 2 NGINX <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<