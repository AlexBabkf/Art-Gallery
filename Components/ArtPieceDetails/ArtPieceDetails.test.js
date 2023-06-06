import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "./index";

const mockPieces = {
  slug: "slug1",
  artist: "artist1",
  name: "name1",
  imageSource: "/img1.jpg",
  year: "year1",
  genre: "genre1",
};

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

test("displays art piece image", () => {
  render(<ArtPieceDetails imageSource={mockPieces.imageSource} />);

  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("src", mockPieces.imageSource);
});

test("displays the title", () => {
  render(<ArtPieceDetails name={mockPieces.name} />);

  expect(screen.getByText(`Title: ${mockPieces.name}`)).toBeInTheDocument();
});

test("displays the artist", () => {
  render(<ArtPieceDetails artist={mockPieces.artist} />);

  expect(screen.getByText(`Artist: ${mockPieces.artist}`)).toBeInTheDocument();
});

test("displays the year", () => {
  render(<ArtPieceDetails year={mockPieces.year} />);

  expect(screen.getByText(`Year: ${mockPieces.year}`)).toBeInTheDocument();
});

test("displays the genre", () => {
  render(<ArtPieceDetails genre={mockPieces.genre} />);

  expect(screen.getByText(`Genre: ${mockPieces.genre}`)).toBeInTheDocument();
});
