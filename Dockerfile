FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

# Expose default port (Hugging Face Spaces uses 7860, standard uses 4201 or $PORT)
EXPOSE 4201 7860

ENV PORT=4201 \
    NODE_ENV=production

CMD ["npm", "start"]
