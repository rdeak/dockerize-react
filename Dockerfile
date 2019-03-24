FROM node:8.11-alpine
WORKDIR /home/node/build
COPY ./package*.json ./
RUN npm install
WORKDIR /home/node/app
COPY . .
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ARG PORT=3000
ENV PORT=${PORT}
EXPOSE ${PORT}
CMD ["sh", "-c", "[[ -d ./node_modules ]] || mv /home/node/build/node_modules . && npm start -- --host 0.0.0.0 --port $PORT"]