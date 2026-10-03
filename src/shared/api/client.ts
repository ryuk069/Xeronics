// #/shared/libs/api/client.ts
const API = import.meta.env.VITE_API_URL

export async function api<T>(path: string): Promise<T> {
  const res = await fetch(`${API}${path}`)
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return res.json() as Promise<T>
}
