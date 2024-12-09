'use client';

import Form from '@/components/form/Form';
import Input from '@/components/form/Input';
import Submit from '@/components/form/Submit';
import { useUserLogin } from '@/hooks/auth.hook';
import { loginSchema } from '@/schemas/auth.schema';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import ForgetPasswordLink from './_components/ForgetPasswordLink';

export default function LoginPage() {
  const { mutate: loginUser, isPending } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    loginUser(data);
  };

  const defaultValues = {
    email: 'admin@saifscripts.com',
    password: '131313',
  };

  return (
    <div className="flex items-center justify-center h-[calc(100svh-64px)]">
      <Form
        onSubmit={onSubmit}
        formSchema={loginSchema}
        defaultValues={defaultValues}
        className="w-full max-w-md p-8 space-y-6 rounded-xl shadow-lg dark:border dark:border-divider m-4"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-default-800">Welcome Back</h1>
          <p className="mt-2 text-sm text-default-600">
            Please sign in to continue
          </p>
        </div>

        <Input
          name="email"
          label="Email"
          placeholder="Enter your email"
          className="rounded-lg"
        />

        <div className="space-y-2">
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            className="rounded-lg"
          />
          <div className="flex justify-end">
            <ForgetPasswordLink />
          </div>
        </div>

        <Submit
          variant="solid"
          color="primary"
          isLoading={isPending}
          className="rounded-lg"
        >
          Sign In
        </Submit>
      </Form>
    </div>
  );
}
