export interface ApiOptions {
  endpoint: string
  method?: string
  body?: unknown
  token?: string | null
  addCookies?: boolean
}
