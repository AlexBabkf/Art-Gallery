import ArtPieceDetails from "Components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function DetailedPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
  onSubmitComment,
}) {
  const router = useRouter();
  const slug = router.query.slug;
  const piece = pieces.find((piece) => piece.slug === slug);

  return (
    <ArtPieceDetails
      {...piece}
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
      onSubmitComment={onSubmitComment}
    />
  );
}
