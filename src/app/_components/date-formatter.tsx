type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  return (
    <time>
      {new Date(dateString).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })}
    </time>
  );
};

export default DateFormatter;
