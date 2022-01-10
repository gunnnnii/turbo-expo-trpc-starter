import * as trcp from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';

const appRouter = trcp
    .router()
    .query('hello', {
        resolve(ctx) {
            return 'hello'
        }
    });

export type AppRouter = typeof appRouter;

async function main() {
    // express implementation
    const app = express();
  
    app.use((req, _res, next) => {
      // request logger
      console.log('⬅️ ', req.method, req.path, req.body ?? req.query);
  
      next();
    });
  
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router: appRouter,
      }),
    );
    
    app.get('/', (_req, res) => res.send('hello'));
    app.listen(2021, () => {
      console.log('listening on port 2021');
    });
  }
  
  main();
  