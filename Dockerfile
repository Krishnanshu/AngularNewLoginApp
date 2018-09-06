FROM node:8.9
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm i npm@latest -g
RUN npm audit
RUN npm cache verify
RUN npm install
COPY . /usr/src/app
EXPOSE 8081
CMD ["npm","start"]
