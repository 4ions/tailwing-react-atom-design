import { RequestOptions } from '@/types/request'

export class HttpInterceptor {
  private buildHeaders(customHeaders?: Record<string, string>): Headers {
    const headers = new Headers({
      'Content-Type': 'application/json',
      ...customHeaders,
    })
    return headers
  }

  private async extractErrorMessage(response: Response): Promise<string> {
    try {
      const errorData = await response.json()
      return errorData.message || 'Unknown error'
    } catch {
      return 'Error parsing response'
    }
  }

  public beforeRequest(options: RequestOptions): RequestOptions {
    // Crear o modificar headers
    const token = localStorage.getItem('authToken')
    if (token || !token) {
      options.headers = this.buildHeaders({
        Authorization: `Bearer ${token}`,
        'x-api-key': 'a0440b63-b6a4-4f75-61a7-c0c3053e8576',
      })
    }

    return options
  }

  public async afterResponse<T>(response: Response): Promise<T> {
    // Validar si la respuesta es exitosa
    if (!response.ok) {
      const errorMessage = await this.extractErrorMessage(response)
      throw new Error(errorMessage || 'Request failed')
    }

    // Desempaquetar la respuesta
    const data = await response.json()

    return data?.data as T
  }
}
