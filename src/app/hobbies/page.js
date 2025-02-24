"use client";
import React, { useState, useEffect } from "react";
import Nav from "@/components/nav";
import { binaryEffect } from "@/components/binaryEffect";

export default function Hobbies() {
    const originalHobbiesText = "Hobbies";
    const [hobbiesText, setHobbiesText] = binaryEffect(originalHobbiesText);
    const [isVisible, setIsVisible] = useState(false);
        
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`transition-all duration-500 ease-out ${isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'}`}>
            <Nav></Nav>
            <div className="text-3xl my-3">
                <div className="font-code inline-block hover:text-[#097969]" onMouseEnter={() => setHobbiesText(true)} onMouseLeave={() => setHobbiesText(false)}>
                    {hobbiesText}
                </div>
            </div>
            <div className="border-t-2 border-[#097969] my-6"></div>
            <div className="flex flex-col justify-center items-center h-full w-full">
                <div className="text-xl font-code my-3">
                    This page is coming soon! In the meantime, enjoy these pictures from my recent ski trip!
                </div>
                <div className="my-3 flex flex-col gap-4">
                    <div className="w-96 h-96">
                        <img src="/ski-1.jpg" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-96 h-96">
                        <img src="/ski-2.jpg" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-96 h-96">
                        <img src="/ski-3.jpg" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-96 h-96">
                        <img src="/ski-4.jpg" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </div>
    );
}