'use client';
import { FaBookOpen, FaHome } from 'react-icons/fa';
import { FaFire } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { useRef, useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import { useOnClickOutSide } from '../../lib/hook';
import Logo from './logo';
import { Link } from 'react-router-dom';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutSide(menuRef, () => setIsMenuOpen(false));

  return (
    <>
      {/* desktop */}
      <header className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-[-1] sticky top-0 h-[4rem] lg:h-screen z-50 bg-theme-dark">
        <div className="flex p-2 justify-center items-center">
          <div className="flex gap-2 justify-between lg:flex-col w-full">
            <div className="w-[40px] h-[40px] bg-theme-medium overflow-hidden rounded-s-md">
              <Logo />
            </div>
            {NavLinks.map((link) => (
              <Link to={link.to} key={link.to}>
                <Tooltip
                  placement="right"
                  id={link.tooltip}
                  overlay={<span className="">{link.tooltip}</span>}
                >
                  <div
                    aria-describedby={link.tooltip}
                    className="hidden lg:flex w-[40px] h-[40px] bg-theme-medium items-center justify-center rounded-md hover:bg-theme-light transition "
                  >
                    {link.icon}
                  </div>
                </Tooltip>
              </Link>
            ))}
            <div className="lg:hidden">
              {/* Navbar */}
              <div className="relative">
                {/* NavbarMenuToggle */}
                <div
                  className="w-[40px] h-[40px] flex bg-theme-medium items-center justify-center rounded-md hover:bg-theme-light transition"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  ref={menuRef}
                >
                  {isMenuOpen ? (
                    <IoMdClose color="#FF6AD3" size="32" />
                  ) : (
                    <CgMenuGridO color="#FF6AD3" size="32" />
                  )}
                </div>
                {/* NavbarMenu and links */}
                {isMenuOpen && (
                  <div className="absolute top-[4rem] right-0 w-[200px] bg-theme-dark p-2 rounded-md shadow-lg">
                    {NavLinks.map((link) => (
                      <Link to={link.to} key={link.to}>
                        <div className="flex gap-2 p-2 hover:bg-theme-light rounded-md transition">
                          <div>{link.icon}</div>
                          <p>{link.tooltip}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

const NavLinks = [
  {
    icon: (
      <FaHome
        color="#AF6AF9"
        size="20"
        data-tooltip-id="home"
        data-tooltip-content="home"
      />
    ),
    tooltip: 'home',
    to: '/',
  },
  {
    icon: (
      <FaFire
        color="#AF6AF9"
        size="20"
        data-tooltip-id="category"
        data-tooltip-content="category"
      />
    ),
    tooltip: 'category',
    to: '/category',
  },
  {
    icon: (
      <IoSearch
        color="#AF6AF9"
        size="20"
        data-tooltip-id="search"
        data-tooltip-content="search"
      />
    ),
    tooltip: 'search',
    to: '/#search',
  },
  {
    icon: (
      <FaBookOpen
        color="#AF6AF9"
        size="20"
        data-tooltip-id="blog"
        data-tooltip-content="blog"
      />
    ),
    tooltip: 'blog',
    to: '/blog',
  },
];
