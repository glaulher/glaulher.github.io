import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import { CMS_NAME } from '@/lib/constants';
import markdownToHtml from '@/lib/markdownToHtml';

import { PostBody } from '@/app/_components/PostBody';
import { PostHeader } from '@/app/_components/PostHeader';
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
        <div className="container mx-auto px-5">
          <HeaderBlog />
          <article className="mb-32">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              publishedDate={post.publishedDate}
              author={post.author}
            />
            <PostBody content={content} />
          </article>
        </div>
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
  const title = `${post.title} | Meu blog sobre tecnologia utilizando Next.js and ${CMS_NAME}.`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
    metadataBase: new URL('https://glaulher.github.io/'),
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
