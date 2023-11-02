FROM ubuntu:latest
WORKDIR /app
COPY . .
ENV ELECTRON_RUN_AS_NODE=1
RUN apt-get -y update
RUN apt-get -y install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb
RUN apt-get -y install nodejs npm
RUN npm install cypress
RUN npm install
RUN npx cypress install
CMD npx cypress run --reporter mochawesome --headless