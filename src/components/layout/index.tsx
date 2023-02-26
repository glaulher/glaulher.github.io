import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import ThemeToggler from '../ThemeToggler'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-600 mb-8 px-6 py-4 ">
        <div className="container lg:mx-auto md:mx-auto flex justify-center">
          <Link href="/">
            <Image
              className=" -mb-2 -mt-4 "
              width={60}
              height={60}
              alt="Menu"
              src="/menuIcons/svgviewer-output.svg"
            />
          </Link>

          <Link href="/">
            <p className="text-lg ml-4 -mt-4 text-neutral-200  hover:text-sky-700">
              Bem vindo ao
            </p>
            <p className="text-lg ml-8 -mb-4 text-neutral-200  hover:text-sky-700">
              Blog Post-it
            </p>
          </Link>

          <div className=" ml-auto  text-neutral-200">
            <ThemeToggler />
          </div>
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="bg-slate-700  mt-8 py-4">
        <div className="container mx-auto flex justify-center">
          <span className="mx-auto text-neutral-200">
            &copy; 2022 DailyDevTips
          </span>
        </div>
      </footer>
    </div>
  )
}
