"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
    const originalLogoText = "raghu.dev";
    const homePageOriginalText = "home";
    const cvPageOriginalText = "cv";
    const blogPageOriginalText = "blog";
    const hobbiesPageOriginalText = "hobbies";

    const [logoText, setLogoText] = useState(originalLogoText);
    const [homePageText, setHomePageText] = useState(homePageOriginalText);
    const [cvPageText, setCvPageText] = useState(cvPageOriginalText);
    const [blogPageText, setBlogPageText] = useState(blogPageOriginalText);
    const [hobbiesPageText, setHobbiesPageText] = useState(hobbiesPageOriginalText);
    const [hoveringOverLogo, setHoveringOverLogo] = useState(false);
    const [hoveringOverHomePage, setHoveringOverHomePage] = useState(false);
    const [hoveringOverCvPage, setHoveringOverCvPage] = useState(false);
    const [hoveringOverBlogPage, setHoveringOverBlogPage] = useState(false);
    const [hoveringOverHobbiesPage, setHoveringOverHobbiesPage] = useState(false);

    useEffect(() => {
        let interval;

        if (hoveringOverLogo) {
            interval = setInterval(() => {
                setLogoText(
                  originalLogoText
                    .split("")
                    .map(() => (Math.random() > 0.5 ? "1" : "0"))
                    .join("")
                );
              }, 100);
        } else {
            setLogoText(originalLogoText);
        }

        if (hoveringOverHomePage) {
            interval = setInterval(() => {
                setHomePageText(
                  homePageOriginalText
                    .split("")
                    .map(() => (Math.random() > 0.5 ? "1" : "0"))
                    .join("")
                );
              }, 100);
        }
        else {
            setHomePageText(homePageOriginalText);
        }
        
        if (hoveringOverCvPage) {
            interval = setInterval(() => {
                setCvPageText(
                  cvPageOriginalText
                    .split("")
                    .map(() => (Math.random() > 0.5 ? "1" : "0"))
                    .join("")
                );
              }, 100);
        }
        else {
            setCvPageText(cvPageOriginalText);
        }

        if (hoveringOverBlogPage) {
            interval = setInterval(() => {
                setBlogPageText(
                  blogPageOriginalText
                    .split("")
                    .map(() => (Math.random() > 0.5 ? "1" : "0"))
                    .join("")
                );
              }, 100);
        }
        else {
            setBlogPageText(blogPageOriginalText);
        }

        if (hoveringOverHobbiesPage) {
            interval = setInterval(() => {
                setHobbiesPageText(
                  hobbiesPageOriginalText
                    .split("")
                    .map(() => (Math.random() > 0.5 ? "1" : "0"))
                    .join("")
                );
              }, 100);
        }
        else {
            setHobbiesPageText(hobbiesPageOriginalText);
        }

        return () => clearInterval(interval);
    }, [hoveringOverLogo, hoveringOverHomePage, hoveringOverCvPage, hoveringOverBlogPage, hoveringOverHobbiesPage]);

    return (
        <div className="font-code my-8">
            <div className="flex items-center justify-between">
                <div className="flex-1 flex items-center justify-start transition-all">
                    <div onMouseEnter={() => setHoveringOverLogo(true)} onMouseLeave={() => setHoveringOverLogo(false)}>
                        {logoText}
                    </div>
                </div>
                <nav className="flex-1 flex items-center justify-end">
                    <div className="flex gap-7 justify-end">
                        <Link href="/" className="flex-1 flex items-center justify-center" onMouseEnter={() => setHoveringOverHomePage(true)} onMouseLeave={() => setHoveringOverHomePage(false)}>
                            {homePageText}
                        </Link>
                        <Link href="/cv" className="flex-1 flex items-center justify-center" onMouseEnter={() => setHoveringOverCvPage(true)} onMouseLeave={() => setHoveringOverCvPage(false)}>
                            {cvPageText}
                        </Link>
                        <Link href="/blog" className="flex-1 flex items-center justify-center" onMouseEnter={() => setHoveringOverBlogPage(true)} onMouseLeave={() => setHoveringOverBlogPage(false)}>
                            {blogPageText}
                        </Link>
                        <Link href="/hobbies" className="flex-1 flex items-center justify-center" onMouseEnter={() => setHoveringOverHobbiesPage(true)} onMouseLeave={() => setHoveringOverHobbiesPage(false)}>
                            {hobbiesPageText}
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
  }  