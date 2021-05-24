import client from '../client';

export function getUser() {
  return client
    .get(`/api/v1/profil`)
    .then(({ data }) => data);
}

export function getUsers(perPage, page) {
  return client
      .get(`/api/v1/users?perPage=${perPage}&page=${page}`)
      .then(({ data }) => data);
}

export async function updateProfil(userId, userInfo) {
  userInfo.id = userId;
  return client
    .patch(`/api/v1/profil`,  userInfo );
}
