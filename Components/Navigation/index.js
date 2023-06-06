import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <Link href="/">Homepage</Link>
      <Link href="/art-pieces">Art Pieces</Link>
    </div>
  );
}
