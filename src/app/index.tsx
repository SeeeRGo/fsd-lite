import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app';
import { BaseLayout } from 'widgets/layouts';
import { withProviders } from './providers';
// Reuse intentions are key to all distinctions
const App = ({ Component, pageProps }: AppProps) => (
  <>
    <NextNProgress
      color="var(--color-primary)"
      height={3}
      options={{ showSpinner: false }}
    />
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  </>
);

export default withProviders(App);
