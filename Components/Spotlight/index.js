import Image from "next/image";
import Link from "next/link";

export default function Spotlight({ pieces }) {
  let randNum = Math.floor(Math.random() * pieces.length);
  const randomPiece = pieces[randNum];

  return (
    <div>
      <h1>Art Gallery</h1>
      <h2>{randomPiece.name}</h2>
      <Image
        src={randomPiece.imageSource}
        alt={randomPiece.slug}
        width={400}
        height={300}
      />
      <h3>By {randomPiece.artist}</h3>
      <Link href={`/art-pieces/${randomPiece.slug}`}>See Details</Link>
    </div>
  );
}
