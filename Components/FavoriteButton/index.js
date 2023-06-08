export default function FavoriteButton({
  onToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  // Due to the code below the tests from ArtPiecesDetails, ArtPieces, Spotlight fail.
  // The reason given is  TypeError: Cannot read properties of undefined (reading 'find')
  // I used optional chaining before find and everything works

  const piece = artPiecesInfo?.find((piece) => piece.slug === slug) ?? null;
  const isFavorite = piece ? piece.isFavorite : null;

  return (
    <button
      role="fav-button"
      type="button"
      onClick={() => onToggleFavorite(slug)}
    >
      {isFavorite ? "UnLike" : "Like"}
    </button>
  );
}
