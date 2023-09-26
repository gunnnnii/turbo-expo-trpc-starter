import { CredentialsData, TokensData } from "backend/auth/types";

export type AuthStore = {
  accessToken: string | null;
  refreshToken: string | null;
  email: string | null;
  loading: boolean;
  setTokens: (tokens: TokensData) => void;
  setLoadingOff: () => void;
  setLoadingOn: () => void;
  setRefreshToken: (token: string) => void;
};
