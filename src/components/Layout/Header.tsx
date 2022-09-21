import NavLink from '../UI/NavLink';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
import Logo from '../UI/Logo';

export default function Header() {
  return (
    <header className="py-10 wrapper section">
      <nav className="relative z-50 flex justify-between">
        <div className="w-full flex items-center justify-between">
          <Logo />

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
