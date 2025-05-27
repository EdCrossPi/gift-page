import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav-bg">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">A&E</label>
      <ul className="text">
        <li>
          <Link href="https://wedding-eduebia.vercel.app/">Início</Link>
        </li>
      </ul>
    </nav>
  );
}
