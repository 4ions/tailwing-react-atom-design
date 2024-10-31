export type QueryParams = {
  [key: string]: string | number
}

export type RequestOptions = {
  queryParams?: QueryParams
  headers?: Headers
  body?: unknown
}
