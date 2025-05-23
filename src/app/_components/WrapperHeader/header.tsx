'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';
import Image from 'next/image';

type Props = {
  children: ReactNode;
  src: string;
};

export const Header = ({ children, src }: Props) => {
  return (
    <header className=" mb-3 px-6 py-4 ">
      <div className="container lg:mx-auto md:mx-auto flex justify-center">
        <Link href="/">
          <Image
            className=" -mb-4 -mt-3 "
            width={60}
            height={60}
            alt="Menu"
            src={src}
          />
        </Link>

        <Link href="/">
          <p className="text-lg ml-4 -mt-4 dark:text-neutral-200  hover:text-sky-700">
            Bem vindo ao
          </p>
          <p className="text-lg ml-8 -mb-4 dark:text-neutral-200  hover:text-sky-700">
            Blog Post-it
          </p>
        </Link>

        <div className=" ml-auto  text-neutral-200">{children}</div>
      </div>
    </header>
  );
};
