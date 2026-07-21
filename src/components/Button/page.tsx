export default function Button({ onClick }: { onClick: () => void }) {
  return (
    <button className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600" onClick={onClick}>
      Click Me
    </button>
  );
}