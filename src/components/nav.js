"use client";
import Link from "next/link";
import {binaryEffect} from "./binaryEffect";

export default function Nav() {

    const originalLogoText = "raghu.dev";
    // const originalHomeText = "home";
    const originalCVText = "cv";
    const originalBlogText = "blog";
    const originalHobbiesText = "hobbies";
    const [logoText, setHoveringOverLogo] = binaryEffect(originalLogoText);
    // const [homePageText, setHoveringOverHomePage] = binaryEffect(originalHomeText);
    const [cvPageText, setHoveringOverCvPage] = binaryEffect(originalCVText);
    const [blogPageText, setHoveringOverBlogPage] = binaryEffect(originalBlogText);
    const [hobbiesPageText, setHoveringOverHobbiesPage] = binaryEffect(originalHobbiesText);

    return (
        <div className="font-code my-5 sm:my-8">
            <div className="flex items-center justify-between">
                <div className="flex-1 flex items-center justify-start transition-all">
                    <Link href="/" className="hover:text-[#097969]" onMouseEnter={() => setHoveringOverLogo(true)} onMouseLeave={() => setHoveringOverLogo(false)}>
                        {logoText}
                    </Link>
                </div>
                <nav className="flex-1 flex items-center justify-end">
                    <div className="flex gap-7 justify-end">
                        {/* <Link href="/" className="hover:text-[#097969] flex-1 flex items-center justify-center" onMouseEnter={() => setHoveringOverHomePage(true)} onMouseLeave={() => setHoveringOverHomePage(false)}>
                            {homePageText}
                        </Link> */}
                        <Link href="/cv" className="hover:text-[#097969] flex-1 flex items-center justify-center" onMouseEnter={() => setHoveringOverCvPage(true)} onMouseLeave={() => setHoveringOverCvPage(false)}>
                            {cvPageText}
                        </Link>
                        <Link href="/blog" className="hover:text-[#097969] flex-1 flex items-center justify-center" onMouseEnter={() => setHoveringOverBlogPage(true)} onMouseLeave={() => setHoveringOverBlogPage(false)}>
                            {blogPageText}
                        </Link>
                        <Link href="/hobbies" className="hover:text-[#097969] flex-1 flex items-center justify-center" onMouseEnter={() => setHoveringOverHobbiesPage(true)} onMouseLeave={() => setHoveringOverHobbiesPage(false)}>
                            {hobbiesPageText}
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
  }  