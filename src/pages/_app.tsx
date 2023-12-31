// styles
import "swiper/css";
import "@/styles/globals.scss";

// Types
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
