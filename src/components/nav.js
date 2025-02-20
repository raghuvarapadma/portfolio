"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
    const originalText = "raghu.dev";
    const [logoText, setLogoText] = useState(originalText);
    const [hoveringOverLogo, setHoveringOverLogo] = useState(false);

    useEffect(() => {
        let interval;

        if (hoveringOverLogo) {
            interval = setInterval(() => {
                setLogoText(
                  originalText
                    .split("")
                    .map(() => (Math.random() > 0.5 ? "1" : "0"))
                    .join("")
                );
              }, 100);
        } else {
            setLogoText(originalText);
        }

        return () => clearInterval(interval);
    }, [hoveringOverLogo])

    return (
        <div className="font-code my-4">
            <div className="flex items-center justify-between">
                <div className="flex-1 flex items-center justify-start cursor-pointer transition-all">
                    <div onMouseEnter={() => setHoveringOverLogo(true)} onMouseLeave={() => setHoveringOverLogo(false)}>
                        {logoText}
                    </div>
                </div>
                <nav className="flex-1 flex items-center justify-end">
                    <div className="flex gap-7 justify-end">
                        <Link href="/" className="flex-1 flex items-center justify-center">
                            home
                        </Link>
                        <Link href="/cv" className="flex-1 flex items-center justify-center">
                            cv
                        </Link>
                        <Link href="/blog" className="flex-1 flex items-center justify-center">
                            blog
                        </Link>
                        <Link href="/hobbies" className="flex-1 flex items-center justify-center">
                            hobbies
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
  }  