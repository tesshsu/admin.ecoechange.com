import client from '../client';

export function login({ email, password }) {
  return client.post('/api/auth/login', { email, password })
    .then(({ data }) => data);
}

export function register(payload) {
  return client.post('/api/auth/register', payload)
    .then(({ data }) => data);
}

export function forget_password({ email }) {
  return client.post('/api/auth/forget_password', { email })
    .then(({ data }) => data);
}

export function signInWithFacebook(payload) {
  return client.post('/api/auth/signInWithFacebook', payload)
    .then(({ data }) => data);
}

export function signInWithGoogle(payload) {
  return client.post('/api/auth/google', payload)
    .then(({ data }) => data);
}
