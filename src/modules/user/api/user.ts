import { api } from "#/shared/api/client";
import type { changePasswordRequest } from "../types/user.api";

export async function getCurrentUser(token: string | null) {
  return api({
    endpoint: "/api/v1/user/me",
    token,
  });
}

export async function changePassword(credetials: changePasswordRequest, token: string | null) {
  return api({
    endpoint: "/api/v1/user/change-password",
    method: 'POST',
    body: credetials,
    token,
  });
}

export async function showSessions() {

}
