import client from '../client';
import {authHeader, jsonHeader, jsonHeaderPhoto} from "../authRequest";

export function create(payload) {
  return client
      .post('/api/v1/favorites', payload)
    .then(({ data }) => data);
}


export function list(perPage=10, page=1) {
  return client
      .get(`/api/v1/favorites?perPage=${perPage}&page=${page}`)
      .then(({ data }) => data);
}


export function get(id) {
  return client
      .get(`/api/v1/favorites/${id}`)
      .then(({ data }) => data);
}

export function deleteFavorite(favoriteId, payload) {
  payload.id = favoriteId;
  return client
      .delete(`/api/v1/favorites/${favoriteId}`, payload)
      .then(({ data }) => data);
}
