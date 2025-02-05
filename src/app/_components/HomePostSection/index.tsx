//'use client';
//
//import { useMemo, useRef } from 'react';
//import { getAllPosts } from '@/lib/api';
//import { HeroPost } from './hero-post';
//import { MoreStories } from './more-stories';
//
//export const HomePostSection = () => {
//  const allPosts = getAllPosts();
//
//  const searchInputRef = useRef<HTMLInputElement>(null);
//
//  const filteredPosts = useMemo(() => {
//    const searchQuery = searchInputRef.current?.value.toLowerCase() || '';
//    return allPosts.filter((post) =>
//      post.title.toLowerCase().includes(searchQuery),
//    );
//  }, [allPosts]);
//
//  const heroPost = filteredPosts[0];
//  const morePosts = filteredPosts.slice(1);
//
//  return (
//    <>
//      {/* Input de busca */}
//      <div className="mb-6">
//        <input
//          ref={searchInputRef}
//          type="text"
//          placeholder="Busque por título..."
//          className="w-full p-2 border rounded-lg"
//          onInput={() => {
//            // Re-renderiza o componente ao interagir com o input
//            const event = new Event('input', { bubbles: true });
//            searchInputRef.current?.dispatchEvent(event);
//          }}
//        />
//      </div>
//
//      <HeroPost
//        title={heroPost.title}
//        coverImage={heroPost.coverImage}
//        publishedDate={heroPost.publishedDate}
//        slug={heroPost.slug}
//        metaDesc={heroPost.metaDesc}
//        tags={heroPost.tags}
//      />
//      <h2 className="mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight">
//        Explore Mais
//      </h2>
//      {morePosts.length > 0 &&
//        morePosts.map((post) => (
//          <MoreStories
//            key={post.slug}
//            title={post.title}
//            coverImage={post.coverImage}
//            publishedDate={post.publishedDate}
//            slug={post.slug}
//            metaDesc={post.metaDesc}
//            tags={post.tags}
//          />
//        ))}
//    </>
//  );
//};

import { fetchPosts } from './server-fetcher';
import { ClientHomePostSection } from './client-section';

export const HomePostSection = async () => {
  const allPosts = fetchPosts(); // Busca os dados no servidor

  return <ClientHomePostSection allPosts={allPosts} />;
};
