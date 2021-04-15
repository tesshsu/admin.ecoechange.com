import client from '../client';

export function create(payload) {
  return client
    .post('/api/v1/ideas', payload)
    .then(({ data }) => data);
}

export function get(id) {
  return client
      .get(`/api/v1/ideas/${id}`)
      .then(({ data }) => data);
}

export function search(perPage, page) {
  return client
      .get(`/api/v1/ideas/search?perPage=${perPage}&page=${page}`)
      .then(({ data }) => data);
}

export function deleteCar(carId, payload) {
  payload.id = carId;
  return client
      .delete(`/api/v1/ideas/${carId}`, payload)
      .then(({ data }) => data);
}
