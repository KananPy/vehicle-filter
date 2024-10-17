export default function Button({ text, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled
          ? 'bg-gray-300 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600'
      } text-white font-bold py-2 px-4 rounded-lg w-full`}
    >
      {text}
    </button>
  );
}
