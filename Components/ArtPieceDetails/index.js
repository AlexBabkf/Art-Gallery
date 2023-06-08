import Image from "next/image";
import FavoriteButton from "Components/FavoriteButton";
import CommentForm from "Components/CommentForm";

export default function ArtPieceDetails({
  imageSource,
  slug,
  name,
  artist,
  year,
  genre,
  onToggleFavorite,
  artPiecesInfo,
  onSubmitComment,
}) {
  const piece = artPiecesInfo.find((piece) => piece.slug === slug) ?? {
    comments: ["No comments yet"],
  };
  const date = `Added on: ${new Date()}`;

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
      <h3>Comments</h3>
      {piece.comments.map((comment, index) => (
        <li key={index}>
          <p>{comment}</p>
          <h6>{date}</h6>
        </li>
      ))}
      <CommentForm slug={slug} onSubmitComment={onSubmitComment} />
    </div>
  );
}
