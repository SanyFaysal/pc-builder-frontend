import LayOut from '@/components/layout';
import store from '@/redux/store';
import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import { SessionProvider } from 'next-auth/react';

import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <SessionProvider session={session}>
        <Provider store={store}>
          <LayOut>
            <Toaster />
            <Component {...pageProps} />
          </LayOut>
        </Provider>
      </SessionProvider>
    );
  }
}
