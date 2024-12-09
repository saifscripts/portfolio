'use server';

import env from '@/configs/env';
import axios from '@/lib/axios';
import { IAuthResponse, IResponse, IUser, IUserResponse } from '@/types';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { FieldValues } from 'react-hook-form';

export const loginUser = async (userData: FieldValues) => {
  const { data } = await axios.post<IAuthResponse>('/auth/login', userData);

  if (data.success) {
    (await cookies()).set('accessToken', data?.data?.accessToken);
    (await cookies()).set('refreshToken', data?.data?.refreshToken);
  }

  return data;
};

export const logoutUser = async () => {
  (await cookies()).delete('accessToken');
  (await cookies()).delete('refreshToken');
};

export const forgetPassword = async (fieldValues: FieldValues) => {
  const { data } = await axios.post<IResponse<null>>(
    '/auth/forget-password',
    fieldValues
  );

  return data;
};

export const resetPassword = async (fieldValues: FieldValues) => {
  const { data } = await axios.put<IResponse<null>>(
    '/auth/reset-password',
    fieldValues
  );

  return data;
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get('accessToken')?.value;

  let decodedToken: IUser | null = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
  }

  return decodedToken;
};

export const getAuthUser = async (): Promise<IUserResponse | null> => {
  const res = await fetch(`${env.base_url}/users/me`, {
    headers: {
      Authorization: `Bearer ${(await cookies()).get('accessToken')?.value}`,
    },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};
