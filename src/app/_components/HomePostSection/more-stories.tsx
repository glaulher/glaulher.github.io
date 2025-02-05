//import { type Author } from '@/interfaces/author';
//import Link from 'next/link';
//import Avatar from '../Avatar';
//import CoverImage from '../CoverImage';
//import DateFormatter from '../date-formatter';
//
//type Props = {
//  title: string;
//  coverImage: string;
//  date: string;
//  excerpt: string;
//  author: Author;
//  slug: string;
//};
//
//export function MoreStories({
//  title,
//  coverImage,
//  date,
//  excerpt,
//  author,
//  slug,
//}: Props) {
//  return (
//    <div>
//      <div className="mb-5">
//        <CoverImage slug={slug} title={title} coverImage={coverImage} />
//      </div>
//      <h3 className="text-3xl mb-3 leading-snug">
//        <Link href={`/posts/${slug}`} className="hover:underline">
//          {title}
//        </Link>
//      </h3>
//      <div className="text-lg mb-4">
//        <DateFormatter dateString={date} />
//      </div>
//      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
//      <Avatar name={author.name} picture={author.picture} />
//    </div>
//  );
//}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import CoverImage from '@/app/_components/CoverImage';
import { PostPage } from '@/interfaces/postPage';
import Loaded from '../Loaded';

export function MoreStories({
  title,
  coverImage,
  metaDesc,
  publishedDate,
  tags,
  slug,
}: PostPage) {
  // const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLinkClick = () => {
    setLoading(true);
  };

  return (
    <>
      <section className="max-w-screen-md hover:scale-105 transition ease-linear">
        <div className="overflow-hidden  dark:border-gray-700">
          <div className=" ">
            <div className="grid grid-cols-1 py-2">
              <div className="xl:flex lg:flex md:grid sm:grid">
                <div className="pl-2">
                  <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400 ">
                    <time>
                      {new Date(publishedDate).toLocaleDateString('pt-BR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                    <div className="w-max ">
                      <CoverImage
                        title={title}
                        coverImage={coverImage}
                        slug={slug}
                        onClick={handleLinkClick}
                        width={250}
                        height={200}
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-6 px-2">
                  <Link href={`/posts/${slug}`} onClick={handleLinkClick}>
                    <h2 className="block text-2xl font-bold leading-8 tracking-tight text-sky-500 dark:text-gray-100 transition-colors duration-300 hover:text-sky-700 dark:hover:text-sky-700 hover:animate-pulse  ease-out">
                      {title}
                    </h2>
                  </Link>
                  <div className="flex flex-wrap">
                    {Array.isArray(tags) && tags.length > 0 ? (
                      tags.map((category) => (
                        <Link
                          key={category}
                          className="mr-3 text-sm font-medium uppercase text-green-500 hover:text-green-600 dark:hover:text-green-400"
                          href="/tags/programming"
                        >
                          {category}
                        </Link>
                      ))
                    ) : (
                      <div />
                    )}
                  </div>
                  <Link href={`/posts/${slug}`} onClick={handleLinkClick}>
                    <div>
                      <p className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {metaDesc}
                      </p>
                    </div>

                    <div className="mt-6">
                      <span className=" text-sky-500 dark:text-gray-100 transition-colors duration-300 hover:text-sky-700 dark:hover:text-sky-700 hover:animate-pulse  ease-out ">
                        Continue &rarr;
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Loaded loading={loading} />
      <div className="mt-6 w-full border-b-2 border-gray-200 dark:border-gray-700 border-opacity-60" />
    </>
  );
}
