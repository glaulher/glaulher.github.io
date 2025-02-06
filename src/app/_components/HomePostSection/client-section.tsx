'use client';

import { useState } from 'react';
import { HeroPost } from './hero-post';
import { MoreStories } from './more-stories';
import { Title } from '../Title';

interface Post {
  title: string;
  coverImage: string;
  publishedDate: string;
  slug: string;
  metaDesc: string;
  tags: string[];
}

export const ClientHomePostSection = ({ allPosts }: { allPosts: Post[] }) => {
  // const allPosts = getAllPosts();

  const [searchValue, setSearchValue] = useState('');

  const heroPost = allPosts[0];
  const morePosts = allPosts
    .slice(1)
    .filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

  return (
    <>
      <div className="flex flex-col mb-4 sm:flex-row md:justify-between md:items-start sm:justify-center mx-2 sm:mx-auto sm:items-start w-full">
        <div className="flex flex-col">
          <Title />
        </div>

        <div className="relative flex items-center pr-2 sm:pr-0 sm:mr-2 justify-end ml-auto w-full sm:w-96 md:w-auto ">
          <div className="relative flex-1 mr-2 sm:mr-auto ">
            <input
              type="text"
              placeholder="Pesquisar"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pl-2 pr-7 py-2 dark:bg-gray-700  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <span className="absolute  right-1 top-1/2 -translate-y-1/2  z-10  hover:text-sky-700 material-symbols-outlined">
              search
            </span>
          </div>
        </div>
      </div>

      <div className="mx-2 sm:mx-0">
        {!searchValue && (
          <>
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              publishedDate={heroPost.publishedDate}
              slug={heroPost.slug}
              metaDesc={heroPost.metaDesc}
              tags={heroPost.tags}
            />
            <h2 className="mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight">
              Explore Mais
            </h2>
          </>
        )}
        {morePosts.length > 0 &&
          morePosts.map((post) => (
            <MoreStories
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              publishedDate={post.publishedDate}
              slug={post.slug}
              metaDesc={post.metaDesc}
              tags={post.tags}
            />
          ))}
      </div>
    </>
  );
};
