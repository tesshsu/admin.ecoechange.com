const ENVS = {
  BASE: {
      APP_NAME: 'ecoechange',
      GOOGLE_API_KEY: 'Bl5TgqgoIjALFFgzcfL-d5lT',
      FACEBOOK_APP_ID: '369563143619842',
      FACEBOOK_APP_NAME: 'ecoechange'
  },
  DEV: {
    ENV: 'DEV',
	API_URL: 'https://api.ecoechange.com',
	DEV_URL: 'https://dev.ecoechange.com'
  },
  PRO: {
    ENV: 'PRO',
	API_URL: 'https://api.ecoechange.com',
	LIVE_URL: 'https://ecoechange.com'
  },
};

export default {
  ...ENVS
};
