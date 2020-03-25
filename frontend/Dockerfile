FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm install react-redux
RUN npm install redux
RUN npm install redux-thunk
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html