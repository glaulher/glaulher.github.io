import Avatar from '@/app/_components/Avatar';
import CoverImage from '../CoverImage';
import DateFormatter from '../date-formatter';
import { type Post } from '@/interfaces/post';

type Props = Partial<Post> & {};

export function PostHeader({
  title,
  coverImage,
  publishedDate,
  author,
}: Props) {
  return (
    <>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>

      <div className="hidden md:block md:mb-12">
        <Avatar name={author!.name} picture={author!.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 flex items-center justify-center">
        <CoverImage
          title={title!}
          coverImage={coverImage!}
          width={800}
          height={800}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author!.name} picture={author!.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={publishedDate!} />
        </div>
      </div>
    </>
  );
}
