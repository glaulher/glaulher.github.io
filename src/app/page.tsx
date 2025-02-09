import { HomePostSection } from './_components/HomePostSection';
import { getAllPosts } from '@/lib/api';

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <article className="container flex flex-col pt-6 sm:mx-2 md:mx-auto flex-1">
        <HomePostSection allPosts={allPosts} />
      </article>
    </main>
  );
}
