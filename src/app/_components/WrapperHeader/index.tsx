'use client';

import { Header } from '@/app/_components/WrapperHeader/header';
import ThemeToggler from '@/app/_components/ThemeToggler';

export const WrapperHeader = () => {
  return (
    <Header src="/assets/blog/menuIcons/svgviewer-output.webp">
      <ThemeToggler />
    </Header>
  );
};
