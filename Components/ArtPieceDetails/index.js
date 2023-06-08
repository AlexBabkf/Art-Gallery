import Image from "next/image";
import FavoriteButton from "Components/FavoriteButton";

export default function ArtPieceDetails({
  imageSource,
  slug,
  name,
  artist,
  year,
  genre,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <div>
      <Image src={imageSource} alt={slug} width={400} height={300} />
      <ul>
        <li>Title: {name}</li>
        <li>Artist: {artist}</li>
        <li>Year: {year}</li>
        <li>Genre: {genre}</li>
        <FavoriteButton
          slug={slug}
          onToggleFavorite={onToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </ul>
    </div>
  );
}
