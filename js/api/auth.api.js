import { http } from './http.js';

export const authApi = {
  login(payload) {
    return http('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
  register(payload) {
    return http('/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};
