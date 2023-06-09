import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "Components/FavoriteButton";

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <div>
      <h1>Art Pieces</h1>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <h2>{piece.name}</h2>
            <Image
              src={piece.imageSource}
              alt={piece.slug}
              width={400}
              height={300}
            />
            <h3>By {piece.artist}</h3>
            <FavoriteButton
              slug={piece.slug}
              onToggleFavorite={onToggleFavorite}
              artPiecesInfo={artPiecesInfo}
            />
            <Link href={`/art-pieces/${piece.slug}`}>See Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
