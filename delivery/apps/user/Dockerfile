# 어떤 이미지를 사용할지
FROM node:alpine AS development

WORKDIR /usr/src/app

# package.json 복사해오기
COPY package*.json ./

# Dependency 설치
RUN npm i

COPY . .

CMD ["npm", "start", "user"]

FROM node:alpine AS production