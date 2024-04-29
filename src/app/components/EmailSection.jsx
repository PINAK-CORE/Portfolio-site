"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";



const EmailSection = () => {
  
  return (
    <section
      
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      
      <div>
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">
            LETS TRY TO CONNECT (*HOPEFULLY)
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            Im always looking for new challenges and interesting people to collaborate with. Just be warned, a conversation with me might involve the occasional tech pun... youve been warned.
          </p>
          <br></br>
          <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/PINAK-CORE/PINAK-CORE">
            <Image src="/icons/git-hub.png" width={50} height={50} />
          </Link>
          <br></br>
          <Link href="https://leetcode.com/u/PINAK-TILAVAT/">
            <Image src="/icons/leetcode.svg" width={50} height={50} />
          </Link>
          
        </div>
        </div>
      </div>
      <div>
        
        
          <form className="flex flex-col" action="https://api.web3forms.com/submit" method="POST" >
          <input type="hidden" name="access_key" value="a29fb18b-156d-49de-ac0a-304fece3cf7c"/>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                YOUR EMAIL :
              </label>
              <input
                name="email"
                type="email"
                
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                SUBJECT :
              </label>
              <input
                name="subject"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Subject"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                MESSAGE :
              </label>
              <textarea
                name="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Share me Your Thoughts..."
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        
      </div>
    </section>
  );
};

export default EmailSection;
