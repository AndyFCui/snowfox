import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: '首页', href: '/' },
  { name: '活动', href: '/events' },
  { name: '会员', href: '/membership' },
  { name: '关于我们', href: '/about' },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-[136px] justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/images/snowFox_logo.jpg" 
                  alt="SnowFox Logo" 
                  className="h-24"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-12 sm:flex sm:space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="inline-flex items-center px-4 pt-1 text-xl font-medium text-gray-900 hover:text-primary-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              to="/login"
              className="btn btn-secondary mr-6 text-lg px-8 py-3"
            >
              登录
            </Link>
            <Link
              to="/register"
              className="btn btn-primary text-lg px-8 py-3"
            >
              注册
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">打开主菜单</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* 移动端菜单 */}
      <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="border-t border-gray-200 pb-3 pt-4">
          <div className="space-y-1">
            <Link
              to="/login"
              className="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              登录
            </Link>
            <Link
              to="/register"
              className="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              注册
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 