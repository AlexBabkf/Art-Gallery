import ArtPieces from "Components/ArtPieces";

export default function favorites({ pieces, artPiecesInfo, onToggleFavorite }) {
  const favorites = pieces.filter((piece) =>
    artPiecesInfo.some(
      (favPiece) => favPiece.isFavorite && favPiece.slug === piece.slug
    )
  );
  return (
    <div>
      <h1>Favorite Art Pieces</h1>
      <ArtPieces pieces={favorites} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
