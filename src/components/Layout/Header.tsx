import NavLink from '../UI/NavLink';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
import Logo from '../UI/Logo';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-10 wrapper section">
      <nav className="relative z-50 flex justify-between">
        <div className="w-full flex items-center justify-between">
          <Logo />
          <DesktopNavigation />
        </div>
        <div className="flex items-center gap-x-5 md:gap-x-8 flex-none ml-6">
          <div className="hidden md:block font-medium">
            <NavLink href="/login">Sign in</NavLink>
          </div>
          <Link href="/get-started">
            <a className="px-4 py-2 lg:py-3 rounded-xl bg-blue-600 text-white font-semibold text-[.9rem]">
              Get started <span className="hidden lg:inline">today</span>
            </a>
          </Link>
          <MobileNavigation />
        </div>
      </nav>
    </header>
  );
}
