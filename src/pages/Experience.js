import React, { useState, useEffect, useRef } from "react";
import News from "../assets/googleNews.webp";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import Loader from "../layout/Loader";
import Navbar from "../layout/Navbar";
import { experience } from "../data/SkillsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";
import MultiActionAreaCard from "./ExperienceCard";
import medfar from "../assets/medfar.png";
import expelee from "../assets/ExpeleeLogoDark.png";
// import expelee from "../assets/ExpeleeLogoDark.png";
import { Grid } from "@mui/material";

const Experience = () => {
  let [skillset] = useState(experience);
  const [slides, setSlides] = useState(5);
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    if (width >= "1100") setSlides(5);
    else if (width >= "850") setSlides(4);
    else if (width >= "520") setSlides(3);
    else setSlides(1);
  }, [width]);
  const slider = useRef(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: slides,
    speed: 1500,
    pauseOnHover: true,
    autoplay: true,
    cssEase: "linear",
  };
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="skills flex flex-col h-[calc(100vh_-_3rem)] md:h-[calc(100vh_-_4rem)] overflow-y-auto overflow-hidden w-screen items-center">
      {!show ? (
        <Loader title="Experience..." />
      ) : (
        <div className="w-screen">
          <Navbar image={News} title="Experience" search="experience" />
          <div
            data-aos="zoom-in"
            data-aos-duration="1100"
            className="flex items-center w-screen h-[calc(100vh_-_6.1rem)] sm:h-[calc(100vh_-_6.6rem)] md:h-[calc(100vh_-_7.8rem)]"
          >
            {/* <Slider
              ref={slider}
              {...settings}
              className="w-full flex items-center"
            > */}

            <Grid sx={{ width: "90%", margin: "auto" }} container spacing={2}>
              <Grid item xs={12} md={3}>
                <MultiActionAreaCard
                  title={"Comtron-A Division Of Medfar"}
                  logo={medfar}
                  desc="Comtron is a division of medfar, where I am working As a senior software developer for it's one of the project LABGEN LIS (One of the most complete system on the market for the past 35 years, Labgen is a fully integrated computer system uniquely designed for medical laboratories.Full automation reduces errors, improves efficiency and reduces costs. Versions available for commercial laboratories, hospital laboratories and physician office laboratories (POL).)"
                  Position={"Senior Full stack Developer"}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MultiActionAreaCard
                  width={true}
                  logo={expelee}
                  title="Expelee"
                  Position={"Technical Lead"}
                  desc="As Expelee's technical lead, I drive the development of cutting-edge Web3 solutions. I lead a talented team of developers to create innovative decentralized applications that leverage blockchain technology. By staying up-to-date with the latest Web3 advancements, I ensure that we remain at the forefront of this rapidly-evolving field.Through my leadership and expertise, I am proud to have contributed to the growth and success of Expelee, and to have helped our clients unlock the full potential of the decentralized web."
                />
              </Grid>
              {/* <Grid item xs={12} md={3}>
                <MultiActionAreaCard />
              </Grid>
              <Grid item xs={12} md={3}>
                <MultiActionAreaCard />
              </Grid> */}
            </Grid>

            {/* </Slider> */}
          </div>
          {/* <div className="flex absolute inset-y-1/2 w-screen justify-between px-2 pr-0 items-center z-10">
            <button onClick={() => slider?.current?.slickPrev()}>
              <MdArrowBackIos className="text-5xl text-indigo-700 hover:text-indigo-800" />
            </button>
            <button onClick={() => slider?.current?.slickNext()}>
              <MdArrowForwardIos className="text-5xl text-indigo-700 hover:text-indigo-800" />
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
};
export default Experience;
