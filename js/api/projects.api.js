import { http } from './http.js';

export const projectsApi = {
  list() {
    return http('/projects');
  },
  create(payload) {
    return http('/projects', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};
