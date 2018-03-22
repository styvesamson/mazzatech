export enum AuthMethod {
  NONE,
  PASSWORD,
}

export const environment = {
  production: true,
  api: 'https://api.yvestoupe.com/api',
  auth_method: AuthMethod.NONE,
};
