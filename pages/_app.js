import Navigation from "Components/Navigation";
import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Error...</div>;
  if (isLoading) return <div>Loading data...</div>;

  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} pieces={data} />
      <Navigation />
    </>
  );
}
