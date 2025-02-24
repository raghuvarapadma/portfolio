"use client";
import React, { useState, useEffect } from "react";
import Nav from "@/components/nav";
import {binaryEffect} from "../../components/binaryEffect";
import CourseList from "@/components/courseList";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import WorkExperience from "@/components/workExperience";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import ProjectsList from "@/components/projectsList";


export default function CV() {
    const originalCVText = "Curriculum Vitae";
    const originalEducation = "Education";
    const originalWork = "Work Experience";
    const originalProjects = "Projects";

    const [cvText, setCVText] = binaryEffect(originalCVText);
    const [educationText, setEducationText] = binaryEffect(originalEducation);
    const [workText, setWorkText] = binaryEffect(originalWork);
    const [projectsText, setProjectsText] = binaryEffect(originalProjects);

    const [showSection, setShowSection] = useState(false);

    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleSectionToggle = () => {
        setShowSection(!showSection);
    }


    return (
        <div className={`transition-all duration-500 ease-out ${isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'}`}>
            <Nav></Nav>
            <div className="text-3xl my-3">
                <div className="font-code inline-block hover:text-[#097969]" onMouseEnter={() => setCVText(true)} onMouseLeave={() => setCVText(false)}>
                    {cvText}
                </div>
            </div>
            <div className="border-t-2 border-[#097969] my-6"></div>
            <div className="my-3 flex flex-col">
                <div className="text-2xl font-code" >
                    <div className="inline-block hover:text-[#097969]" onMouseEnter={() => setEducationText(true)} onMouseLeave={() => setEducationText(false)}>
                        {educationText}
                    </div>
                </div>
                <div className="mt-1 flex flex-row justify-between">
                    <div>
                        <div className="text-lg">
                            <strong>University of North Carolina at Chapel Hill</strong>
                        </div>
                        <div className="text-md">
                            Bachelor of Science in Computer Science, Minor in Statistics
                        </div>
                        <div className="text-md">
                            2019-2023
                        </div>
                    </div>
                </div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-md">Courses</AccordionTrigger>
                        <AccordionContent>
                            <CourseList></CourseList>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-md">Involvement</AccordionTrigger>
                        <AccordionContent>
                            <div className="text-md mb-2 border-l border-[#097969] pl-2 pr-2">
                                <div><strong>ACM @ UNC</strong></div>
                                <div>Founder and President</div>
                                <div className="text-sm mb-1">2020-2022</div>
                                <div>
                                Launched and led an ACM chapter at UNC, recruiting 150+ members and building relationships with 5+ companies, the student body, and the CS department. Organized 10+ events, including a HackNC kickoff and a talk with Fred Brooks (Turing Award Winner) and Henry Fuchs (ACM Fellow), attracting 150+ participants.
                                </div>
                            </div>
                            <div className="text-md mb-2 border-l border-[#097969] pl-2 pr-2">
                                <div><strong>Kappa Theta Pi</strong></div>
                                <div>Member</div>
                                <div className="text-sm mb-1">2021-2023</div>
                                <div>
                                Kappa Theta Pi is a co-ed professional computer science fraternity at UNC that focuses on fostering a community of passionate students dedicated to technology and leadership. It offers opportunities for networking, skill development, and collaboration through events, workshops, and mentorship programs.
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="my-3 flex flex-col">
                <div className="text-2xl font-code flex flex-row justify-between" >
                    <div className="inline-block hover:text-[#097969]" onMouseEnter={() => setWorkText(true)} onMouseLeave={() => setWorkText(false)}>
                        {workText}
                    </div>
                    <div className="font-normal flex items-center justify-center space-x-2">
                        <Label htmlFor="mode">
                            {showSection ? "Resume" : "Overview"}
                        </Label>
                        <Switch id="mode" onClick={() => handleSectionToggle()}/>
                    </div>
                </div>
                <WorkExperience mode={showSection}/>
            </div>
            <div className="my-3 flex flex-col">
                <div className="text-2xl font-code mb-1" >
                    <div className="inline-block hover:text-[#097969]" onMouseEnter={() => setProjectsText(true)} onMouseLeave={() => setProjectsText(false)}>
                        {projectsText}
                    </div>
                </div>
                <ProjectsList />
            </div>
        </div>
    )
}