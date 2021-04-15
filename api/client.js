import axios from 'axios';
import ENVS from '../environment';

const client = axios.create({
  baseURL: ENVS.DEV.API_URL,
  timeout: 10000
});

export function setupApiClient() {
  client.interceptors.request.use(async (config) => {
    const newConfig = config;
    const token = await localStorage.getItem('ACCESS_TOKEN');

    if (token) {
      newConfig.headers.authorization = `Bearer ${token}`;
    }

    return newConfig;
  }, (err) => {
    if (!err.response) {
      Alert.alert('Erreur', 'Pas de réseau !');
    }

    return Promise.reject(err);
  });
}


export default client;
