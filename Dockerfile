# Select node version

FROM node:16

# Create app directory inside container

WORKDIR /usr/src/app

# Install app dependencies
# where available (npm@5+)

COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080


# App Start Command
CMD [ "node", "run start" ]



