"use client";
import React, {useState, useEffect} from "react";
import Nav from "@/components/nav";
import {binaryEffect} from "../../components/binaryEffect";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Blog() {
    const blogPageOriginalText = "Blog";

    const [blogText, setBlogText] = binaryEffect(blogPageOriginalText);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`transition-all duration-500 ease-out ${isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'}`}>
            <Nav />
            <div className="text-3xl my-3">
                <div className="font-code inline-block hover:text-[#097969]" onMouseEnter={() => setBlogText(true)} onMouseLeave={() => setBlogText(false)}>
                    {blogText}
                </div>
            </div>
            <div className="border-t-2 border-[#097969] my-6"></div>
            <div className="my-3 flex flex-col">
                <Card className="my-2 h-full flex flex-col bg-transparent p-4">
                    <Link href="https://raghupadma.substack.com/p/expanding-my-world-through-words">
                        <div className="text-lg font-code">
                            Expanding My World Through Words
                        </div>
                        <div className="text-md font-code">
                            March 2, 2025
                        </div>
                    </Link>
                </Card>
            </div>
        </div>
    );
}
