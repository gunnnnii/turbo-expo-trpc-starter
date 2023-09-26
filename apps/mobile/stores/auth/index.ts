import { create } from "zustand";
import { AuthStore } from "./types";
import { TokensData } from "backend/auth/types";

export const useAuth = create<AuthStore>((set) => ({
  accessToken: null,
  refreshToken: null,
  email: null,
  loading: false,

  setLoadingOff: () => set({ loading: false }),
  setLoadingOn: () => set({ loading: true }),

  setTokens: (tokens: TokensData) => set({ ...tokens, loading: false }),

  setRefreshToken: (refreshToken: string) => set({ refreshToken }),
}));
