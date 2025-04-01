import { useRef, useState, useEffect } from "react";

export default function UniversalCounter() {
    const [count, setCount] = useState(0);
    const timeRef = useRef(null);

    function handleStart() {
        if (!timeRef.current) {
            timeRef.current = setInterval(() => {
                setCount(prevCount => prevCount + 1);  // ✅ Correct: Uses latest value
            }, 1000);
        }
    }

    function handleStop() {
        clearInterval(timeRef.current);
        timeRef.current = null;
    }

    function handleReset() {
        handleStop();
        setCount(0);
    }

    useEffect(() => {
        console.log("Updated Count:", count);  // ✅ Always logs the latest count
    }, [count]);

    return (
        <div>
            <h1>Timer: {count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}
