import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/counterSlice";

function Example() {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <p className="mb-3">conteggio: {count}</p>
            <button
            className="mr-3"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <button
            className="mr-3"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    )
}

export default Example