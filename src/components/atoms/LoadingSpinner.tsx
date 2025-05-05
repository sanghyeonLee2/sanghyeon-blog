export default function LoadingSpinner() {
  return (
    <div className="flex-center p-8 text-gray-500">
      <svg className="animate-spin w-6 h-6 mr-2" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
      </svg>
      로딩 중...
    </div>
  );
}
