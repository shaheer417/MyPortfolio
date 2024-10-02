import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <ul className="header-buttons">
        <Link href={"/Home"} className="home">
          <li>Home</li>
        </Link>
        <Link href={"/Aboutme"} className="about">
          <li>About </li>
        </Link>
        <Link href={"/Contactme"} className="contact">
          <li>Contact </li>
        </Link>
      </ul>
    </div>
  );
}
