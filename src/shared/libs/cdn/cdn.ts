// src/lib/cdn.ts
const CDN = import.meta.env.VITE_CDN_URL;
export const cdn = (path: string) => `${CDN}/${path.replace(/^\//, "")}`;
