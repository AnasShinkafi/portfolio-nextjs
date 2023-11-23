"use client"
import Image from 'next/image'
import { useState, useTransition } from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className=' list-disc pl-2'>
                <li className="">Node.js</li>
                <li className="">Express</li>
                <li className="">PostgresSQL</li>
                <li className="">Sequelize</li>
                <li className="">JavaScript</li>
                <li className="">React</li>
                <li className="">Next.js</li>
                <li className="">Nest.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className=' list-disc pl-2'>
                <li className="">CodeWithJameel</li>
                <li className="">TeamCoded</li>
                <li className="">Kaduna Polytechnic</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className=' list-disc pl-2'>
                <li className="">Cisco Cyber Security</li>
                <li className="">JSM Next.js Certificate</li>
            </ul>
        )
    }
]

type Props = {}

const AboutSection = (props: Props) => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: any) => {
        startTransition(() => setTab(id));
    }
  return (
    <section className=' text-white'>
        <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src={'/images/about-image.png'} alt='' width={500} height={500} />
            <div className=" mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className=" text-4xl font-bold text-white mb-4">About Me</h2>
                <p className=" text-base lg:text-lg">
                    I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgresSQL, Sequelize, HTML, CSS, and Git. I am quick leaner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
                </p>
                <div className=" flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {" "}
                        Education
                        {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                        {" "}
                        Certifications
                        {" "}
                    </TabButton>
                </div>
                <div className=" mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection