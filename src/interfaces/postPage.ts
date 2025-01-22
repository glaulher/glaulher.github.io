import { ImageProps } from './imageProps';

export type PostPage = ImageProps & {
  metaDesc: string;
  tags: string[];
  publishedDate: string;
  slug: string;
};
