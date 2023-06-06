import Image from "next/image";

export default function ArtPieceDetails({
  imageSource,
  slug,
  name,
  artist,
  year,
  genre,
}) {
  return (
    <div>
      <Image src={imageSource} alt={slug} width={400} height={300} />
      <ul>
        <li>Title: {name}</li>
        <li>Artist: {artist}</li>
        <li>Year: {year}</li>
        <li>Genre: {genre}</li>
      </ul>
    </div>
  );
}
