import client from '../client';

export function create(payload) {
  return client
      .post('/api/v1/payments', payload)
    .then(({ data }) => data);
}

export function get(id) {
  return client
      .get(`/api/v1/payments/${id}`)
      .then(({ data }) => data);
}

export function list(perPage, page, owner) {
  return client
      .get(`/api/v1/payments?perPage=${perPage}&page=${page}&owner=${owner ? owner : ''}`)
      .then(({ data }) => data);
}

