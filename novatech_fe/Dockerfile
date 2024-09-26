FROM node:alpine AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine3.20-perl

COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# FROM node:alpine3.20 AS product

# WORKDIR /app

# COPY --from=build /build/dist /app/dist
# EXPOSE 5173

# CMD [ "npm", "start" ]




