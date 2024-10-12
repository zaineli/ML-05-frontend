# frontend/Dockerfile
FROM node:18.18.0

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
