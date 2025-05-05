type Props = {
  message?: string;
};

export default function EmptyState({ message = '표시할 항목이 없습니다.' }: Props) {
  return (
    <div className="p-6 text-center text-gray-400">
      <p>{message}</p>
    </div>
  );
}
