import Image from "next/image";

export default function ArtPieces({ pieces }) {
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
          </li>
        ))}
      </ul>
    </div>
  );
}
