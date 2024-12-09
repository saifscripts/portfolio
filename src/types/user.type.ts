import { UserRoles } from '@/constants';
import { IResponse } from './global.type';

export type IUserRole = (typeof UserRoles)[number];

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  avatarURL?: string;
  role: IUserRole;
  isDeleted: boolean;
}

export interface IDecodedUser {
  id: string;
  role: IUserRole;
}

export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IContactUsOptions {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export type IAuthResponse = IResponse<{
  accessToken: string;
  refreshToken: string;
}>;

export type IUserResponse = IResponse<IUser>;
