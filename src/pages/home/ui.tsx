import { useGate } from 'effector-react';
import { homeModel } from './model';
import { ComedyFilms } from './widgets/comedy-films';
import { Drama } from './widgets/drama';
import { Fantastic } from './widgets/fantastic';
import { ForFamily } from './widgets/for-family';
import { Genres } from './features/genres';
import { Hero } from './widgets/hero';
import { Info } from './features/info';
import { NewFilms } from './widgets/new-films';

export const HomePage = () => {
  useGate(homeModel.HomePageGate);

  return (
    <>
      <Hero />
      <Genres />
      <ComedyFilms />
      <NewFilms />
      <ForFamily />
      <Drama />
      <Fantastic />
      <Info />
    </>
  );
};
