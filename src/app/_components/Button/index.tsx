import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="text-sm px-2 py-1 text-white  bg-green-500   rounded-lg hover:bg-green-600 active:bg-green-700 transition-colors"
    >
      {children}
    </button>
  );
}
