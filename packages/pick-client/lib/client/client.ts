export interface Request {
  url: string;
  headers: Headers;
}

export interface IHttpClient {
  get: () => void;
}
