'use server';

import axios from '@/lib/axios';
import { IBasicInfoResponse } from '@/types';
import { FieldValues } from 'react-hook-form';

export const getBasicInfo = async () => {
  const { data } = await axios.get<IBasicInfoResponse>(`/basic-info/`);
  return data;
};

export const updateBasicInfo = async (payload: FieldValues) => {
  const { data } = await axios.put<IBasicInfoResponse>(`/basic-info/`, payload);
  return data;
};
