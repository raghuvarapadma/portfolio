"use client";
import React from "react";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import {Badge} from "@/components/ui/badge";

export default function WorkExperience({mode}) {
    
    const workExperience = [
        {
            company: "Capital One",
            position: "Associate Software Engineer",
            date: "2023-Present",
            description: <p>During my time at Capital One as part of the Technology Development Program, I have had the opportunity to work with two distinct teams. My first team focused on Risk Management, where I helped maintain two key applications used by Risk Management advisors. Currently, I am part of a team in the Retail Banking space that facilitates the movement of billions of dollars and validates transactions across different banking products and customers. As my first job, this experience has provided continuous learning opportunities about the SDLC, feature development, production support, and architecting resilient, scalable applications.</p>,
            details: <ul className="list-disc pl-5"><li><strong>Onboarded New Data Sources for Risk Management App:</strong> Integrated 3 new external regulatory data sources into the Risk Management app, enabling advisors to identify potential fines more effectively, reducing the bank's risk of facing penalties worth millions of dollars.</li><li><strong>Optimized Risk Management App:</strong> Improved app performance by reducing latency by 5x through asynchronous data fetching on the front-end and optimizing OpenSearch queries.</li><li><strong>Migrated Workiva to In-House Solution:</strong> Led the migration of the Workiva platform to an in-house application, saving the company $100K+. Contributed to architecting and implementing a full-stack solution.</li><li><strong>Money Movement Platform:</strong> Developed features for the Money Movement team, supporting billions of dollars in transactions weekly. Implemented enhancements like skipping scheduled transactions, faster bonus payouts, and emoji support in Zelle transactions, increasing user engagement.</li></ul>,
            skills: <div className="ml-4 text-md my-2"><Badge className="mr-1 mb-1">JavaScript</Badge><Badge className="mr-1 mb-1">Java</Badge><Badge className="mr-1 mb-1">PostgreSQL</Badge><Badge className="mr-1 mb-1">lit.dev</Badge><Badge className="mr-1 mb-1">react.dev</Badge><Badge className="mr-1 mb-1">Springboot</Badge><Badge className="mr-1 mb-1">AWS</Badge><Badge className="mr-1 mb-1">S3</Badge><Badge className="mr-1 mb-1">Lambda</Badge><Badge className="mr-1 mb-1">Fargate</Badge><Badge className="mr-1 mb-1">Opensearch</Badge></div>

        },
        {
            company: "Undergraduate Learning Assistant",
            position: "UNC Department of Computer Science",
            date: "Jan 2022-May 2023",
            description: <p>As an Undergraduate Learning Assistant, I assisted in teaching COMP 311 (Computer Organization) and COMP 421 (Files and Databases). I worked closely with students to break down challenging topics, guide them through problem-solving strategies, and prepare for exams. Additionally, I collaborated with the professor to refine course materials, create midterm reviews, and ensure students had the resources they needed to succeed. Working with students closely improved my ability to explain complex ideas clearly, mentor others, and reinforce my own technical knowledge.</p>,
            details: <ul className="list-disc pl-5"><li><strong>Office Hours:</strong> Held weekly office hours to assist students with labs, go over difficult concepts, and review exams/quizzes.</li><li><strong>Prepare Materials:</strong> Led weekly review sessions covering material taught in class, created midterm reviews to assist students in preparing for exams, and assisted the professor in reviewing labs, worksheets, and midterms.</li></ul>,
            skills: <div className="ml-4 text-md my-2"><Badge className="mr-1 mb-1">Assembly</Badge><Badge className="mr-1 mb-1">MIPS</Badge><Badge className="mr-1 mb-1">C</Badge><Badge className="mr-1 mb-1">SQL</Badge></div>
        
        },
        {
            company: "Capital One",
            position: "Software Engineer Intern",
            date: "Jun 2022-Aug 2022",
            description: <p>During my Software Engineering Internship at Capital One, I developed a full-stack application to track user login activity and high-risk transactions, improving fraud detection and predictive insights. The project involved scraping and analyzing data from Snowflake, building data pipelines, designing a front-end for visualizing customer data, and developing back-end architecture to extract key insights. This experience enhanced my ability to design full-stack systems, work with cloud infrastructure, and leverage data-driven insights to solve complex problems.</p>,
            details: <ul className="list-disc pl-5"><li><strong>Full-Stack Application:</strong> Engineered a proof-of-concept full-stack application to display login information and high-risk transactions for a given customer. This tool helps evaluate fraud and create predictive insights about customer activity.</li><li><strong>AWS Infrastructure:</strong> Deployed application infrastructure to the AWS environment using S3 Static Content Delivery, Lambda Functions, and Aurora PostgreSQL to deploy UI, API, and database (DB) respectively.</li><li><strong>Built Infrastructure:</strong> Developed Redux UI alongside PostgreSQL DB and API to store user state and deliver data efficiently, reducing latency for the user.</li><li><strong>Data Engineering:</strong> Analyzed and extracted data points related to customer login activity using Snowflake, aiming to replicate production data in a non-production environment. Built pipelines to move data from Snowflake to PostgreSQL DB.</li></ul>,
            skills: <div className="ml-4 text-md my-2"><Badge className="mr-1 mb-1">JavaScript</Badge><Badge className="mr-1 mb-1">Python</Badge><Badge className="mr-1 mb-1">PostgreSQL</Badge><Badge className="mr-1 mb-1">react.dev</Badge><Badge className="mr-1 mb-1">Flask</Badge><Badge className="mr-1 mb-1">Snowflake</Badge><Badge className="mr-1 mb-1">S3</Badge><Badge className="mr-1 mb-1">Lambda</Badge><Badge className="mr-1 mb-1">Aurora</Badge></div>
        },
        {
            company: "NLP Lab with Professor Srivastava",
            position: "Undergraduate Student Researcher",
            date: "Aug 2021-Jan 2022",
            description: <p>During my time as an Undergraduate Student Researcher in the NLP Lab with Professor Srivastava, I developed a language model to analyze AITA subreddit posts and determine right and wrong in various situations, collecting and analyzing over 1,000 posts. This project strengthened my skills in data collection and NLP techniques.</p>,
            details: <ul className="list-disc pl-5"><li><strong>Responsible for building language model:</strong> Built a language model based on AITA subreddit to analyze situations and determine right and wrong.</li><li><strong>Data Collection:</strong> Wrote a script to collect 1000+ subreddit posts and used Firebase to store the data.</li><li><strong>Learned NLP techniques:</strong> Researched and applied various NLP techniques to improve model performance.</li></ul>,
            skills: <div className="ml-4 text-md my-2"><Badge className="mr-1 mb-1">Python</Badge><Badge className="mr-1 mb-1">Pandas</Badge><Badge className="mr-1 mb-1">Firebase</Badge><Badge className="mr-1 mb-1">NLP</Badge></div>
        },
        {
            company: "Allstate",
            position: "Software Engineer Intern",
            date: "May 2021-Aug 2021",
            description: <p>At Allstate, I contributed to the Claims Technology Services (CTS) department, helping maintain five products that provided adjusters with better insights into claims and streamlined data transfer across platforms. I assisted in maintaining codebases, architecting a new microservice, implementing bug fixes, and refactoring code. As my first SWE-related experience, this internship provided valuable exposure to production-level code, the SDLC, and a deeper understanding of software engineering in a real-world environment.</p>,
            details: <ul className="list-disc pl-5"><li><strong>Maintained Codebase:</strong> Worked in the Claims Technology Services (CTS) department to help maintain five products which provided adjusters greater insight into claims and assisted in transferring claim data across various products/platforms.</li><li><strong>Product Fixes:</strong> Engineered new features, bug fixes, and refactors using the Spring Boot and React frameworks in a paired programming environment and maintained a heavy focus on TDD to ensure the quality of the products.</li><li><strong>Microservice Development:</strong> Architected new microservice in order to automate event configurations which allowed other microservices to write data to RabbitMQ queues when certain events were triggered.</li></ul>,
            skills: <div className="ml-4 text-md my-2"><Badge className="mr-1 mb-1">Java</Badge><Badge className="mr-1 mb-1">Springboot</Badge><Badge className="mr-1 mb-1">RabbitMQ</Badge></div>
        },
        {
            company: "Duke Energy",
            position: "Data Engineer",
            date: "Jan 2021-May 2021",
            description: <p>At Duke Energy, I optimized PySpark scripts for the Meter Data Insights (MDI) project and helped transfer Jupyter Notebooks from an on-premise environment to AWS EMR, improving data processing efficiency and scalability. This experience gave me hands-on knowledge in cloud technologies and was a great introduction to data engineering.</p>,
            details: <ul className="list-disc list-outside pl-5"><li><strong>Refine Data Processing</strong>: Contributed to the Meter Data Insights (MDI) project and assisted in optimizing PySpark scripts and transferring Jupyter Notebooks from an on-premise environment to an AWS EMR environment.</li></ul>, 
            skills: <div className="ml-4 text-md my-2"><Badge className="mr-1 mb-1">SQL</Badge><Badge className="mr-1 mb-1">PySpark</Badge><Badge className="mr-1 mb-1">Hadoop</Badge><Badge className="mr-1 mb-1">AWS</Badge><Badge className="mr-1 mb-1">EMR</Badge></div>
        }, 
        {
            company: "The Hedrick Lab",
            position: "Undergraduate Research Volunteer",
            date: "Oct 2019-Nov 2020",
            description: <p>As an Undergraduate Research Volunteer at The Hedrick Lab, I developed a landscape visualization to track the movement of 30 flying lizards. Using Python, Excel, and tools like Pandas, I cleaned, analyzed, and visualized the data with Matplotlib. This experience allowed me to apply classroom coding skills to a research project and gain hands-on experience with data analysis techniques. You can view more about the research <a style={{color:"lightblue"}} href="https://www.nature.com/articles/s41598-022-05739-1#Abs1">here</a>.</p>,
            details: <ul className="list-disc list-outside pl-5"><li><strong>Construct Visualization:</strong> Constructed a landscape visualization of around 30 different flying lizards in a plantation field utilizing Python alongside tools such as Excel to examine, organize, and clean data; Pandas to efficiently analyze and clean data; and Matplotlib to visually represent individuals.</li></ul>,
            skills: <div className="ml-4 text-md my-2"><Badge className="mr-1 mb-1">Python</Badge><Badge className="mr-1 mb-1">Pandas</Badge><Badge className="mr-1 mb-1">Matplotlib</Badge></div>
        },
    ]
    
    return (
        <div>
            {workExperience.map((experience, index) => (
                <div key={index} className="flex flex-col">
                    <Accordion type="single" collapsible>
                    <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="text-lg">
                                        {experience.company}
                                    </div>
                                    <div className="text-md">
                                        {experience.position}
                                    </div>
                                    <div className="text-md">
                                        {experience.date}
                                    </div>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            {!mode ? (
                                <div className="flex flex-row text-md my-2 border-l border-[#097969] pl-2 pr-2">
                                    <div>
                                        {experience.description}
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-row text-md my-2 border-l border-[#097969] pl-2 pr-2">
                                    <div>
                                        {experience.details}
                                        {experience.skills}
                                    </div>
                                </div>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>
            ))}
        </div>
    );
}