"use client";

import { useState, useRef } from "react";

const StartAndStopManuallyTimerHrMinSec = function () {
    const timer = useRef(null);

    const [totalSec, setTotalSec] = useState(0);

    const startTimer = function () {
        // Don't start another timer if one is already running
        if (timer.current !== null) {
            return;
        }

        timer.current = setInterval(() => {
            setTotalSec((prev) => prev + 1);
        }, 1000);
    };

    const stopTimer = function () {
        clearInterval(timer.current);
        timer.current = null;
    };

    const hr = Math.floor(totalSec / 3600);
    const min = Math.floor((totalSec % 3600) / 60);
    const sec = totalSec % 60;

    const formatTime = (value) => {
        return String(value).padStart(2, "0");
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f4f4f5",
            }}
        >
            <div
                style={{
                    width: "360px",
                    padding: "40px",
                    borderRadius: "20px",
                    background: "white",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        marginBottom: "25px",
                        fontSize: "24px",
                    }}
                >
                    Stopwatch
                </h2>

                <div
                    style={{
                        fontSize: "48px",
                        fontWeight: "bold",
                        fontFamily: "monospace",
                        marginBottom: "30px",
                        letterSpacing: "4px",
                    }}
                >
                    {formatTime(hr)}:
                    {formatTime(min)}:
                    {formatTime(sec)}
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "12px",
                    }}
                >
                    <button
                        onClick={startTimer}
                        style={{
                            padding: "12px 24px",
                            border: "none",
                            borderRadius: "8px",
                            background: "#18181b",
                            color: "white",
                            fontSize: "16px",
                            cursor: "pointer",
                        }}
                    >
                        Start
                    </button>

                    <button
                        onClick={stopTimer}
                        style={{
                            padding: "12px 24px",
                            border: "1px solid #d4d4d8",
                            borderRadius: "8px",
                            background: "white",
                            color: "#18181b",
                            fontSize: "16px",
                            cursor: "pointer",
                        }}
                    >
                        Stop
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartAndStopManuallyTimerHrMinSec;