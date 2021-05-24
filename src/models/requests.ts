export enum EMethods {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

export interface EndpointOptions {
  url: string;
  method:
    | EMethods.Get
    | EMethods.Put
    | EMethods.Post
    | EMethods.Patch
    | EMethods.Delete;
  queryParams?: Record<string, string | number>;
  body?: Record<string, unknown>;
  withCredentials?: boolean;
}

export interface ApiResponse {
  data: Record<string, unknown>;
  status: number;
}

export interface IOptions extends EndpointOptions {
  useBaseUrl?: boolean;
  body?: Record<string, unknown>;
  headers?: Record<string, unknown>;
  queryParams?: Record<string, string | number>;
  params?: Record<string, string | number>;
  useToken?: boolean;
  responseType?: 'json' | 'text' | 'blob' | 'xml' | 'document' | 'arrayBuffer';
  redirectUnauthorized?: boolean;
}
