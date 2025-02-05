// import Container from '@/app/_components/container';
// import { HeroPost } from '@/app/_components/hero-post';
// import { Intro } from '@/app/_components/intro';
// import { MoreStories } from '@/app/_components/more-stories';
//import { getAllPosts } from '@/lib/api';

import { HomePostSection } from '@/app/_components/HomePostSection';

export default function Index() {
  return (
    <main>
      <article className="container flex flex-col pt-6 sm:mx-2 md:mx-auto flex-1">
        <HomePostSection />
      </article>
    </main>
  );
}
