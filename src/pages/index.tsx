import { ChangeEvent, ReactNode, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Pagination from '@/components/Pagination'
import { getPosts } from '../lib/getPosts'

export type BlogFrontMatter = {
  title: string
  socialImage: string
  metaDesc: string
  date: string
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

const PageSize = 4

export async function getStaticProps() {
  const posts = await getPosts()

  return {
    props: {
      posts,
    },
  }
}

export default function Home({ posts }: BlogPostsProps) {
  const [searchValue, setSearchValue] = useState<string>('')
  const [effect, setEffect] = useState('')

  const draftPost = posts[0]
  const morePosts = posts
    .slice(1)
    .filter((post) =>
      post.frontmatter.title.toLowerCase().includes(searchValue.toLowerCase()),
    )

  const [currentPage, setCurrentPage] = useState(1)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (Number(currentPage) - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize

    return morePosts.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, morePosts])

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-1 p-4 md:p-0">
        <div className="relative flex items-center mr-2 justify-end ml-auto">
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchValue}
            onChange={handleSearchInputChange}
            className="pl-2  pr-7 py-2 dark:bg-gray-700  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          <span className="absolute  right-1  z-10  hover:text-sky-700 material-symbols-outlined">
            search
          </span>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
          {currentPage < 2 && !searchValue && (
            <>
              <div
                key={draftPost.slug}
                className={`border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col ${
                  effect === draftPost.frontmatter.title && 'animate-ping'
                }`}
              >
                <Link
                  onClick={() => {
                    setEffect(draftPost.frontmatter.title)
                    setTimeout(() => {
                      window.location.href = `/post/${draftPost.slug}` // redireciona após um atraso de 1 segundo
                    }, 100)
                  }}
                  onAnimationEnd={() => setEffect('')}
                  href={''}
                >
                  <Image
                    width={750}
                    height={340}
                    alt={draftPost.frontmatter.title}
                    src={`/${draftPost.frontmatter.socialImage}`}
                    priority={true}
                    className="hover:animate-pulse transition-all duration-200 ease-out"
                  />
                  <div className="flex justify-between ">
                    <span className="pl-4 py-4 text-base">
                      {draftPost.frontmatter.title}
                    </span>
                    {/* <span className="pr-4 pt-5 text-xs">
                      {new Date(draftPost.frontmatter.date).toLocaleDateString(
                        'pt-BR',
                      )}
                    </span> */}
                  </div>
                </Link>
              </div>
              <div
                key={draftPost.frontmatter.date}
                className="border border-gray-200 m-2 p-4 rounded-xl shadow-lg overflow-hidden flex flex-col "
              >
                <span className="font-bold xl:mt12 xl:mb-4 lg:mt-8  lg:mb-4 lg:text-2xl md:text-lg sm:text-base">
                  {draftPost.frontmatter.title}
                </span>
                <span className="ml-4 mt-4 lg:text-xl md:text-base sm:text-sm">
                  {`${draftPost.frontmatter.metaDesc}...`}
                </span>

                <div className="justify-items-end mt-auto flex justify-between">
                  <span className="mr-4 text-lg">
                    {new Date(draftPost.frontmatter.date).toLocaleDateString(
                      'pt-BR',
                    )}
                  </span>
                  <Link className="" href={`/post/${draftPost.slug}`}>
                    <span className="hover:text-sky-700 ml-4 text-xl hover:animate-pulse transition-all duration-200 ease-out">
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
            currentTableData.map(({ slug, frontmatter }) => (
              <div
                key={slug}
                className={`border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col  ${
                  effect === frontmatter.title && 'animate-ping'
                }`}
              >
                <Link
                  href={''}
                  onClick={() => {
                    setEffect(frontmatter.title)
                    setTimeout(() => {
                      window.location.href = `/post/${slug}` // redireciona após um atraso
                      setTimeout(() => {
                        setEffect('')
                      }, 300)
                    }, 100)
                  }}
                  onAnimationEnd={() => setEffect('')}
                >
                  <Image
                    width={650}
                    height={340}
                    alt={frontmatter.title}
                    src={`/${frontmatter.socialImage}`}
                    className="hover:animate-pulse transition-all duration-200 ease-out"
                  />
                  <h1 className="p-4">{frontmatter.title}</h1>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div className=" mt-48">
        <Pagination
          currentPage={Number(currentPage)}
          totalCount={posts.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  )
}
