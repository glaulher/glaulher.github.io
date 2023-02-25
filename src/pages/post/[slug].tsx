import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
  slug: string
}

type BlogFrontMatter = {
  title: string
  socialImage: string
  description: string
  publishedDate: string
  tags: string[]
}

type PostProps = {
  frontmatter: BlogFrontMatter
  content: string
}

export async function getStaticPaths() {
  const files = fs.readdirSync('src/posts')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams

  const fileName = fs.readFileSync(`src/posts/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}

export default function PostPage({ frontmatter, content }: PostProps) {
  return (
    <div className="prose dark:prose-invert mx-auto">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  )
}
