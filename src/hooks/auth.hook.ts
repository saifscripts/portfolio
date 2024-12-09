import { useAuth } from '@/contexts/auth.context';
import {
  forgetPassword,
  loginUser,
  resetPassword,
} from '@/services/auth.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

export const useUserLogin = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const router = useRouter();
  const { setIsLoading } = useAuth();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useMutation<any, Error, FieldValues>({
    mutationKey: ['LOGIN'],
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (data?.success) {
        setIsLoading(true);
        router.replace(redirect || '/dashboard');
        toast.success('Successfully logged in!');
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useForgetPassword = () => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useMutation<any, Error, FieldValues>({
    mutationKey: ['FORGET_PASSWORD'],
    mutationFn: forgetPassword,
    onSuccess: (data) => {
      if (data?.success) {
        router.push('/login');
        toast.success('A password reset link has been sent to your email!');
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useResetPassword = () => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useMutation<any, Error, FieldValues>({
    mutationKey: ['RESET_PASSWORD'],
    mutationFn: resetPassword,
    onSuccess: (data) => {
      if (data?.success) {
        router.push('/login');
        toast.success('Password reset successfully!');
      } else {
        toast.error(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
