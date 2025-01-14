import { type Author } from './author';

export type Post = {
  slug: string;
  title: string;
  socialImage: string;
  metaDesc: string;
  publishedDate: string;
  tags: string[];
  content: string;
};
