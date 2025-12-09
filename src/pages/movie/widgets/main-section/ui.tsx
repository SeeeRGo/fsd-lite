import clsx from 'clsx';
import { useUnit } from 'effector-react';
import type { CSSProperties } from 'react';
import { movieModel } from 'pages/movie';
import { Description } from '../../features/description-short';
import { GradeModal } from '../../features/grade-modal';
import { Info } from '../../features/info';
import { MainButtons } from '../../features/main-buttons';
import { MainPersons } from '../../features/main-persons';
import { MobileActions } from '../../features/mobile-actions';
import { Player } from '../../features/player';
import { ShareModal } from '../../features/share-modal';
import styles from './styles.module.scss';
import { Title } from '../../features/title';
import { TrailerModal } from '../../features/trailer-modal';

export const MainSection = () => {
  const { movie } = useUnit({ movie: movieModel.$movie });

  return (
    <section className={styles.section}>
      <div className={styles.height} />
      {movie?.backdrop && movie.backdrop.url ? (
        <div
          className={styles.bg}
          style={
            { backgroundImage: `url(${movie.backdrop?.url})` } as CSSProperties
          }
        />
      ) : null}
      <div className={clsx('container', styles.container)}>
        <div className={styles.content}>
          <Title />
          <Info />
          <Description />
          <MainPersons />
          <MainButtons />
          <MobileActions />
        </div>
      </div>
      <TrailerModal />
      <ShareModal />
      <GradeModal />
      <Player />
    </section>
  );
};
