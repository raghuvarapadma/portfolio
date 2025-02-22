"use client";
import Nav from "@/components/nav";
import {binaryEffect} from "../../components/binaryEffect";
import CourseList from "@/components/courseList";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import WorkExperience from "@/components/workExperience";

export default function CV() {
    const originalCVText = "Curriculum Vitae";
    const originalEducation = "Education";
    const originalWork = "Work Experience";
    const originalProjects = "Projects";
    const originalSkills = "Skills";

    const [cvText, setCVText] = binaryEffect(originalCVText);
    const [educationText, setEducationText] = binaryEffect(originalEducation);
    const [workText, setWorkText] = binaryEffect(originalWork);
    const [projectsText, setProjectsText] = binaryEffect(originalProjects);
    const [skillsText, setSkillsText] = binaryEffect(originalSkills);


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
                        <div className="text-sm">
                        2019-2023
                    </div>
                    </div>
                </div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-sm">Courses</AccordionTrigger>
                        <AccordionContent>
                            <CourseList></CourseList>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-sm">Involvement</AccordionTrigger>
                        <AccordionContent>
                            <div className="text-xs mb-2 border-l border-[#097969] pl-2 pr-2">
                                <div className="font-bold">ACM @ UNC</div>
                                <div>Founder and President</div>
                                <div>2020-2022</div>
                            </div>
                            <div className="text-xs mb-2 border-l border-[#097969] pl-2 pr-2">
                                <div className="font-bold">Kappa Theta Pi</div>
                                <div>Member</div>
                                <div>2021-2023</div>
                            </div>
                            <div className="text-xs mb-2 border-l border-[#097969] pl-2 pr-2">
                                <div className="font-bold">CS + SG</div>
                                <div>Member</div>
                                <div>2021-2022</div>
                            </div>
                            <div className="text-xs mb-2 border-l border-[#097969] pl-2 pr-2">
                                <div className="font-bold">Intramural Sports</div>
                                <div>Member</div>
                                <div>2021-2023</div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="my-3 flex flex-col">
                <div className="text-2xl font-code" >
                    <div className="inline-block hover:text-[#097969]" onMouseEnter={() => setWorkText(true)} onMouseLeave={() => setWorkText(false)}>
                        {workText}
                    </div>
                </div>
                <WorkExperience />
            </div>
            <div className="text-2xl my-6">
                <div className="text-2xl font-code inline-block hover:text-[#097969]" onMouseEnter={() => setProjectsText(true)} onMouseLeave={() => setProjectsText(false)}>
                    {projectsText}
                </div>
            </div>
            <div className="text-2xl my-6">
                <div className="text-2xl font-code inline-block hover:text-[#097969]" onMouseEnter={() => setSkillsText(true)} onMouseLeave={() => setSkillsText(false)}>
                    {skillsText}
                </div>
            </div>

        </div>
    )
}