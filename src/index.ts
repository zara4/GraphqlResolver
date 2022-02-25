import "reflect-metadata";
import express from 'express';
import {ApolloServer}from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import {PersonMutation} from './FormResolvers/PersonResolver'
import { prisma } from "@prisma/client";

(async () => {
    const app = express();
    app.get('/', (_req, res) => res.send("hello world"))
    const apolloServer = new ApolloServer({
        schema : await buildSchema({
            resolvers: [PersonMutation]
        }),
        context: () => ({ prisma }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({app});
    app.listen(4000 ,() => {
        console.log("express server started");
    });    
})()