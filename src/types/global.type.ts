export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  meta?: {
    total: number;
    page: number;
    totalPages: number;
    limit: number;
  };
}

export type IAuthResponse = IResponse<{
  accessToken: string;
  refreshToken: string;
}>;
