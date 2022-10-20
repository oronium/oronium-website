export default function Button({ data }) {
  return (
    <button className="button p-3 text-white font-medium outline-none px-14 text-xl rounded-full">
      {data}
    </button>
  );
}
