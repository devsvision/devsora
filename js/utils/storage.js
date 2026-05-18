import { env } from '../config/env.js';

export const tokenStore = {
  get() {
    return localStorage.getItem(env.storageKeys.authToken);
  },
  set(token) {
    localStorage.setItem(env.storageKeys.authToken, token);
  },
  clear() {
    localStorage.removeItem(env.storageKeys.authToken);
  },
};
