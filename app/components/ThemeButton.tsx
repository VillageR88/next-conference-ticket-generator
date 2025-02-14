'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import iconMoon from '../../public/assets/images/icon-moon.svg';
import iconSun from '../../public/assets/images/icon-sun.svg';

const ThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
    document.documentElement.classList.remove('hidden');
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    const newTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="flex min-h-[44px] w-full max-w-[44px] items-center justify-center rounded-[8px] bg-[#F2F2F7] [transition:background-color_300ms] dark:bg-[#2A2B37]"
    >
      <Image
        className={`absolute [transition:opacity_300ms] ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}
        src={iconMoon as string}
        alt="theme icon"
      />
      <Image
        className={`absolute [transition:opacity_300ms] ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
        src={iconSun as string}
        alt="theme icon"
      />
    </button>
  );
};

export default ThemeButton;
