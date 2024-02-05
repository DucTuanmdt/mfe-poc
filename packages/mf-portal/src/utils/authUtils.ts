import { IFUser } from "@/model/userModel";

export const TOKEN_KEY = "access_token";
export const USER_INFO_KEY = "user_info";

export function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY) as string;
}

export function getUserInfo() {
  try {
    const userStr = localStorage.getItem(USER_INFO_KEY);
    const user = JSON.parse(userStr as string);
    if (user.id && user.email) {
      return user as IFUser;
    }
    return null;
  } catch (e) {
    return null;
  }
}

export function setAuthenticationToStorage(token: string, user: IFUser) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(user));
}

export function getAuthenticationInfo() {
  const token = getAccessToken();
  const user = getUserInfo();

  return {
    token,
    user,
    isAuthenticated: token && user,
  };
}
