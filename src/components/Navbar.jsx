import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#3B1F11] fixed top-0 left-0 z-10 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-[10vh] items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#eaeae3] hover:text-[#393938]"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Link href="/" className="flex shrink-0 items-center">
              <img className="h-[90px] w-[90px]" src="/images/logo_usando.png" alt="Mix Arretado" />
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink href="/" label="Home" />
                <NavLink href="#sobre" label="Mix Arretado" />
                <NavLink href="#cardapio-index" label="Cardápio" />
                <NavLink href="#contato-mix" label="Contato" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <MobileNavLink href="/" label="Home" />
            <MobileNavLink href="#sobre" label="Mix Arretado" />
            <MobileNavLink href="#cardapio-index" label="Cardápio" />
            <MobileNavLink href="#contato-mix" label="Contato" />
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ href, label }) => (
  <Link 
    href={href} 
    className="rounded-md px-3 py-2 text-base self-center text-center font-medium text-gray-300 transition delay-100 duration-150 ease-in hover:scale-105 hover:underline hover:text-[orange]"
  >
    {label}
  </Link>
);

const MobileNavLink = ({ href, label }) => (
  <Link 
    href={href} 
    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-[#eaeae3] hover:text-[#393938]"
  >
    {label}
  </Link>
);