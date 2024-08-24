'use client';
import { LogOut, Newspaper, NotebookPen, Settings, ShieldHalf, User, UserCog } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const MenuAvatar = ({ user }: any) => {
  const [dropdownAvatar, setDropdownAvatar] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  return (
    <div className="relative" ref={menuRef}>
      {/* AVATAR */}
      <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" onClick={() => setDropdownAvatar(!dropdownAvatar)}>
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
                <Link href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  <UserCog size={16} />
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                <User size={16} />
                Trang cá nhân
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                <Newspaper size={16} />
                Bài viết của tôi
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                <NotebookPen size={16} />
                Nháp của tôi
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                <Settings size={16} />
                Tùy chỉnh tài khoản
              </Link>
            </li>
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
  );
};

export default MenuAvatar;
