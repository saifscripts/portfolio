// app/components/ThemeSwitcher.tsx
'use client';

import { Switch } from '@nextui-org/switch';
import { useTheme } from 'next-themes';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      defaultSelected={theme === 'dark'}
      onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size="lg"
      color="default"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    />
  );
}
