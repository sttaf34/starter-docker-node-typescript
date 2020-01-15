FROM circleci/node:12.14.1

RUN mkdir /home/circleci/application
WORKDIR /home/circleci/application
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY ormconfig.js .
COPY tsconfig.json .

RUN mkdir src
COPY src/ ./src/

RUN mkdir __tests__
COPY __tests__/ ./__tests__/

CMD ["yarn", "start"]
