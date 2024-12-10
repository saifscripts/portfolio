'use client';

import ContentBox from '@/components/ui/form/ContentBox';
import Form from '@/components/ui/form/Form';
import Input from '@/components/ui/form/Input';
import Submit from '@/components/ui/form/Submit';
import Textarea from '@/components/ui/form/Textarea';
import { useAddProject } from '@/hooks/project.hook';
import { createProjectSchema } from '@/schemas/project.schema';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

const defaultValues = {
  title: '',
  summary: '',
  content: '',
  isPremium: 'free',
  category: '',
  tags: '',
};

export default function AddProject() {
  const {
    mutate: addProject,
    data: newProject,
    isPending,
    isSuccess,
  } = useAddProject();
  const [imageFile, setImageFile] = useState<File | undefined>(undefined);
  const [imageDataUrl, setImageDataUrl] = useState<string>('');
  const [form, setForm] = useState<UseFormReturn | null>(null);

  const handleSubmit: SubmitHandler<FormData> = async (formData) => {
    if (imageFile) formData.append('images', imageFile);
    addProject(formData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImageFile(file);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageDataUrl(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (!isPending && isSuccess && newProject?.success) {
      form!.reset(defaultValues);
      setImageFile(undefined);
      setImageDataUrl('');
    }
  }, [isPending, isSuccess, newProject, form]);

  return (
    <Form
      className="space-y-6 p-6 max-w-5xl mx-auto"
      onSubmit={handleSubmit}
      setForm={setForm}
      defaultValues={defaultValues}
      formSchema={createProjectSchema}
    >
      <Input name="name" label="Name" />
      <Input name="description" label="Description" />
      <Textarea
        name="summary"
        label="Project Summary"
        placeholder="Write a brief summary of your project"
      />
      <Input name="live" label="Live Link" />
      <ContentBox name="content" />

      {imageDataUrl ? (
        <div className="relative size-48 rounded-xl border-2 border-dashed border-default-300 p-2">
          <Image
            alt="item"
            fill
            className="h-full w-full object-cover object-center rounded-md"
            src={imageDataUrl}
          />
        </div>
      ) : (
        <div className="min-w-fit flex-1">
          <label
            className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
            htmlFor="image"
          >
            Upload image
          </label>
          <input
            className="hidden"
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e)}
          />
        </div>
      )}
      <Submit isLoading={isPending}>Create Post</Submit>
    </Form>
  );
}
