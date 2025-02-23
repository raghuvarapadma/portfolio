"use client";
import React, { useState } from "react";
import Nav from "@/components/nav";
import {binaryEffect} from "../../components/binaryEffect";
import CourseList from "@/components/courseList";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import WorkExperience from "@/components/workExperience";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"


export default function CV() {
    const originalCVText = "Curriculum Vitae";
    const originalEducation = "Education";
    const originalWork = "Work Experience";
    const originalProjects = "Projects";
    // const originalSkills = "Skills";

    const [cvText, setCVText] = binaryEffect(originalCVText);
    const [educationText, setEducationText] = binaryEffect(originalEducation);
    const [workText, setWorkText] = binaryEffect(originalWork);
    const [projectsText, setProjectsText] = binaryEffect(originalProjects);
    // const [skillsText, setSkillsText] = binaryEffect(originalSkills);

    const [showSection, setShowSection] = useState(false);

    const handleSectionToggle = () => {
        setShowSection(!showSection);
    }


    return (
        <div>
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
                <div className="flex flex-row justify-between">
                    <div>
                        <div className="text-lg">
                            University of North Carolina at Chapel Hill
                        </div>
                        <div className="text-md my-.5">
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
                                <div >ACM @ UNC</div>
                                <div>Founder and President</div>
                                <div>2020-2022</div>
                            </div>
                            <div className="text-md mb-2 border-l border-[#097969] pl-2 pr-2">
                                <div >Kappa Theta Pi</div>
                                <div>Member</div>
                                <div>2021-2023</div>
                            </div>
                            <div className="text-md mb-2 border-l border-[#097969] pl-2 pr-2">
                                <div >CS + SG</div>
                                <div>Member</div>
                                <div>2021-2022</div>
                            </div>
                            <div className="text-md mb-2 border-l border-[#097969] pl-2 pr-2">
                                <div >Intramural Sports</div>
                                <div>Member</div>
                                <div>2021-2023</div>
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
                            {showSection ? "Resume Mode" : "Overview Mode"}
                        </Label>
                        <Switch id="mode" onClick={() => handleSectionToggle()}/>
                    </div>
                </div>
                <WorkExperience mode={showSection}/>
            </div>
            <div className="text-2xl my-6">
                <div className="text-2xl font-code" >
                    <div className="inline-block hover:text-[#097969]" onMouseEnter={() => setProjectsText(true)} onMouseLeave={() => setProjectsText(false)}>
                        {projectsText}
                    </div>
                </div>
            </div>
            {/* <div className="text-2xl my-6">
                <div className="text-2xl font-code" >
                    <div className="inline-block hover:text-[#097969]" onMouseEnter={() => setSkillsText(true)} onMouseLeave={() => setSkillsText(false)}>
                        {skillsText}
                    </div>
                </div>
                <div>
                    <div className="text-sm my-2">
                        <Badge className="mr-1 mb-1">Python</Badge>
                        <Badge className="mr-1 mb-1">Java</Badge>
                        <Badge className="mr-1 mb-1">C</Badge>
                        <Badge className="mr-1 mb-1">JavaScript</Badge>
                        <Badge className="mr-1 mb-1">HTML</Badge>
                        <Badge className="mr-1 mb-1">CSS</Badge>
                        <Badge className="mr-1 mb-1">SQL</Badge>
                        <Badge className="mr-1 mb-1">React.js</Badge>
                        <Badge className="mr-1 mb-1">lit.dev</Badge>
                        <Badge className="mr-1 mb-1">Next.js</Badge>
                        <Badge className="mr-1 mb-1">Tailwind CSS</Badge>
                        <Badge className="mr-1 mb-1">Node.js</Badge>
                        <Badge className="mr-1 mb-1">Spring Boot</Badge>
                        <Badge className="mr-1 mb-1">Flask</Badge>
                        <Badge className="mr-1 mb-1">PostgreSQL</Badge>
                        <Badge className="mr-1 mb-1">Firebase</Badge>
                        <Badge className="mr-1 mb-1">AWS</Badge>
                    </div>
                </div>
            </div> */}

        </div>
    )
}