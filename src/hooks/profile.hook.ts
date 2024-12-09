import { getProfile, updateProfile } from '@/services/profile.service';
import { IProfileResponse } from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

export const useGetProfile = () => {
  const result = useQuery<IProfileResponse, Error, IProfileResponse>({
    queryKey: ['PROFILE'],
    queryFn: async () => await getProfile(),
  });

  return { profileInfo: result?.data?.data, ...result };
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation<IProfileResponse, Error, FieldValues>({
    mutationKey: ['PROFILE'],
    mutationFn: updateProfile,
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ['PROFILE'] });
        toast.success('Profile info updated successfully!');
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
