import { PostPage } from './postPage';
import { type Author } from './author';

export type Post = PostPage & {
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
