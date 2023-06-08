import { render, screen } from "@testing-library/react";
import Navigation from "./index";

test("There is a link labeled Homepage that directs to the Homepage", () => {
  render(<Navigation />);
  const link = screen.getByRole("link", { name: "Homepage" });
  expect(link).toHaveAttribute("href", "/");
});

test("There is a link labeled Art Pieces that directs to the Art Pieces page", () => {
  render(<Navigation />);
  const link = screen.getByRole("link", { name: "Art Pieces" });
  expect(link).toHaveAttribute("href", "/art-pieces");
});

test("There is a link labeled Favorites that directs to the Favorites page", () => {
  render(<Navigation />);
  const link = screen.getByRole("link", { name: "Favorites" });
  expect(link).toHaveAttribute("href", "/favorites");
});
