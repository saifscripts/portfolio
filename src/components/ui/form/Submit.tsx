import { Button } from '@nextui-org/button';
import { cn } from '@nextui-org/theme';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface IProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | undefined;
  disabled?: boolean;
  isIconOnly?: boolean;
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow';
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  startContent?: React.ReactNode;
}

export default function Submit({
  children,
  isLoading,
  className,
  disabled,
  color = 'primary',
  ...props
}: IProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button
      isLoading={isSubmitting || isLoading}
      disabled={disabled || isSubmitting || isLoading}
      type="submit"
      color={color}
      className={cn('w-full', className)}
      {...props}
    >
      {children || 'Submit'}
    </Button>
  );
}
