"use client";
import Nav from "@/components/nav";
import {binaryEffect} from "../../components/binaryEffect";

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
                        <div>
                            University of North Carolina at Chapel Hill
                        </div>
                        <div className="text-md">
                            Bachelor of Science in Computer Science, Minor in Statistics
                        </div>
                    </div>
                    <div className="text-md">
                        2019-2023
                    </div>
                </div>
            </div>
            <div className="text-2xl my-6">
                <div className="text-2xl font-code inline-block hover:text-[#097969]" onMouseEnter={() => setWorkText(true)} onMouseLeave={() => setWorkText(false)}>
                    {workText}
                </div>
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