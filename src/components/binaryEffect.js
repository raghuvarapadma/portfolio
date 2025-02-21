"use client";
import { useState, useEffect } from "react";

export function binaryEffect(originalText) {
    const [text, setText] = useState(originalText);
    const [hoveringOverText, setHoveringOverText] = useState(false);

    useEffect(() => {
        let interval;

        if (hoveringOverText) {
            interval = setInterval(() => {
                setText(
                    originalText
                        .split("")
                        .map(() => (Math.random() > 0.5 ? "1" : "0"))
                        .join("")
                );
            }, 100);
        } else {
            setText(originalText);
        }

        return () => clearInterval(interval);
    }, [hoveringOverText]);

    return [text, setHoveringOverText]
};