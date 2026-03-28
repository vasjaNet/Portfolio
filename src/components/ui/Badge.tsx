import type { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'primary';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
        {
          'bg-primary text-white': variant === 'primary',
          'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200': variant === 'default',
          'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-200': variant === 'secondary',
          'border border-slate-200 dark:border-slate-700': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
}
