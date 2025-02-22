"use client";
import React from "react";
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";

export default function WorkExperience() {
    const [expanded, setExpanded] = React.useState(new Set());

    const workExperience = [
        {
            company: "Capital One",
            position: "Associate Software Engineer",
            date: "2023-Present",
            description: "During my time at Capital One as part of the Technology Development Program, I’ve had the opportunity to work on two distinct teams. My first team focused on Risk Management, where I helped maintain two key applications used by Risk Management advisors. I primarily worked on the front-end, adding new features, optimizing performance, and ensuring the software stayed up-to-date. Currently, I’m part of a team in the Retail Banking space that facilitates the movement of money and validates transactions across different banking products and customers. We manage billions of dollars in transactions weekly and work as an intermediary to ensure seamless transfers both internally and externally. In this role, I primarily work with Java and Spring Boot, focusing on feature development, client onboarding, and software maintenance. This experience has been invaluable in enhancing my ability to build scalable full-stack applications and has provided me with hands-on exposure to various layers of the tech stack, including AWS, significantly shaping my growth as a software engineer."
        },
        {
            company: "Undergraduate Learning Assistant",
            position: "UNC Department of Computer Science",
            date: "Jan 2022-May 2023",
            description: "As an Undergraduate Learning Assistant for the UNC Computer Science Department, I helped students strengthen their understanding of key concepts through weekly office hours, lab assistance, and review sessions. I worked closely with students to break down challenging topics, guide them through problem-solving strategies, and prepare for exams. Additionally, I collaborated with the professor to refine course materials, create midterm reviews, and ensure students had the resources they needed to succeed. This experience honed my ability to explain complex ideas clearly, mentor others, and reinforce my own technical knowledge."
        },
        {
            company: "Capital One",
            position: "Software Engineer Intern",
            date: "Jun 2022-Aug 2022",
            description: "During my Software Engineering Internship at Capital One, I built a full-stack application to track user login activity and high-risk transactions, enhancing fraud detection and predictive insights. I started by analyzing customer data in Snowflake and building pipelines to move relevant information into a PostgreSQL database. From there, I developed a Redux-powered UI and optimized data flow between the API and database to improve performance. To ensure scalability, I deployed the application on AWS, leveraging S3 for static content, Lambda for backend functions, and Aurora PostgreSQL for storage. This experience deepened my ability to design full-stack systems, work with cloud infrastructure, and use data-driven insights to solve complex problems."
        },
        {
            company: "NLP Lab with Professor Srivastava",
            position: "Undergraduate Student Researcher",
            date: "Aug 2021-Jan 2022",
            description: "During my time as an Undergraduate Student Researcher in the NLP Lab with Professor Srivastava, I built a language model to analyze AITA subreddit posts and determine the right and wrong in various situations. I wrote a script to collect over 1,000 posts and stored the data using Firebase. This project gave me hands-on experience with data collection and various NLP techniques, expanding my understanding of language models and text analysis."
        },
        {
            company: "Allstate",
            position: "Software Engineer Intern",
            date: "May 2021-Aug 2021",
            description: "At Allstate, I contributed to the Claims Technology Services (CTS) department by helping maintain five products that provided adjusters with better insights into claims and streamlined data transfer across platforms. I worked with Spring Boot and React to develop new features, implement bug fixes, and refactor code, while maintaining a strong focus on Test-Driven Development (TDD) to ensure high product quality. Additionally, I architected a new microservice that automated event configurations, enabling other microservices to write data to RabbitMQ queues when specific events were triggered. This experience improved my understanding of microservices, agile development practices, and building scalable solutions."
        },
        {
            company: "Duke Energy",
            position: "Data Engineer",
            date: "Jan 2021-May 2021",
            description: "At Duke Energy, I contributed to the Meter Data Insights (MDI) project by optimizing PySpark scripts to enhance data processing efficiency. I also assisted in transferring Jupyter Notebooks from an on-premise environment to AWS EMR, which helped streamline workflows and improve scalability. This experience gave me practical knowledge in cloud technologies, big data processing, and optimizing data workflows in a real-world setting."
        }, 
        {
            company: "The Hedrick Lab",
            position: "Undergraduate Research Volunteer",
            date: "Oct 2019-Nov 2020",
            description: "As an Undergraduate Research Volunteer at The Hedrick Lab, I developed a landscape visualization to track the movement of 30 flying lizards in a plantation field. Using Python, Excel, and tools like Pandas, I cleaned, organized, and analyzed the data, and then visualized their movements with Matplotlib. This experience allowed me to apply data analysis techniques."
        },
    ]

    const expandOrContract = (index) => {
        const newExpanded = new Set(expanded);
        if (newExpanded.has(index)) {
            newExpanded.delete(index);
        } else {
            newExpanded.add(index);
        }
        setExpanded(newExpanded);
    }    
    
    return (
        <div>
            {workExperience.map((experience, index) => (
                <div key={index} className="flex flex-col">
                    <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="text-lg">
                                        {experience.company}
                                    </div>
                                    <div className="text-md">
                                        {experience.position}
                                    </div>
                                    <div className="text-sm">
                                        {experience.date}
                                    </div>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="text-sm my-2 border-l border-[#097969] pl-2 pr-2">
                                {experience.description}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                    {/* <div className="flex flex-row justify-between">
                        <div className="flex flex-col justify-between">
                            <div>
                                <div>
                                    {experience.company}
                                </div>
                                <div className="text-md">
                                    {experience.position}
                                </div>
                                <div className="text-sm">
                                    {experience.date}
                                </div>
                            </div>
                        </div>
                        <div className="text-sm flex flex-col justify-center align-center">
                            <Button variant="secondary" onClick={() => expandOrContract(index)}>
                                {expanded.has(index) ? "Collapse" : "Expand"}
                            </Button>
                        </div>
                    </div>
                    {expanded.has(index) && (
                        <div className="text-sm my-2 border-l border-[#097969] pl-2 pr-2">
                            <div>{experience.description}</div>
                        </div>
                    )}  */}
                </div>
            ))}
        </div>
    );
}