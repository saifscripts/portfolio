'use client';

import Form from '@/components/ui/form/Form';
import Input from '@/components/ui/form/Input';
import Submit from '@/components/ui/form/Submit';
import Textarea from '@/components/ui/form/Textarea';
import { useGetProfile, useUpdateProfile } from '@/hooks/profile.hook';
import { UpdateProfileSchema } from '@/schemas/profile.schema';
import { SaveIcon, UserPenIcon } from 'lucide-react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

export default function EditProfile() {
  const { profileInfo } = useGetProfile();
  const { mutate: updateProfile } = useUpdateProfile();

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    updateProfile(data);
  };

  if (!profileInfo) return null;

  return (
    <Form
      className="p-4 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
      defaultValues={profileInfo as unknown as Record<string, unknown>}
      formSchema={UpdateProfileSchema}
    >
      <div className="flex justify-between items-center mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-3xl flex items-center gap-4">
          Edit Profile
          <UserPenIcon className="size-5 sm:size-8" />
        </h2>
        <Submit
          className="hidden md:flex w-auto"
          startContent={<SaveIcon size={16} />}
        >
          Save Changes
        </Submit>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-4">
            <Input name="name.firstName" label="First Name" />
            <Input name="name.middleName" label="Middle Name" />
            <Input name="name.lastName" label="Last Name" />
          </div>
          <Input name="designation" label="Designation" />
          <Input name="photo" label="Photo" />
          <Input name="description" label="Description" />
          <Textarea name="about" label="About" minRows={8} maxRows={8} />
        </div>

        <div className="space-y-4">
          <Input name="phone" label="Phone" />
          <Input name="email" label="Email" />
          <Input name="address" label="Address" />
          <Input name="resume" label="Resume" />
          <Input name="github" label="GitHub" />
          <Input name="linkedin" label="LinkedIn" />
          <Input name="x" label="X (Twitter)" />
          <Submit className="md:hidden" startContent={<SaveIcon size={16} />}>
            Save Changes
          </Submit>
        </div>
      </div>
    </Form>
  );
}
