import { getBasicInfo, updateBasicInfo } from '@/services/basic-info.service';
import { IBasicInfoResponse } from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

export const useGetBasicInfo = () => {
  const result = useQuery<IBasicInfoResponse, Error, IBasicInfoResponse>({
    queryKey: ['BASIC_INFO'],
    queryFn: async () => await getBasicInfo(),
  });

  return { basicInfo: result?.data?.data, ...result };
};

export const useUpdateBasicInfo = () => {
  const queryClient = useQueryClient();

  return useMutation<IBasicInfoResponse, Error, FieldValues>({
    mutationKey: ['BASIC_INFO'],
    mutationFn: updateBasicInfo,
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ['BASIC_INFO'] });
        toast.success('Basic info updated successfully!');
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
