export enum AuthMethod {
  NONE,
  PASSWORD,
}

export const environment = {
  production: true,
  api: 'http://35.224.103.95:8000/api',
  auth_method: AuthMethod.NONE,
};
