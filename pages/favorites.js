import ArtPieces from "Components/ArtPieces";

export default function favorites({ pieces, artPiecesInfo, onToggleFavorite }) {
  console.log(pieces);
  const favorites = pieces.filter((piece) =>
    artPiecesInfo.some((favPiece) => favPiece.slug === piece.slug)
  );
  return <ArtPieces pieces={favorites} onToggleFavorite={onToggleFavorite} />;
}
