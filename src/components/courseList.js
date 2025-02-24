"use client";
import React from 'react';
import { Badge } from './ui/badge';

const CourseList = () => {
  const courses = [
    "Data Structures and Analysis",
    "Systems Fundamentals",
    "Computer Organization",
    "Files and Databases",
    "Models of Languages and Computation",
    "Compilers",
    "Programming Language Concepts",
    "Algorithms and Analysis",
    "Modern Web Programming",
    "Operating Systems",
    "Computational Photography",
    "Introduction to Data Science",
    "Methods of Data Analysis",
    "Introduction to Probability",
    "General Descriptive Chemistry I",
    "Introductory Calculus-based Mechanics and Relativity",
    "Discrete Mathematics",
    "Calculus of Functions of Several Variables",
    "Linear Algebra for Applications",
  ];

  return (
    <div className="text-md">
      <div className="flex flex-wrap gap-1" style={{ lineHeight: '2' }}>
        {courses.map((course, index) => (
          <div key={index}>
            <Badge>{course}</Badge>
          </div>
          // <div 
          //   key={index} 
          //   className="border-l border-r border-[#097969] pl-2 pr-2 mb-1"
          //   style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}
          // >
          //   {course}
          // </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;