import React, { useState, useEffect } from "react";
import ProfileImage2 from "../assets/aman k.png";
import Namaste from "../assets/namaste.webp";
import GoogleCloud from "../assets/googleCloud.svg";
import Photos from "../assets/googlePhotos.webp";
import Loader from "../layout/Loader";
import Navbar from "../layout/Navbar";

const About = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="about flex flex-col overflow-y-auto h-[calc(100vh_-_3rem)] md:h-[calc(100vh_-_4rem)] overflow-x-hidden w-screen items-center ">
      {!show ? (
        <Loader title="About" />
      ) : (
        <div className="w-screen">
          <Navbar
            className="fixed sm:static top-0"
            image={Photos}
            title="About"
            search="Photos"
          />
          <div className=" h-[calc(100vh_-_6.1rem)] sm:h-[calc(100vh_-_6.6rem)] md:h-[calc(100vh_-_7.8rem)] flex flex-col mt-6 md:mt-0 md:grid grid-cols-3 items-center md:divide-x sm:divide-orange-400 md:gap-10 md:gap-x-10">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="hidden md:flex flex-col items-end p-1 col-span-1"
            >
              <img
                src={ProfileImage2}
                loading="lazy"
                className="w-4/5 border-orange-400 border-8 border-double mt-4 md:mt-10"
                alt="profileImage"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex flex-col col-span-2 px-4 sm:px-10 font-google xs:text-lg sm:text-xl font-medium text-[#676767] "
            >
              <span className="flex items-center ">
                <img
                  src={Namaste}
                  className="w-12 mr-1"
                  alt="namaste"
                  loading="lazy"
                />
                Hey everyone!
                <img
                  src={Namaste}
                  className="w-12 mr-1"
                  alt="namaste"
                  loading="lazy"
                />
              </span>
              <p className="mt-2 sm:mt-5 text-justify">
                <img
                  src={ProfileImage2}
                  loading="lazy"
                  className="block float-right w-2/5 sm:w-1/4 m-4 mt-3 mr-0 md:hidden"
                  alt="profileImage"
                />
                My name is Aman Kumar and I am an experienced software developer
                with a strong background in both web 2 and web 3 technologies.
                Over the years, I have worked on a wide range of projects, from
                building responsive websites and scalable web applications to
                creating decentralized applications on blockchain.
                <br />
                I am passionate about staying on the cutting edge of emerging
                technologies and tools. I am constantly learning and exploring
                new platforms and frameworks to improve my skills and create
                innovative solutions for my clients.
                <br />
                What sets me apart is my ability to understand and cater to my
                clients' unique needs. I believe that great software development
                is not just about writing clean code, but also about building
                strong relationships with clients and collaborating with them to
                create the best possible solutions.
                <br />
                If you're looking for a developer who is dedicated to delivering
                high-quality results on time and within budget, look no further
                than me. Whether you need help with front-end development,
                back-end development, or blockchain development, I am here to
                help. Contact me today to learn more about how I can bring your
                vision to life.
              </p>
              <a
                className="flex rounded-3xl w-2/3 sm:w-1/4 justify-between border border-orange-500 items-center p-2 animate-bounce mt-8"
                href="https://drive.google.com/drive/folders/1LmLbIgRsXR76MeqFsmJb5MqNRMsayvkI"
                target="_blank"
                rel="noreferrer"
              >
                <figure className="flex w-auto text-lg justify-center m-auto">
                  <img
                    src={GoogleCloud}
                    alt="googlecloud"
                    loading="lazy"
                    className="w-1/5 sm:1/6 mr-1"
                  />
                  <figcaption className="flex">My Resume</figcaption>
                </figure>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default About;
