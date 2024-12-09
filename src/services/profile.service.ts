'use server';

import env from '@/configs/env';
import axios from '@/lib/axios';
import { IProfileResponse } from '@/types';
import { FieldValues } from 'react-hook-form';

export const fetchProfile = async (): Promise<IProfileResponse> => {
  const res = await fetch(`${env.base_url}/profile/`, {
    next: {
      tags: ['profile'],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch profile info!');
  }

  return res.json();
};

export const getProfile = async () => {
  const { data } = await axios.get<IProfileResponse>(`/profile/`);
  return data;
};

export const updateProfile = async (payload: FieldValues) => {
  const { data } = await axios.put<IProfileResponse>(`/profile/`, payload);
  return data;
};
