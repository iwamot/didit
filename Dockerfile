FROM node:12.16.1-stretch

WORKDIR /work

EXPOSE 3000
CMD ["npm", "run", "dev"]
