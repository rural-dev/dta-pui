const base_url = 'http://103.174.114.231';

// eslint-disable-next-line import/prefer-default-export
export const api = {
  LoginUrl: `${base_url}/rest-auth/login/?format=json`,
  RegisterUrl: `${base_url}/rest-auth/registration/?format=json`,
  GoogleLogin: `${base_url}/social-login/google/`,
  Feed: `${base_url}/api/v1/feed/`,
  News: `${base_url}/api/v1/news/`,
  Pelajaran: `${base_url}/api/v1/pelajaran/`,
  Kategori: `${base_url}/api/v1/kategori/`,
  Submateri: `${base_url}/api/v1/submateri/`,

};