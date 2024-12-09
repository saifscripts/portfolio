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
