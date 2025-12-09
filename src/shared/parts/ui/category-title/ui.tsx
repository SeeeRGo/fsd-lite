import Link from 'next/link';
import type { ElementType } from 'react';
import { Icon } from 'shared/ui/icon';
import { Title, type TitleProps } from 'shared/ui/title';
import styles from './styles.module.scss';

export const CategoryTitle = ({
  children,
  href,
  ...props
}: TitleProps<ElementType<Partial<HTMLAnchorElement>>>) => (
  <Title
    as={href ? Link : 'h2'}
    className={styles.title}
    href={href}
    size="medium"
    {...props}
  >
    {children}
    {href ? (
      <span className={styles.icon}>
        <Icon name="common/chevron" />
      </span>
    ) : null}
  </Title>
);
