import { render, screen } from "@testing-library/react";
import ArtPieces from "./index";

const mockPieces = [
  {
    slug: "slug1",
    artist: "artist1",
    name: "name1",
    imageSource: "/img1.jpg",
  },
  {
    slug: "slug2",
    artist: "artist2",
    name: "name2",
    imageSource: "/img2.jpg",
  },
  {
    slug: "slug3",
    artist: "artist3",
    name: "name3",
    imageSource: "/img3.jpg",
  },
];

test("all pieces are displayed as a list", () => {
  render(<ArtPieces pieces={mockPieces} />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(mockPieces.length);
});

test("each piece's image is displayed", () => {
  render(<ArtPieces pieces={mockPieces} />);
  mockPieces.forEach((piece) => {
    expect(screen.getByAltText(piece.slug)).toBeInTheDocument();
  });
});


test("each piece's title is displayed", () => {
  render(<ArtPieces pieces={mockPieces} />);
  mockPieces.forEach((piece) => {
    expect(screen.getByText(piece.name)).toBeInTheDocument();
  });
});

test("each piece's artist is displayed", () => {
  render(<ArtPieces pieces={mockPieces} />);
  mockPieces.forEach((piece) => {
    expect(screen.getByText(`By ${piece.artist}`)).toBeInTheDocument();
  });
});
