import '../styles/globals.css';
import 'video-react/dist/video-react.css';
import 'focus-visible';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
