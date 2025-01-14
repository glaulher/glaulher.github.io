// import md from 'markdown-it'

import ReactMarkdown from 'react-markdown';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// import { getStaticPaths, getStaticProps, PostProps } from '../../lib/posts';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = post.content;

  return (
    <div className="prose dark:prose-invert mx-auto">
      <Link href="/">
        <p className="absolute right-10  text-sm  mt-2 dark:text-neutral-200 hover:text-sky-700  dark:hover:text-sky-700 items-center flex">
          {/* Ícone de seta para a esquerda */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 mr-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Voltar
        </p>
      </Link>
      <div className="relative flex  justify-center ml-1 mr-24">
        <span className="text-xl font-bold md:text-3xl">{post.title}</span>
      </div>
      {/* <div
        className="mx-1"
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      /> */}

      <div className="mx-1">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <SyntaxHighlighter language={match[1]} style={coldarkDark}>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

// export function generateMetadata({ params }: Params): Metadata {
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     return notFound();
//   }

//   const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

//   return {
//     openGraph: {
//       title,
//       images: [post.ogImage.url],
//     },
//   };
// }
