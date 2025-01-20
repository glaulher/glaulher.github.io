// import Container from '@/app/_components/container';
// import { HeroPost } from '@/app/_components/hero-post';
// import { Intro } from '@/app/_components/intro';
// import { MoreStories } from '@/app/_components/more-stories';
// import { getAllPosts } from '@/lib/api';

import { Title } from '@/app/_components/Title';
import { HomeHeroPostSection } from '@/app/_components/HomeHeroPostSection';

export default function Index() {
  // const allPosts = getAllPosts();

  // const heroPost = allPosts[0];

  // const morePosts = allPosts.slice(1);

  return (
    <main>
      <article className="container flex flex-col pt-6  mx-auto flex-1">
        <Title />
        <HomeHeroPostSection />
      </article>
    </main>
  );
}
