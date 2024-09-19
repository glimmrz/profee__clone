import Link from "next/link";
import Container from "./container";
import Logo from "./logo";
import Button from "./button";

export default function Navbar() {
  return (
    <nav className="bg-transparent absolute w-full z-50">
      <Container>
        <div className="flex justify-between">
          <div className="flex items-center gap-8">
            <div>
              {/* Logo */}
              <Logo />
            </div>
            <div className="hidden md:block">
              {/* Links */}
              <ul className="flex items-center gap-4">
                <li className="cursor-pointer text-white text-base first-letter:capitalize hover:text-primary transition-colors duration-300">
                  <Link href="#">send money</Link>
                </li>
                <li className="cursor-pointer text-white text-base first-letter:capitalize hover:text-primary transition-colors duration-300">
                  <Link href="#">media</Link>
                </li>
                <li className="cursor-pointer text-white text-base first-letter:capitalize hover:text-primary transition-colors duration-300">
                  <Link href="#">blog</Link>
                </li>
                <li className="cursor-pointer text-white text-base first-letter:capitalize hover:text-primary transition-colors duration-300">
                  <Link href="#">about us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {/* Buttons and language changer */}
            <Button variant="outline" label="log in" />
            <Button label="sign up" />
          </div>
        </div>
      </Container>
    </nav>
  );
}
