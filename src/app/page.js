"use client";
import Nav from "@/components/nav";
import {binaryEffect} from "./../components/binaryEffect";

export default function Home() {
  const originalName = "Raghu Padma";
  const originalAboutMe = "About Me";
  const originalEngineering = "Building With Purpose";

  const [nameText, setNameText] = binaryEffect(originalName);
  const [aboutMeText, setHoveringOverAboutMe] = binaryEffect(originalAboutMe);
  const [engineeringText, setEngineeringText] = binaryEffect(originalEngineering);

  return (
    <div>
      <Nav></Nav>
      <div className="flex flex-row">
        <div className="flex-1 flex flex-col items-left justify-center">
          <div className="my-3">
            <div className="font-code text-4xl" >
              <div className="inline-block hover:text-[#097969]" onMouseEnter={() => setNameText(true)} onMouseLeave={() => setNameText(false)}>
                {nameText}
              </div>
            </div>
            <div className="text-lg">
              Software Engineer
            </div>
          </div>
          <div className="my-3">
            <div className="flex flex-row">
              <div>
                <img src="/map-pin.svg" className="w-5 h-5"/>
              </div>
              <div>
                Arlington, VA
              </div>
            </div>
          </div>
          <div className="my-3 flex flex-col gap-2">
            <div className="flex flex-row gap-1">
              <div>
                <img src="/mail.svg" className="w-5 h-5"/>
              </div>
              <div>
                raghuvarapadma [@] gmail.com
              </div>
            </div>
            <div className="flex flex-row justify-left gap-3">
              <a href="https://www.linkedin.com/in/raghuvarapadma/">
                <img src="/linkedin.svg" className="w-5 h-5"/>
              </a>
              <a href="https://github.com/raghuvarapadma">
                <img src="/github.svg" className="w-5 h-5"/>
              </a>
              <div>
                <a href="https://x.com/chefsauce23?s=11&t=N_AlS2ZwDNtEozHNGBb4mA">
                  <img src="/twitter.svg" className="w-5 h-5"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden">
            <img src="/headshot.jpg" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#097969] my-6"></div>
      <div className="flex flex-col my-6">
        <div className="font-code text-3xl">
          <div className="inline-block hover:text-[#097969]" onMouseEnter={() => setHoveringOverAboutMe(true)} onMouseLeave={() => setHoveringOverAboutMe(false)}>
            {aboutMeText}
          </div>
        </div>
        <div className="whitespace-pre-line">
          <br />
          Hi! I'm Raghu, and I'm passionate about learning and building new things! <br />
          <br />
          Currently, I work as a software engineer at Capital One in the Retail Banking space, where I help facilitate the movement of money between different banking products owned by Capital One. <br />
          <br />
          Outside of work, I have a few hobbies I enjoy. Being from Charlotte, NC, I’m a Panthers fan (unfortunately) and a UNC fan. When I’m not suffering through NFL Sundays, I love reading, watching movies, exploring new TV shows, and trying to stay active. I also enjoy spending time outdoors—over the past year, I’ve picked up skiing and golfing (still a work in progress on both).<br /> 
          <br />
          One of my goals this year is to be better about meeting new people. Whether you want to talk about software engineering, say hi, or discuss anything else, feel free to reach out to me via any of the methods above. The best way to get in touch is through email at raghuvarapadma [@] gmail.com.<br />
        </div>
      </div>
      <div className="border-t-2 border-[#097969] my-6"></div>
      <div className="flex flex-col my-6">
        <div className="font-code text-3xl" >
          <div className="inline-block hover:text-[#097969]" onMouseEnter={() => setEngineeringText(true)} onMouseLeave={() => setEngineeringText(false)}>
            {engineeringText}
          </div>
        </div>
        <div className="whitespace-pre-line">
          <br />
          With experience in full-stack development, I focus on creating end-to-end solutions that provide the best user experience. I believe software is incredible, but it can only be truly impactful if it's intuitive, scalable, and resilient. I find great value in building systems and leveraging technology to drive business success. <br />
          <br />
          As I mentioned, I love to continuously learn about technology, explore new areas of software engineering, and learn by building. I'm a firm believer that the best way to learn is by getting your hands dirty. On this website, you'll find projects I've worked on in the past, things I'm currently working on, my thoughts, and other interests. <br />
        </div>
      </div>
    </div>
  );
}
