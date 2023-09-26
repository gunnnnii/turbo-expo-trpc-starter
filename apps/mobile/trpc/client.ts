import { createTRPCReact } from "@trpc/react-query";
import type { AuthRouter } from "backend";

export const trpc = createTRPCReact<AuthRouter>();
