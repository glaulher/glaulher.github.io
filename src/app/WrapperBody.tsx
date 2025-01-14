'use client';

import React, { ReactNode } from 'react';
import { Header } from '../components/Header';
import ThemeToggler from '../components/ThemeToggler';

type Props = {
  children: ReactNode;
};

export const WrapperBody = ({ children }: Props) => {
  return (
    <>
      <Header>
        <ThemeToggler />
      </Header>

      <article className="container flex flex-col pt-6  mx-auto flex-1">
        {children}
      </article>
    </>
  );
};
