import type { ApiErrorData } from '#/modules/auth/types/authTypes'
import type { ApiOptions } from '#/shared/types/apiOptions.ts'

export class ApiError extends Error {
  status: number
  data: ApiErrorData

  constructor(message: string, status: number, data: ApiErrorData) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}
// Callers that don't pass a generic get `any`, like the old function returned
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Json = any

// Both call styles work:
//   api<T>('/path', { method: 'POST', body })
//   api<T>({ endpoint: '/path', method: 'POST', body })
export function api<T = Json>(
  path: string,
  options?: Omit<ApiOptions, 'endpoint'>,
): Promise<T>
export function api<T = Json>(options: ApiOptions): Promise<T>
export async function api<T = Json>(
  pathOrOptions: string | ApiOptions,
  maybeOptions: Omit<ApiOptions, 'endpoint'> = {},
): Promise<T> {
  const {
    endpoint,
    method = 'GET',
    body,
    token,
    addCookies = true,
  }: ApiOptions =
    typeof pathOrOptions === 'string'
      ? { endpoint: pathOrOptions, ...maybeOptions }
      : pathOrOptions

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
      method,
      headers: {
        ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      credentials: addCookies ? 'include' : 'omit',
      body: body !== undefined ? JSON.stringify(body) : undefined,
    })

    // Tolerate empty bodies (204) and non-JSON responses (e.g. an HTML 502 page)
    const text = await response.text()
    let data: unknown = null
    if (text) {
      try {
        data = JSON.parse(text)
      } catch {
        // leave data as null
      }
    }

    if (!response.ok) {
      const errorData = (data ?? {}) as ApiErrorData & { message?: string }
      throw new ApiError(
        errorData.message ?? 'Something went wrong',
        response.status,
        errorData,
      )
    }

    return data as T
  } catch (error) {
    if (error instanceof DOMException && error.name === 'TimeoutError') {
      throw new Error('The server took too long to respond.', { cause: error })
    }
    if (error instanceof TypeError) {
      throw new Error('Unable to connect to the server.', { cause: error })
    }
    throw error
  }
}
