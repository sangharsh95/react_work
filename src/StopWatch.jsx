import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            startTimeRef.current = Date.now() - time;

            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    function start() {
        setIsRunning(true);
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setIsRunning(false);
        setTime(0);
    }

    function formatTime() {
        const hours = Math.floor(time / (1000 * 60 * 60));
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const seconds = Math.floor((time / 1000) % 60);
        const milliseconds = Math.floor((time % 1000) / 10);

        return (
            String(hours).padStart(2, "0") +
            ":" +
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0") +
            ":" +
            String(milliseconds).padStart(2, "0")
        );
    }

    return (
        <div className="stopwatch">
            <h1>Stopwatch</h1>
            <hr />

            <div className="display">{formatTime()}</div>

            <div className="controls">
                <button className="start-button" onClick={start}>
                    Start
                </button>

                <button className="stop-button" onClick={stop}>
                    Stop
                </button>

                <button className="reset-button" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Stopwatch;