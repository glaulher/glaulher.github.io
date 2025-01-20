import React from 'react';
import { getAllPosts } from '@/lib/api';
import { HeroPost } from '@/app/_components/HomeHeroPostSection/hero-post';

export const HomeHeroPostSection = () => {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];
  return (
    <HeroPost
      title={heroPost.title}
      coverImage={heroPost.coverImage}
      publishedDate={heroPost.publishedDate}
      slug={heroPost.slug}
      metaDesc={heroPost.metaDesc}
      tags={heroPost.tags}
    />
  );
};
