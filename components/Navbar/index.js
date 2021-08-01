import Link from "next/link";
import { Header } from "./styles";

export default function Navbar() {
  return (
    <>
      <Header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Posts</a>
          </Link>
        </nav>
      </Header>
    </>
  );
}
