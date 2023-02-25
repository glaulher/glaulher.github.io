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
      <header className="bg-slate-600 mb-8 py-4">
        <div className="container mx-auto flex justify-center">
          <Link href="/">
            <Image
              width={32}
              height={32}
              alt="Menu"
              src="/menuIcons/svgviewer-output.svg"
            />
            <h1 className="ml-9 -mb-2 -mt-10 ">
              <p className="text-neutral-200  hover:text-sky-700">
                Bem vindo ao
              </p>
              <p className="ml-2   text-neutral-200  hover:text-sky-700">
                Blog Post-it
              </p>
            </h1>
          </Link>

          <span className=" ml-auto text-neutral-200">
            <ThemeToggler />
          </span>
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
