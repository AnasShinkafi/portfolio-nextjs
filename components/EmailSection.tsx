"use client"
import Link from 'next/link';
import GithubIcon from '../public/github-icon.svg';
import LinkedInIcon from '../public/linkedin-icon.svg';
import Image from 'next/image';
import { useState } from 'react';
type Props = {}

const EmailSection = (props: Props) => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value, 
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        //Form the request fro sending data to the server
        const options = {
            // the method  for sending
            methods: "POST",
            //Tell the server we are sending JSON
            Headers: {
                "Content-Type": "application/json",
            },
            //Body of the request is th JSON data we created above
            body: JSONdata,
        }
        const response = await  fetch(endpoint, options);
        const resData = await response.json();
        
        if(response.status === 200) {
            console.log("Message sent");
            setEmailSubmitted(true);
            
        }
    };
  return (
    <section className=' grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className="bg-[radial-gradient(ellipse_at_center, _var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className=" z-10">
            <h5 className=" text-xl font-bold text-white my-2">
                Let connect
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I am currently looking for new opportunities, my inbox is always open, Whether you have a question or just want to say hi, I will try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href={"github.com/AnasShinkafi"}>
                    <Image src={GithubIcon} alt='github' />
                </Link>
                <Link href={"www.com/linkedin.com/in/anas-isah-b566a8242"}>
                    <Image src={LinkedInIcon} alt='linkedIn' />
                </Link>
            </div>
        </div>
        <div className=" mb-6">
            <form className=" flex flex-col" onSubmit={handleSubmit}>
               <div className="">
               <label htmlFor="email" className=" text-white mb-2 block 1 text-sm font-medium">Your Email</label>
                <input type="email" id='email' name='email' required placeholder="shinxSoft@gmail.com" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] to-gray-100 text-sm rounded-lg block w-full p-2.5" />
               </div>
               <div className=" mb-6">
               <label htmlFor="subject" className=" text-white mb-2 block text-sm font-medium">Subject</label>
                <input type="text" id='subject' name="subject" required placeholder="Just saying hi" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] to-gray-100 text-sm rounded-lg block w-full p-2.5" />
               </div>
               <div className=" mb-6">
                <label htmlFor="message" className=" text-white block text-sm mb-2 font-medium">Message</label>
                <textarea name="message" id="message" cols={30} rows={10} className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] to-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder='let talk about...' />
               </div>
               <button className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full" type='submit'>Send Message</button>
               {
                // if the email was submitted successfully, show a success message.
                emailSubmitted && (
                    <p className=" text-green-500 text-sm mt-2">
                        Email sent successfully!
                    </p>
                )
               }
            </form>
        </div>
    </section>
  )
}

export default EmailSection