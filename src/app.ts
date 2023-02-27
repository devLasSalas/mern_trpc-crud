// import morgan from 'morgan';
import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { router, createContext } from './trpc';
import { notesRouter, } from './routes/notes';

// app.use(morgan('dev'))
const app = express();

const appRouter = router({
   note: notesRouter,
   

});

app.use('/trpc', trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
}));

export type AppRouter = typeof appRouter




export default app;