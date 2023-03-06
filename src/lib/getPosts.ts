import fs from 'fs'
import matter from 'gray-matter'

export async function getPosts() {
  const files = fs.readdirSync('src/posts')

  const posts = files
    .map((fileName) => {
      const slug = fileName.replace('.md', '')
      const readFile = fs.readFileSync(`src/posts/${fileName}`, 'utf-8')
      const { data: frontmatter } = matter(readFile)
      frontmatter.date = new Date(frontmatter.date).toISOString()
      return {
        slug,
        frontmatter,
      }
    }) // ordena os posts pelo frontmatter.date
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    )

  return posts
}
