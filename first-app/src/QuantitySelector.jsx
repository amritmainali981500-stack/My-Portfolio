import './index.css';
function QuantitySelector({ qty, setQty }) {
  return (
    <div className="flex items-center  mt-4 mb-3 gap-1">
      <button
        onClick={() => setQty((prev) => Math.max(1, prev - 1))}
        className="rounded-md border px-3 py-1"
      >
        −
      </button>

      <span className="min-w-6 text-center">{qty}</span>

      <button
        onClick={() => setQty((prev) => prev + 1)}
        className="rounded-lg items-center border px-3 py-1"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;