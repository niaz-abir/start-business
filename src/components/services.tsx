"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhotoVideo } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { IoIosApps } from "react-icons/io";
import { RiWebhookLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { VscGraph } from "react-icons/vsc";













const Services = () => {
 const allServices = [
   {
     id: 1,
     name: "Business Strategy Consulting",
     no: "01",
     icon: <RiWebhookLine />,
     details:
       "We help define clear business strategies that align with your vision, market position, and long-term goals to drive sustainable growth.",
   },
   {
     id: 2,
     name: "Growth & Market Advisory",
     no: "02",
     icon: <GrAppsRounded />,
     details:
       "Identify new market opportunities, customer segments, and growth channels through data-driven insights and competitive analysis.",
   },
   {
     id: 3,
     name: "Leadership & Management Consulting",
     no: "03",
     icon: <IoIosApps />,
     details:
       "Strengthen leadership capabilities, improve decision-making, and build high-performing management teams for organizational success.",
   },
   {
     id: 4,
     name: "Operations Optimization",
     no: "04",
     icon: <FaPhotoVideo />,
     details:
       "Improve efficiency, reduce costs, and streamline business processes to enhance operational performance and productivity.",
   },
   {
     id: 5,
     name: "Financial Planning & Analysis",
     no: "05",
     icon: <TfiWrite />,
     details:
       "Deliver accurate financial insights, budgeting strategies, and forecasting models to support smarter business decisions.",
   },
   {
     id: 6,
     name: "Digital Transformation Advisory",
     no: "06",
     icon: <VscGraph />,
     details:
       "Guide your business through digital transformation by adopting modern technologies that improve agility, innovation, and scalability.",
   },
 ];


  return (
    <section id="services">
      <div className="text-center mb-14 mt-14 p-4">
        <h1 className="font-bold text-center text-4xl">Our Services</h1>
        <p className="text-[18px] text-gray-300">
          From enhancing your digital presence to creating impactful designs, we
          provide <br />
          solutions that drive business growth.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {allServices.map((service) => (
          <motion.div
            key={service.id}
            className="bg-[#1a2f45] rounded-md p-4 lg:w-96 m-6"
            
          >
            <motion.div
              className="p-4"
             
            >
              <motion.h1
                className="font-bold flex bg-[#12202e] rounded-md gap-2 pb-2 pt-2 text-[20px] lg:text-[24px] items-center"
               
              >
                <span className="text-[#f37021] p-2 rounded-md">
                  {service.icon}
                </span>
                {service.name}
              </motion.h1>
              <motion.h2
                className="text-[18px] pt-4 pb-6"
               
              >
                {service.details}
              </motion.h2>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
