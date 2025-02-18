'use client';

import Link from 'next/link';
import { useState } from 'react';
import CoverImage from '@/app/_components/CoverImage';
import { PostPage } from '@/interfaces/postPage';
import Loaded from '../Loaded';
import DateFormatter from '../date-formatter';

type Props = PostPage & {
  onClickAction: (tag: string) => void;
};

export function MoreStories({
  title,
  coverImage,
  metaDesc,
  publishedDate,
  tags,
  slug,
  onClickAction,
}: Props) {
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
                    <DateFormatter dateString={publishedDate!} />
                    <div className="w-max  max-w-[250px] max-h-[200px]">
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
                        <button
                          key={category}
                          className="mr-3 text-sm font-medium uppercase text-green-500 hover:text-green-600 dark:hover:text-green-400"
                          onClick={() => onClickAction?.(category)}
                        >
                          {category}
                        </button>
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
