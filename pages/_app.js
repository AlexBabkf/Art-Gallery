import Navigation from "Components/Navigation";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  if (error) return <div>Error...</div>;
  if (isLoading) return <div>Loading data...</div>;

  function onToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const piece = artPiecesInfo.find((piece) => piece.slug === slug);

      if (piece) {
        return artPiecesInfo.map((piece) => {
          return piece.slug === slug
            ? { ...piece, isFavorite: !piece.isFavorite }
            : piece;
        });
      }

      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  function onSubmitComment(slug, comment) {
    setArtPiecesInfo((artPiecesInfo) => {
      const piece = artPiecesInfo.find((piece) => piece.slug === slug);
      if (piece) {
        // All comments except the first were added twice every time, with the includes this is prevented
        // but now if someone wanted to make exactly the same comment that would not be possible

        if (!piece.comments.includes(comment)) {
          piece.comments.push(comment);
        }
        return [...artPiecesInfo];
      }
      return [...artPiecesInfo, { slug, comments: [comment] }];
    });
  }
  console.log(artPiecesInfo);
  return (
    <>
      <GlobalStyle />

      <Component
        {...pageProps}
        pieces={data}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        onSubmitComment={onSubmitComment}
      />
      <Navigation />
    </>
  );
}
