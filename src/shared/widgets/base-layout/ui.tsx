import type { PropsWithChildren } from 'react';
import { AuthWindow } from 'widgets/auth';
import { Header } from 'widgets/header';
import { useGate } from 'effector-react';
import { useRouter } from 'next/router';
import { navigationModel } from 'shared/parts/navigation';
import { SearchWindow } from 'entities/search-window';
import { Notification } from 'entities/notification';
import { Seo } from './seo';

// run process logic for all base layout pages
import 'app/processes/root';

export const BaseLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  useGate(navigationModel.RouterGate, { router });

  return (
    <>
      <Seo />
      <Header />
      <main className="main">{children}</main>
      <SearchWindow />
      <AuthWindow />
      <Notification />
    </>
  );
};
