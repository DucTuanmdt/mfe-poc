export interface IFUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  address: string;
  city: string;
  avatar: string;
  country: string;
}

export interface IFLoginCredential {
  email: string;
  password: string;
}

export interface IFLoginResponse {
  success: boolean;
  message: string;
  token: string;
  user: IFUser;
}

export interface AuthenticationInfo {
  token: string;
  user: IFUser;
}
