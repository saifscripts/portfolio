/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import axios from '@/lib/axios';
import { IProjectResponse } from '@/types';
import { AxiosError } from 'axios';

export const addProject = async (formData: FormData) => {
  try {
    const { data } = await axios.post<IProjectResponse>(
      '/projects/',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error((error as AxiosError<any>)?.response?.data?.message);
  }
};
