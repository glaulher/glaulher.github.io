import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: (tag: string) => void;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={() => onClick?.(children!.toString())}
      className="text-sm px-2 py-1 text-white  bg-green-500   rounded-[5px] hover:bg-green-600 active:bg-green-700 transition-colors w-24"
    >
      {children}
    </button>
  );
}
