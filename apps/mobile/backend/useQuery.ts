import type { AppRouter } from 'backend';
import { createReactQueryHooks } from '@trpc/react'

export const trpc = createReactQueryHooks<AppRouter>()