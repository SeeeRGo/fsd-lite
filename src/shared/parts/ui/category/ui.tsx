import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

interface CategoryProps extends PropsWithChildren {
  className?: string;
  containerClass?: string;
}
// Maybe this is 3 shared features maybe it's a shared widget idk yet
// After careful consideration I don't think those are 3 features - those are 3 parts stuffed together in a single file
export const Category = ({
  className,
  containerClass,
  children,
}: CategoryProps) => (
  <section className={clsx(styles.section, className)}>
    <div className={clsx('container', containerClass, styles.container)}>
      {children}
    </div>
  </section>
);
