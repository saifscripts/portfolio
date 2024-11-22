import { cn } from '@nextui-org/theme';
import { ForwardedRef, forwardRef } from 'react';

interface ISectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const Section = forwardRef(function Section(
  { children, id, className, ...props }: ISectionProps,
  ref: ForwardedRef<HTMLElement | null>
) {
  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        'w-full scroll-mt-16 container py-8 sm:py-12 border-t border-divider',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
});

interface ISectionHeaderProps {
  title: string;
  description?: string;
  align?: 'left' | 'right';
}

export function SectionHeader({
  title,
  description,
  align = 'left',
}: ISectionHeaderProps) {
  return (
    <header className="flex flex-col gap-2 border-b border-divider pb-4 mb-8 sm:mb-12">
      <h1
        className={cn(
          'text-center text-5xl font-bold bg-gradient-to-r from-primary/90 via-secondary/90 to-success/90 inline-block text-transparent bg-clip-text',
          {
            'self-start': align === 'left',
            'self-end': align === 'right',
          }
        )}
      >
        {title}
      </h1>
      <p
        className={cn('text-foreground-400', {
          'self-start': align === 'right',
          'self-end': align === 'left',
        })}
      >
        {description}
      </p>
    </header>
  );
}
