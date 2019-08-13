FROM nginx:1.13
COPY  website/build/MayaDataDocs/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
