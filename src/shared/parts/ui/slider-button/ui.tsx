import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { Icon } from 'shared/ui/icon';
import styles from './styles.module.scss';

interface SliderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
// Maybe it's a part Is part of a shared feature a shared part? Maybe it is overhead to no colocate them but then again we ask a question can we reasonably imagine reusing this in other features
export const SliderButton = forwardRef<HTMLButtonElement, SliderButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      className={clsx('btn-reset', styles.btn, className)}
      ref={ref}
      {...props}
    >
      <Icon name="common/chevron" />
    </button>
  )
);
