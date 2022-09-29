import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
import Logo from '../UI/Logo';
import ComingSoonModal from '../ComingSoonModal';

export default function Header() {
  return (
    <header className="py-10 wrapper section global-style">
      <nav className="relative z-50 flex justify-between">
        <div className="w-full flex items-center justify-between">
          <Logo />
          <DesktopNavigation />
        </div>
        <div className="flex items-center gap-x-5 md:gap-x-8 flex-none ml-6">
          <ComingSoonModal button={<div className="hidden md:block font-medium">Sign in</div>} />

          <ComingSoonModal
            button={
              <div className="px-4 py-2 lg:py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[.9rem]">
                Get started <span className="hidden lg:inline">today</span>
              </div>
            }
          />
          <MobileNavigation />
        </div>
      </nav>
    </header>
  );
}
