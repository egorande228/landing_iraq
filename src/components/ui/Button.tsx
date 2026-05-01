import type { ReactNode } from 'react';

import { joinClasses } from '@/lib/classes';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  className?: string;
};

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
}: ButtonProps) {
  return (
    <a
      className={joinClasses(
        'btn-base',
        variant === 'primary' && 'btn-primary',
        variant === 'secondary' && 'btn-secondary',
        variant === 'ghost' && 'btn-ghost',
        size === 'md' && 'btn-md',
        size === 'lg' && 'btn-lg',
        className,
      )}
      href={href}
    >
      <span className="btn-base__label">{children}</span>
    </a>
  );
}
