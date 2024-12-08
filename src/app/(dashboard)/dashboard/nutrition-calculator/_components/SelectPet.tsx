'use client';

import Select from '@/components/form/Select';
import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

const petOptions = [
  { label: 'Dog', key: 'dog' },
  { label: 'Cat', key: 'cat' },
  { label: 'Rabbit', key: 'rabbit' },
];

export default function SelectPet() {
  const { setValue } = useFormContext();
  const pet = useWatch({ name: 'pet' });

  useEffect(() => {
    setValue('age', '');
    setValue('weight', '');
    setValue('activity', '');
  }, [pet]);

  return <Select label="Pet" name="pet" options={petOptions} />;
}
