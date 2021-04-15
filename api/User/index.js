import client from '../client';

export function getUsers(perPage, page) {
  return client
    .get(`/api/v1/users?perPage=${perPage}&page=${page}`)
    .then(({ data }) => data);
}

export function deleteUser(id) {
  return client
    .delete(`/api/v1/users/${id}`)
    .then(({ data }) => data);
}

export async function updateProfil(userId, userInfo) {
  userInfo.id = userId;
  return client
    .patch(`/api/v1/profil`,  userInfo );
}