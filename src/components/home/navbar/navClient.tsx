'use client';
import React, { use, useCallback, useEffect, useRef, useState } from 'react';
import { LogOut, Newspaper, NotebookPen, PencilLineIcon, Settings, User, UserCog } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { useTheme } from 'next-themes';
import DarkModeToggle from '../DarkMode';
import { usePathname } from 'next/navigation';

const menuLink = [
  {
    id: 1,
    name: 'Trang chủ',
    href: '/',
  },
  {
    id: 2,
    name: 'Liên hệ',
    href: '/contact',
  },
  {
    id: 3,
    name: 'Về S-BLOG',
    href: '/about',
  },
  {
    id: 4,
    name: 'Tìm kiếm',
    href: '/search',
  },
];

const userMenuItems = [
  { id: 1, icon: User, label: 'Trang cá nhân', href: '#' },
  { id: 2, icon: Newspaper, label: 'Bài viết của tôi', href: '#' },
  { id: 3, icon: NotebookPen, label: 'Nháp của tôi', href: '#' },
  { id: 4, icon: Settings, label: 'Tùy chỉnh tài khoản', href: '#' },
];

const NavClient = ({ user }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownAvatar, setDropdownAvatar] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setDropdownAvatar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, dropdownAvatar]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleDropdownAvatar = useCallback(() => {
    setDropdownAvatar(prev => !prev);
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="relative items-center space-x-3 rtl:space-x-reverse h-12 w-36">
          <Image
            src={mounted ? (theme === 'dark' ? '/whiteLogo.png' : '/blackLogo.png') : '/whiteLogo.png'}
            alt="logo"
            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            fill
            priority={true}
            sizes="( max-width: 768px) 100vw, ( max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {!user ? (
            <Link href="/auth/login" className={`font-medium ${pathName === '/auth/login' ? 'text-blue-500' : ''} hover:text-blue-500 px-4 py-2 border rounded-full`}>
              Đăng nhập
            </Link>
          ) : (
            <>
              <Link href="/write" className="font-medium md:mr-4 flex items-center justify-center gap-1">
                <PencilLineIcon className="mr-2 h-5 w-5" />
                Viết bài
              </Link>
              <div className="relative" ref={menuRef}>
                {/* AVATAR */}
                <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" onClick={toggleDropdownAvatar}>
                  <Image className="rounded-full" src={user?.image!} alt="user photo" width={40} height={40} />
                </button>
                {/* <!--MENU USER--> */}
                {dropdownAvatar && (
                  <div
                    className={`absolute right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 
            transition-transform duration-1000 ease-in-out transform origin-top-right ${dropdownAvatar ? 'scale-900 opacity-500' : 'scale-700 opacity-0'}`}
                    id="user-dropdown"
                  >
                    <div className="px-4 py-3">
                      <span className="block text-sm text-gray-900 dark:text-white">{user?.name}</span>
                      <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      {user?.role === 'admin' && (
                        <li>
                          <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            <UserCog size={16} />
                            Dashboard
                          </Link>
                        </li>
                      )}
                      {userMenuItems.map(item => (
                        <li key={item.id}>
                          <Link href={item.href} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            <item.icon size={16} />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <span onClick={() => signOut()} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                          <LogOut size={16} />
                          Đăng xuất
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
          {/* BURGER */}
          <button
            id="burger-button"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        {/* Link Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-user">
          <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menuLink.map(item => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`${
                    pathName === item.href ? 'text-blue-700 dark:text-blue-700' : 'text-gray-900 dark:text-white'
                  } block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <DarkModeToggle />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(NavClient);
