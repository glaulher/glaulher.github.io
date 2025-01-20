'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  title: string;
  coverImage: string;
  metaDesc: string;
  publishedDate: string;
  tags: string[];
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  metaDesc,
  publishedDate,
  tags,
  slug,
}: Props) {
  // const router = useRouter();

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
                <Link href={`/posts/${slug}`} onClick={handleLinkClick}>
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
                        <Image
                          alt={title}
                          loading="lazy"
                          width={350} // largura fixa
                          height={300} // altura fixa
                          decoding="async"
                          data-nimg="1"
                          className="object-contain object-center rounded-md" // removido 'object-contain'
                          src={coverImage}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
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

      {/* Loading Spinner */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="mt-6 w-full border-b-2 border-gray-200 dark:border-gray-700 border-opacity-60" />
    </>
  );
}
