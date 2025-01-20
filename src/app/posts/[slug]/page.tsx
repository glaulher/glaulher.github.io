// // import { Metadata } from "next";
// // import { notFound } from "next/navigation";
// // import { getAllPosts, getPostBySlug } from "@/lib/api";
// // import { CMS_NAME } from "@/lib/constants";
// // import markdownToHtml from "@/lib/markdownToHtml";
// // import Alert from "@/app/_components/alert";
// // import Container from "@/app/_components/container";
// // import Header from "@/app/_components/header";
// // import { PostBody } from "@/app/_components/post-body";
// // import { PostHeader } from "@/app/_components/post-header";

// // export default async function Post(props: Params) {
// //   const params = await props.params;
// //   const post = getPostBySlug(params.slug);

// //   if (!post) {
// //     return notFound();
// //   }

// //   const content = await markdownToHtml(post.content || "");

// //   return (
// //     <main>
// //       <Alert preview={post.preview} />
// //       <Container>
// //         <Header />
// //         <article className="mb-32">
// //           <PostHeader
// //             title={post.title}
// //             coverImage={post.coverImage}
// //             date={post.date}
// //             author={post.author}
// //           />
// //           <PostBody content={content} />
// //         </article>
// //       </Container>
// //     </main>
// //   );
// // }

// // type Params = {
// //   params: Promise<{
// //     slug: string;
// //   }>;
// // };

// // export async function generateMetadata(props: Params): Promise<Metadata> {
// //   const params = await props.params;
// //   const post = getPostBySlug(params.slug);

// //   if (!post) {
// //     return notFound();
// //   }

// //   const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

// //   return {
// //     title,
// //     openGraph: {
// //       title,
// //       images: [post.ogImage.url],
// //     },
// //   };
// // }

// // export async function generateStaticParams() {
// //   const posts = getAllPosts();

// //   return posts.map((post) => ({
// //     slug: post.slug,
// //   }));
// // }

// // import md from 'markdown-it'

// import ReactMarkdown from 'react-markdown';
// import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import remarkGfm from 'remark-gfm';
// import { getAllPosts, getPostBySlug } from '@/lib/api';
// import { notFound } from 'next/navigation';
// import Link from 'next/link';

// // import { getStaticPaths, getStaticProps, PostProps } from '../../lib/posts';

// type Params = {
//   params: {
//     slug: string;
//   };
// };

// export async function generateStaticParams() {
//   const posts = await getAllPosts();

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export default async function PostPage({ params }: Params) {
//   const { slug } = await Promise.resolve(params);

//   if (!slug) {
//     return notFound();
//   }

//   const post = await getPostBySlug(params.slug);

//   if (!post) {
//     return notFound();
//   }

//   const content = post.content;

//   return (
//     <div className="prose dark:prose-invert mx-auto">
//       <Link href="/">
//         <p className="absolute right-10  text-sm  mt-2 dark:text-neutral-200 hover:text-sky-700  dark:hover:text-sky-700 items-center flex">
//           {/* Ícone de seta para a esquerda */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-4 h-4 mr-0"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//           Voltar
//         </p>
//       </Link>
//       <div className="relative flex  justify-center ml-1 mr-24">
//         <span className="text-xl font-bold md:text-3xl">{post.title}</span>
//       </div>
//       {/* <div
//         className="mx-1"
//         dangerouslySetInnerHTML={{ __html: md().render(content) }}
//       /> */}

//       <div className="mx-1">
//         <ReactMarkdown
//           remarkPlugins={[remarkGfm]}
//           components={{
//             code({ className, children, ...props }) {
//               const match = /language-(\w+)/.exec(className || '');
//               return match ? (
//                 <SyntaxHighlighter language={match[1]} style={coldarkDark}>
//                   {String(children).replace(/\n$/, '')}
//                 </SyntaxHighlighter>
//               ) : (
//                 <code className={className} {...props}>
//                   {children}
//                 </code>
//               );
//             },
//           }}
//         >
//           {content}
//         </ReactMarkdown>
//       </div>
//     </div>
//   );
// }

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '@/lib/constants';
import markdownToHtml from '@/lib/markdownToHtml';
import Container from '@/app/_components/container';

import { PostBody } from '@/app/_components/post-body';
import { PostHeader } from '@/app/_components/post-header';
import HeaderBlog from '@/app/_components/HeaderBlog/HeaderBlog';

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || '');

  return (
    <>
      <main>
        <Container>
          <HeaderBlog />
          <article className="mb-32">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.publishedDate}
              author={post.author}
            />
            <PostBody content={content} />
          </article>
        </Container>
      </main>
    </>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }
  const metadataBase = new URL(HOME_OG_IMAGE_URL);
  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    metadataBase,
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
