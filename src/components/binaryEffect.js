"use client";
import { useState, useEffect } from "react";

export function binaryEffect(originalText) {
    const [text, setText] = useState(null);
    const [hoveringOverText, setHoveringOverText] = useState(false);

    useEffect(() => {
        setText(originalText);
    }, [originalText]);

    useEffect(() => {
        if (text === null) return;
        
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
    }, [hoveringOverText, originalText, text]);

    return [text !== null ? text : originalText, setHoveringOverText];
};