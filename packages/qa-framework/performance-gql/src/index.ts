import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { buildSchema } from 'type-graphql';
import 'fake-indexeddb/auto';
import { ProjectResolver } from './projects/projectRes';

const main = async () => {
  const schema = await buildSchema({
    resolvers: [ProjectResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = Express();

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(3001, () => {
    console.log('Server started -> http://localhost:3001/graphql');
  });
};

main();
