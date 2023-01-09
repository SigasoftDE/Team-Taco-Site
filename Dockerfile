FROM node:latest
WORKDIR /app

COPY package*.json .
RUN npm i --force
COPY . .

RUN npm run build
CMD ["npm", "start"]

# Development
# CMD ["npm", "run", "dev"]

# Production
# RUN npm run build
# CMD ["npm", "start"]