import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

export default function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="h-screen">
      <div className="flex gap-3 justify-center align-middle mt-[200px]">
        <button
          onClick={() => handleIncrement(1)}
          className="btn text-white px-5 py-3 font-bold rounded bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => handleIncrement(5)}
          className="btn text-white px-5 py-3 font-bold rounded bg-blue-600"
        >
          Increment By 5
        </button>
        <div>
          <h4 className="text-2xl inline-block text-black bg-gray-300 px-5 py-3 rounded">
            {count}
          </h4>
        </div>
        <button
          onClick={handleDecrement}
          className="btn text-white px-5 py-3 font-bold rounded bg-blue-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
