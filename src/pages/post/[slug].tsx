import md from 'markdown-it'
import Link from 'next/link'

import { getStaticPaths, getStaticProps, PostProps } from '../../lib/posts'

export default function PostPage({ frontmatter, content }: PostProps) {
  return (
    <div className="prose dark:prose-invert mx-auto">
      <Link href="/">
        <p className="absolute right-10  text-sm  mt-2 dark:text-neutral-200 hover:text-sky-700  dark:hover:text-sky-700">
          Voltar &crarr;
        </p>
      </Link>
      <div className="relative flex  justify-center ml-1 mr-24">
        <span className="text-xl font-bold md:text-3xl">
          {frontmatter.title}
        </span>
      </div>
      <div
        className="mx-1"
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      />
    </div>
  )
}
export { getStaticPaths, getStaticProps }
