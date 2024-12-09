'use client';

import Form from '@/components/ui/form/Form';
import Input from '@/components/ui/form/Input';
import Submit from '@/components/ui/form/Submit';
import { useResetPassword } from '@/hooks/auth.hook';
import { resetPasswordSchema } from '@/schemas/auth.schema';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FieldValues, SubmitHandler } from 'react-hook-form';

export default function ResetPasswordPage() {
  const { mutate: resetPassword, isPending } = useResetPassword();
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  if (!token) {
    return (
      <div className="flex items-center justify-center h-[calc(100svh-64px)]">
        <p>Invalid token</p>
      </div>
    );
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    data.token = token;
    resetPassword(data);
  };

  return (
    <div className="flex items-center justify-center h-[calc(100svh-64px)]">
      <Form
        onSubmit={onSubmit}
        formSchema={resetPasswordSchema}
        className="w-full max-w-md p-8 space-y-6 rounded-xl shadow-lg dark:border dark:border-divider m-4"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-default-800">
            Reset Password
          </h1>
          <p className="mt-2 text-sm text-default-600">
            Please enter your new password
          </p>
        </div>

        <Input
          name="password"
          type="password"
          label="New Password"
          placeholder="Enter a new password"
          className="rounded-lg"
        />

        <Submit
          variant="solid"
          color="primary"
          isLoading={isPending}
          className="rounded-lg"
        >
          Reset Password
        </Submit>

        <div className="text-center text-sm text-default-600">
          Remember your password?{' '}
          <Link
            href="/login"
            className="text-primary-400 hover:text-primary-500 hover:underline"
          >
            Sign in
          </Link>
        </div>
      </Form>
    </div>
  );
}
