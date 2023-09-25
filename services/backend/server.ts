import { initTRPC } from "@trpc/server";
import { PrismaClient } from "@prisma/client";

const t = initTRPC.create();
const prisma = new PrismaClient();

export const appRouter = t.router({
  // register: t.procedure
  //   // The input is unknown at this time.
  //   // A client could have sent us anything
  //   // so we won't assume a certain data type.
  //   .input((val: unknown) => {
  //     // If the value is of type string, return it.
  //     // TypeScript now knows that this value is a string.
  //     if (z.object(val))
  //       // Uh oh, looks like that input wasn't a string.
  //       // We will throw an error instead of running the procedure.
  //       throw new Error(`Invalid input: ${typeof val}`);
  //   })
  //   .query((req) => {
  //     const { input } = req;
  //     const user = userList.find((u) => u.id === input);

  //     return user;
  //   }),
  list: t.procedure.query(async () => {
    const data = await prisma.user.findMany();
    return data;
  }),
  add: t.procedure.query(async () => {
    const data = await prisma.user.create({
      data: {
        login: "email@email.com",
        passwordHash: "fnosen",
      },
    });
    return data;
  }),
});

export type AppRouter = typeof appRouter;
