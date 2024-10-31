import { RequestOptions } from '@/types/request'
import { HttpInterceptor } from './httpInterceptor'

export class HttpService {
  private baseUrl: string
  private interceptor: HttpInterceptor

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.interceptor = new HttpInterceptor()
  }

  private async request<T>(
    method: string,
    endpoint: string,
    options?: RequestOptions
  ): Promise<T> {
    const { headers, body } = this.interceptor.beforeRequest({
      headers: options?.headers,
      body: options?.body,
    })

    const url = this.buildUrl(endpoint, options?.queryParams)

    const response = await fetch(url, {
      method: method,
      headers,
      body: JSON.stringify(body),
    })

    return this.interceptor.afterResponse(response)
  }

  private buildUrl(
    endpoint: string,
    queryParams?: Record<string, string | number>
  ): string {
    const url = new URL(`${this.baseUrl}${endpoint}`)
    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) =>
        url.searchParams.append(key, value.toString())
      )
    }

    return url.toString()
  }

  public get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>('GET', endpoint, options)
  }

  public post<T>(
    endpoint: string,
    body: unknown,
    options?: RequestOptions
  ): Promise<T> {
    return this.request<T>('POST', endpoint, { ...options, body })
  }

  public put<T>(
    endpoint: string,
    body: unknown,
    options?: RequestOptions
  ): Promise<T> {
    return this.request<T>('PUT', endpoint, { ...options, body })
  }

  public delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>('DELETE', endpoint, options)
  }
}
