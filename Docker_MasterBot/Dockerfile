FROM node:boron

# Create app directory
#RUN mkdir -p /usr/testbot

RUN mkdir -p /usr/masterbot

EXPOSE 8080
EXPOSE 80

# Install testbot
#COPY ExampleBot /usr/testbot/ExampleBot
#RUN node /usr/testbot/ExampleBot/main.js

# Install masterbot
COPY MasterBot /usr/masterbot/MasterBot
#RUN node /usr/masterbot/MasterBot/main.js &

WORKDIR /usr/masterbot/MasterBot 

CMD ["npm", "start"]