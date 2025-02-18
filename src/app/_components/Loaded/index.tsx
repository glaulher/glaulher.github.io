type Props = {
  loading: boolean;
};

export default function Loaded({ loading }: Props) {
  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
}
