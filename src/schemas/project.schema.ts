import { z } from 'zod';

const repoSchema = z.object({
  label: z.string().min(1, 'Label is required'),
  url: z.string().url('Invalid URL format'),
});

export const createProjectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  description: z.string().min(1, 'Description is required'),
  summary: z.string().min(1, 'Summary is required'),
  content: z.string().min(1, 'Content is required'),
  images: z
    .array(z.string().url('Invalid image URL'))
    .nonempty('At least one image is required'),
  live: z.string().url('Invalid live URL'),
  repos: z.array(repoSchema).nonempty('At least one repository is required'),
  techs: z
    .array(z.string().min(1, 'Tech name is required'))
    .nonempty('At least one tech is required'),
});
