import Link from 'next/link';
import NavLink from '../UI/NavLink';
import Image from 'next/image';
import Rundoo from '../../images/Rundoo.svg';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

export default function Header() {
  return (
    <header className="py-10 wrapper section">
      <nav className="relative z-50 flex justify-between">
        <div className="flex items-center md:gap-x-12">
          <Link href="/" aria-label="Home">
            <a>
              <div className="flex items-center bg-black px-4 rounded-sm">
                <h1>R</h1>
                <Image src={Rundoo} width={80} height={50} />
              </div>
            </a>
          </Link>
          <DesktopNavigation />
        </div>
        <div className="flex items-center gap-x-5 md:gap-x-8">
          <div className="hidden md:block">
            <NavLink href="/login">Sign in</NavLink>
          </div>
          <button color="blue">
            <span>
              Get started <span className="hidden lg:inline">today</span>
            </span>
          </button>
          <div className="-mr-1 md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </nav>
    </header>
  );
}
