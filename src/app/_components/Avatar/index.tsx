import Image from 'next/image';
import { type Author } from '@/interfaces/author';

const Avatar = ({ name, picture }: Author) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        width={48}
        height={48}
        className=" rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
