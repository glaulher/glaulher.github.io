import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-20 mt-8">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
      </h2>

      <Link href="/">
        <p className="text-sm dark:text-neutral-200 hover:text-sky-700 dark:hover:text-sky-700 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Voltar
        </p>
      </Link>
    </div>
  );
};

export default Header;
