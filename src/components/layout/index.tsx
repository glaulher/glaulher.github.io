import Link from 'next/link'
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
          <Link href="/">🏡</Link>
          <span className="mx-auto text-neutral-200">Welcome to my blog</span>
          <ThemeToggler />
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
