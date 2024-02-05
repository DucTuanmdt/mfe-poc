import { ApiService } from ".";
import { IFLoginCredential, IFLoginResponse } from "@/model/userModel";

const authBaseUrl = process.env.AUTHENTICATION_BASE_URL as string;

const authService = new ApiService(authBaseUrl);

export async function login(credential: IFLoginCredential) {
  const { data, error } = await authService.post(`/login`, {
    payload: {
      ...credential,
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data as IFLoginResponse;
}
