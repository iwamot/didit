FROM node:10.16.2-alpine

WORKDIR /work

EXPOSE 3000
CMD ["npm", "run", "dev"]
