import LayOut from '@/components/layout';
import store from '@/redux/store';
import '@/styles/globals.css';
import { useEffect, useState } from 'react';

import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
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
      <Provider store={store}>
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </Provider>
    );
  }
}
