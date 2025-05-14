type Props = {
  text: string;
  onClick?: () => void;
};

export default function Button({ text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
    >
      {text}
    </button>
  );
}
