import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import NavLink from '../UI/NavLink';
import Image from 'next/image';
import Rundoo from '../../images/Rundoo.svg';
import MobileNavigation from './MobileNavigation';

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
          <div className="hidden md:flex md:gap-x-6">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#team">Team</NavLink>
            <NavLink href="#FAQs">FAQs</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
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
