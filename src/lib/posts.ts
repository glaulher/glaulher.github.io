import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type BlogFrontMatter = {
  title: string;
  socialImage: string;
  description: string;
  publishedDate: string;
  tags: string[];
};

export type PostProps = {
  frontmatter: BlogFrontMatter;
  content: string;
};

export async function getStaticPaths() {
  const files = fs.readdirSync('src/posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const fileName = fs.readFileSync(`src/posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
};
