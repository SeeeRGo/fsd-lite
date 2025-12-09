import clsx from 'clsx';
import { FreeMode, Navigation } from 'swiper';
import {
  CarouselMultiply,
  type CarouselMultiplyProps,
} from 'shared/ui/carousel-multiply';
import { Spinner } from 'shared/ui/spinner';
import styles from './styles.module.scss';

export const CategoryCarousel = <T, _>({
  items,
  slideClassName,
  ...props
}: CarouselMultiplyProps<T>) => {
  return (
    <div className={styles.wrapper}>
      {items ? (
        <CarouselMultiply
          className={styles.slider}
          freeMode={{ momentumBounceRatio: 0 }}
          items={items}
          modules={[FreeMode, Navigation]}
          nextBtnClass={styles.nextBtn}
          prevBtnClass={styles.prevBtn}
          slideClassName={clsx(styles.slide, slideClassName)}
          {...props}
        />
      ) : (
        <div className={styles.loader}>
          <Spinner strokeWidth={2} />
        </div>
      )}
    </div>
  );
};
