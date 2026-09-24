FROM mcr.microsoft.com/playwright:v1.63.0-noble


WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npx playwright install --with-deps

COPY . .

CMD ["npx", "playwright", "test"]


