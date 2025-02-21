"use client";
import Nav from "@/components/nav";
import {binaryEffect} from "../../components/binaryEffect";

export default function CV() {
    const originalCVText = "Curriculum Vitae";
    const [cvText, setCVText] = binaryEffect(originalCVText);

    return (
        <div>
            <Nav></Nav>
            <div className="font-code text-3xl my-3">
                <div className="inline-block hover:text-[#097969]" onMouseEnter={() => setCVText(true)} onMouseLeave={() => setCVText(false)}>
                    {cvText}
                </div>
            </div>
            <div className="my-3 flex flex-col">
                <div className="text-2xl">
                    Education
                </div>
                <div className="flex flex-row justify-between">
                    <div>
                        <div>
                            University of North Carolina at Chapel Hill
                        </div>
                        <div className="text-md">
                            Bachelor of Science in Computer Science, Minor in Statistics
                        </div>
                    </div>
                    <div>
                        2019-2023
                    </div>
                </div>
            </div>
            <div className="text-2xl my-3">
                Work
            </div>
            <div className="text-2xl my-3">
                Projects
            </div>
        </div>
    )
}