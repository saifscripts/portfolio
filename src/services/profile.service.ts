'use server';

import axios from '@/lib/axios';
import { IProfileResponse } from '@/types';
import { FieldValues } from 'react-hook-form';

export const getProfile = async () => {
  const { data } = await axios.get<IProfileResponse>(`/profile/`);
  return data;
};

export const updateProfile = async (payload: FieldValues) => {
  const { data } = await axios.put<IProfileResponse>(`/profile/`, payload);
  return data;
};
