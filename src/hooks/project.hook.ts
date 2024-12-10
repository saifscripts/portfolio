/* eslint-disable @typescript-eslint/no-explicit-any */
import { addProject } from '@/services/project.service';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useAddProject = () => {
  // const queryClient = useQueryClient();

  return useMutation<any, Error, FormData>({
    mutationKey: ['PROJECT'],
    mutationFn: addProject,
    onSuccess: (data) => {
      if (data?.success) {
        //   queryClient.invalidateQueries({ queryKey: ['POST'] });
        toast.success('Project added successfully!');
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
