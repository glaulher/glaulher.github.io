'>p>puse client';

import Link from 'next/link';
import { useState } from 'react';
import CoverImage from '@/app/_components/CoverImage';
import { PostPage } from '@/interfaces/postPage';
import Loaded from '../Loaded';
import DateFormatter from '../date-formatter';

export function HeroPost({
  title,
  coverImage,
  metaDesc,
  publishedDate,
  tags,
  slug,
}: PostPage) {
  const [loading, setLoading] = useState(false);

  const handleLinkClick = () => {
    setLoading(true);
  };

  return (
    <>
      <section className="max-w-screen-md hover:scale-105 transition ease-linear">
        <div className="overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
          <div className=" bg-gray-300 dark:bg-slate-800">
            <div className="grid grid-cols-1 py-2">
              <div className="xl:flex lg:flex md:grid sm:grid">
                <div className="pl-2">
                  <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400 ">
                    <DateFormatter dateString={publishedDate!} />
                    <div className="w-max  max-w-[280px] max-h-[230px]">
                      <CoverImage
                        title={title}
                        coverImage={coverImage}
                        slug={slug}
                        onClick={handleLinkClick}
                        width={280}
                        height={230}
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
      <div className="mt-6 " />
    </>
  );
}
