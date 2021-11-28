import { ImageContextProvider } from "../../image-context";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ImageContextProvider>
      <Component {...pageProps} />
    </ImageContextProvider>
  );
}

export default MyApp;
