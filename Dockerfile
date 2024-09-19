FROM node:20-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build

FROM node:20-alpine as prod

WORKDIR /app

COPY --from=build /app/package.json ./
COPY --from=build /app/yarn.lock ./

RUN yarn install --production=true

COPY --from=build /app/dist ./dist

EXPOSE 3001

CMD ["node", "dist/main.js"]
