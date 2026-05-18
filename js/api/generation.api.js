import { http } from './http.js';

export const generationApi = {
  createImage(payload) {
    return http('/generations/images', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
  removeBackground(file) {
    const body = new FormData();
    body.append('image', file);

    return http('/generations/background-remove', {
      method: 'POST',
      body,
    });
  },
};
