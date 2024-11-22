import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(1, 'Name is required')
    .min(3, 'Name must be at least 3 characters long'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(1, 'Email is required')
    .email('Invalid email address'),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters long'),
});
