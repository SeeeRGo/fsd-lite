import { useUnit } from 'effector-react';
import type { CSSProperties } from 'react';
import { authModel } from 'widgets/auth';
import styles from './styles.module.scss';
// Maybe it's a legit feature but feels more like a part
// TODO figure out easoning around single use parts of a common feature
// Something like this if you can imagine reusing it in other features it's a part
// Need to think about how would page-specific part could look like
export const Progress = () => {
  const { progress } = useUnit({ progress: authModel.$progress });

  return (
    <div
      className={styles.progress}
      style={{ '--progress-width': `${progress}%` } as CSSProperties}
    />
  );
};
