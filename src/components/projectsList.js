"use client";
import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "./ui/carousel";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";

export default function ProjectsList() {

    const projects = [
        {
            name: "Portfolio",
            description: "Built this portfolio website using React and Tailwind CSS, hosted on Vercel, and made the code open source for others to learn from. This website is an on-going project, and I plan on adding more features and improving the design.",
            link: "https://github.com/raghuvarapadma/portfolio",
            skills: ["JavaScript", "next.js", "Tailwind CSS"]
        },
        {
            name: "Shell",
            description: "Built a shell in C that executes commands, handles pipes, and supports basic redirection to re-learn C and improve my understanding of pointers, memory management, I/O, and process management. The implementation is mostly complete, and I plan to continue refining it. I also aim to work on more low-level projects in the future.", 
            link: "https://github.com/raghuvarapadma/shell",
            skills: ["C"]
        },
        {
            name: "Creamy Scoops Website",
            description: "Built a website for a local ice cream shop using React.js, Flask, and Firebase Realtime Database, hosted on Cloudflare and DigitalOcean. The site lets users view the menu, contact the store, and allows owners to manage the menu and promotions. I plan to make improvements to the site in the near future.",
            link: "https://creamy-scoops.com",
            skills: ["JavaScript", "react.js", "Flask", "Firebase Realtime Database", "Cloudflare", "DigitalOcean"]
        },
        {
            name: "MiniJava Compilier",
            description: "Built a MiniJava compiler for COMP 520 (Compilers), where MiniJava is a simplified subset of Java. The compiler syntactically parses the code to ensure correct syntax, generates an abstract syntax tree (AST), performs context analysis to validate the program, and then generates machine-level code. The compiler uses a separate program called mJAM to interpret the machine-level code.",
            link: "https://github.com/raghuvarapadma/miniJava_Compiler",
            skills: ["Java"]
        },
        {
            name: "SAP-8",
            description: "Followed Ben Eater's 8-Bit Computer tutorial to build a simple 8-bit computer using logic gates and flip flops. Unfortunately, due to time constraints, I was unable to complete the project and was only able to build the clock module, ALU, RAM and program counter (still need to build the output and control logic modules). I learned a lot about how computers work at a low level and circuit theory/electronics, and I plan to continue working on this project in the future.",
            link: false,
            skills: ["Digital Logic", "Electronics"]
        },

    ];

    return (
        <div className="my-3 flex justify-center items-center">
            <Carousel className="w-[80%] max-w-xs sm:w-full sm:max-w-xl">
                <CarouselContent>
                    {projects.map((project, index) => (
                        <CarouselItem key={index}>
                            <div className="w-full h-full">
                                <Card className="w-full h-full">
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            {project.name}
                                        </CardTitle>
                                        {project.link && (
                                            <CardDescription className="text-sm flex flex-wrap">
                                                <Link className="break-all" href="https://github.com/raghuvarapadma/portfolio">{project.link}</Link>
                                            </CardDescription>
                                        )}
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-md">
                                            {project.description}
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex flex-wrap gap-2">
                                            {project.skills.map((skill, index) => (
                                                <Badge key={index} className="text-xs">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    );
}