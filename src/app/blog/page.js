"use client";
import { useEffect, useState } from "react";
import {binaryEffect} from "../../components/binaryEffect";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export default function Blog() {
    const blogPageOriginalText = "Blog";

    const [blogText, setBlogText] = binaryEffect(blogPageOriginalText);
    const [isVisible, setIsVisible] = useState(false);
    const [blogData, setBlogData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const getBlog = await fetch('/api/blog'); 
            const data = await getBlog.json();
            setBlogData(data.blogPostsResponse)
            console.log(data.blogPostsResponse)
            setLoading(false);
          };
      
          fetchData();
          setIsVisible(true);
    }, []);

    return (
        <div className={`transition-all duration-500 ease-out ${isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'}`}>
            <div>
                <div className="text-3xl my-3">
                    <div className="font-code inline-block hover:text-[#097969]" onMouseEnter={() => setBlogText(true)} onMouseLeave={() => setBlogText(false)}>
                        {blogText}
                    </div>
                </div>
                <div className="border-t-2 border-[#097969] my-6"></div>
                {loading && 
                    <div className="flex flex-col justify-center items-center">
                        <Loader2 className={cn('my-28 h-16 w-16 text-primary/60 animate-spin')}/>
                    </div>
                }
                {blogData && blogData.map((blog, index) => (
                    <div className="flex flex-col" key={index}>
                        <Card className="my-2 h-full flex flex-col bg-transparent p-4">
                            <Link href={blog.link}>
                                <div className="text-lg font-code">
                                    {blog.title}
                                </div>
                                <div className="text-md font-code mb-1">
                                    {blog.description}
                                </div>
                                <div className="text-sm font-code">
                                    {(new Date(blog.date)).toLocaleDateString()}
                                </div>
                            </Link>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
