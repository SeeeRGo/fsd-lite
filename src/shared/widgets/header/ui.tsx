import clsx from 'clsx';
import { useHeaderFixed } from './lib';
import { Burger } from '../../features/burger';
import { Logo } from '../../parts/ui/logo';
import { Menu } from '../../features/menu';
import { Nav } from '../../features/nav';
import { Profile } from '../../features/profile';
import { SearchButton } from '../../features/search-button';
import styles from './styles.module.scss';
// Some features can be rearranged to be bigger but idk yet
export const Header = () => {
  const { isFixed } = useHeaderFixed();

  return (
    <header
      className={clsx(styles.header, {
        [styles.fixed]: isFixed,
      })}
    >
      <div className={clsx('container', styles.container)}>
        <div className={styles.row}>
          <Logo />
          <Nav />
        </div>
        <div className={styles.row}>
          <SearchButton />
          <Profile />
          <Burger />
        </div>
      </div>
      <Menu />
    </header>
  );
};
