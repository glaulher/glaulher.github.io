import { type Author } from './author';

export type Post = {
  metaDesc: string;
  tags: string[];

  slug: string;
  title: string;
  publishedDate: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
