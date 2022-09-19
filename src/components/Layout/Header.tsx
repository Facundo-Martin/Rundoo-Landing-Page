import NavLink from '../UI/NavLink';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
import Logo from '../UI/Logo';

export default function Header() {
  return (
    <header className="py-10 wrapper section">
      <nav className="relative z-50 flex justify-between">
        <div className="flex items-center md:gap-x-12">
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
      <div className="w-full relative h-32 flex items-center">
        <div className="max-w-7xl border-none relative border-gray-200 mx-auto flex w-full justify-between items-center">
          <a href="#_" className="flex font-extrabold text-xl">
            <svg className="h-8 w-auto" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              {' '}
              <path
                d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z"
                className="ccustom"
                fill="#68DBFF"
              ></path>{' '}
              <path
                d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z"
                className="ccompli1"
                fill="#FF7917"
              ></path>{' '}
              <path
                d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z"
                className="ccompli2"
                fill="#5D2C02"
              ></path>{' '}
            </svg>
          </a>
          <div
            id="menu"
            className="absolute md:relative md:w-auto border md:rounded-none items-center rounded-xl md:py-0 py-5 md:shadow-none shadow-xl border-gray-200 md:border-transparent w-full hidden z-20 md:flex md:bg-transparent md:top-auto top-0 md:mt-0 mt-20 bg-white"
          >
            <nav className="md:space-x-6 lg:space-x-12 flex md:flex-row flex-col h-full font-medium">
              <a href="#_" className="md:w-auto w-full md:py-0 py-3 text-center">
                Features
              </a>
              <a href="#_" className="md:w-auto w-full md:py-0 py-3 text-center">
                Pricing
              </a>
              <a href="#_" className="md:w-auto w-full md:py-0 py-3 text-center">
                Contact
              </a>
            </nav>
            <div className="w-1 border-l border-gray-200 h-5 md:ml-6 lg:ml-10"></div>
            <div className="h-full font-medium flex items-center md:flex-row flex-col md:pl-6 lg:pl-10">
              <a href="#_" className="md:w-auto w-full text-center md:py-0 py-3">
                Login
              </a>
              <a
                href="#_"
                className="px-5 md:mr-0 mr-5 ml-5 text-center lg:ml-7 py-3 border-2 border-gray-900 hover:text-gray-100 hover:bg-gray-900 transition-colors ease-out duration-100 rounded-xl"
              >
                Create Account
              </a>
            </div>
          </div>
          <div
            onclick="document.getElementById('menu').classNameList.toggle('hidden')"
            className="md:hidden select-none block cursor-pointer hover:bg-gray-100 p-1.5 rounded-md"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
