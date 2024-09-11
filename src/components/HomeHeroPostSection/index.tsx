import React from 'react';
import { HeroPost } from './hero-post';
import { getAllPosts } from '../../lib/api';

export const HomeHeroPostSection = () => {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];
  return (
    <HeroPost
      title={heroPost.title}
      socialImage={heroPost.socialImage}
      publishedDate={heroPost.publishedDate}
      // author={heroPost.author}
      slug={heroPost.slug}
      metaDesc={heroPost.metaDesc}
      tags={heroPost.tags}
    />
  );
};
