import Link from 'next/link';
import Image from 'next/image';
import { ImageProps } from '@/interfaces/imageProps';

type Props = ImageProps & {
  slug?: string;
  onClick?: () => void;
  width: number;
  height: number;
};

const slugHover = 'hover:shadow-lg transition-shadow duration-200';

const CoverImage = ({
  title,
  coverImage,
  slug,
  onClick,
  width,
  height,
}: Props) => {
  const image = (
    <Image
      src={coverImage}
      // loading="lazy"
      alt={`Cover Image for ${title}`}
      //className={`object-contain object-center rounded-md shadow-sm w-full max-w-[${width}] ${slug ? slugHover : ''}`}
      width={width}
      height={height}
    //decoding="async"
    //data-nimg="1"
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title} onClick={onClick}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
