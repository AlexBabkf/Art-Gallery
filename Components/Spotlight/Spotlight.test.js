import { render, screen } from "@testing-library/react";
import Spotlight from "./index";

const mockPieces = [
  {
    slug: "slug1",
    artist: "artist1",
    name: "name1",
    imageSource: "/img1.jpg",
  },
];

test("displays art piece image", () => {
  render(<Spotlight pieces={mockPieces} />);

  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("src", mockPieces.imageSource);
  expect(image).toHaveAttribute("alt", mockPieces.slug);
});

test("displays art piece artist", () => {
  render(<Spotlight pieces={mockPieces} />);

  expect(screen.getByText(`By artist1`)).toBeInTheDocument();
});
