// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })
import { Pagination } from '@/components/Pagination'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export type BlogFrontMatter = {
  title: string
  socialImage: string
  metaDesc: string
  publishedDate: string
  tags: string[]
}

export type BlogLayoutProps = {
  children: ReactNode
  frontMatter: BlogFrontMatter
  wordCount: number
  readingTime: string
}

export type BlogPostProps = {
  slug: string
  siteTitle: string
  frontmatter: BlogFrontMatter
  markdownBody: any
  wordCount: number
  readingTime: string
}

export type BlogPostsProps = {
  posts: BlogPostProps[]
}

export interface BlogProps extends BlogPostsProps {
  title: string
  description: string
}

export async function getStaticProps() {
  const files = fs.readdirSync('src/posts')

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`src/posts/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)
    return {
      slug,
      frontmatter,
    }
  })
  return {
    props: {
      posts,
    },
  }
}

export default function Home({ posts }: BlogPostsProps) {
  const heroPost = posts[posts.length - 1]
  const morePosts = posts

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-1 p-4 md:p-0">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
          {heroPost && (
            <>
              <div
                key={heroPost.slug}
                className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
              >
                <Link href={`/post/${heroPost.slug}`}>
                  <Image
                    width={750}
                    height={340}
                    alt={heroPost.frontmatter.title}
                    src={`/${heroPost.frontmatter.socialImage}`}
                  />
                  <h1 className="p-4">{heroPost.frontmatter.title}</h1>
                </Link>
              </div>
              <div
                key={heroPost.slug}
                className="border border-gray-200 m-2 p-4 rounded-xl shadow-lg overflow-hidden flex flex-col"
              >
                <span className="font-bold xl:mt12 xl:mb-4 lg:mt-8  lg:mb-4 lg:text-2xl md:text-lg sm:text-base">
                  {heroPost.frontmatter.title}
                </span>
                <span className="ml-4 mt-4 lg:text-xl md:text-base sm:text-sm">
                  {`${heroPost.frontmatter.metaDesc}...`}
                </span>

                <div className="justify-items-end mt-auto ml-auto">
                  <Link href={`/post/${heroPost.slug}`}>
                    <span className="hover:text-sky-700 text-lg">
                      Continue &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {morePosts.length > 0 &&
            morePosts
              .reverse()
              .slice(1)
              .map(({ slug, frontmatter }) => (
                <div
                  key={slug}
                  className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
                >
                  <Link href={`/post/${slug}`}>
                    <Image
                      width={650}
                      height={340}
                      alt={frontmatter.title}
                      src={`/${frontmatter.socialImage}`}
                    />
                    <h1 className="p-4">{frontmatter.title}</h1>
                  </Link>
                </div>
              ))}
        </div>
      </div>
      <Pagination />
    </>
  )
}
