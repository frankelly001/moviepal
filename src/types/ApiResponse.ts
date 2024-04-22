export interface HttpSuccessResponse<T> {
  readonly message: string;
  readonly status: boolean;
  readonly data: T;
}
export interface HttpAuthSuccessResponse<T> {
  readonly message: string;
  readonly status: boolean;
  readonly token: string;
  readonly data: T;
}

export interface RtkSuccessResponse<T> {
  Search: T;
  totalResults: string;
  Response: string;
}
