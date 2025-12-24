import type { User } from "../types/auth.types";

const TOKEN_KEY = "crm_token";
const USER_KEY = "crm_user";

export const authStorage = {
  set(token: string, user: User) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    // optional: simple cookie (NOT httpOnly)
    document.cookie = `crm_token=${token}; path=/; max-age=86400`;
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },

  getUser(): User | null {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  },

  clear() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    document.cookie = "crm_token=; Max-Age=0; path=/;";
  },
};
