import React, { useState } from "react";

import "./Landing.css";
// import { ReactComponent as Landingimage } from "assets/svg/Copy.svg";

import landingimage from "../../assets/images/LandingImages/idea.jpg";
import { Header } from "components/navbar/Header";
import { NewsletterModal } from "./Modal";
const Landing = () => {
  const [email, setEmail] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const validateEmail = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  } 
  const handleJoinUsClick = async () => {
    if(email === "") {
      alert('Please enter your E-Mail ID to join! 🥺')
    } else if (!validateEmail(email)) {
      alert('Enter a valid E-Mail address! 😵')
    } else {
      /*
        Google Sheet Endpoint is generated from No Code API
        https://app.nocodeapi.com/dashboard/api/google_sheets
        Signed in with Kaushal Joshi's account (kaushalyan.99@gmail.com)
       */
      try {
        const response = await fetch(
          "https://v1.nocodeapi.com/clumsycoder/google_sheets/xMuwokNFjkQincJF?tabId=Sheet1",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
          },
            body: JSON.stringify([[email]]), // NoCodeAPI needs 2D Array
          }
        );

        await response.json();
        setIsOpen(true);
        setEmail("")
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <Header key="header" />
      <div className="flex p-10 sm:p-0 sm:pl-6 flex-col-reverse xl:flex-row lg:flex-row md:flex-row sm:flex-row w-full">
        <div className=" xl:w-2/4 w-full xl:mt-20 lg:mt-20 md:mt-5 sm:mt-5 mt-5">
          <div className=" w-full mb-10 ">
            <p className="font-bold text-sm xl:text-lg lg:text-lg pb-1 xl:pb-2 lg:pb-2 pl-1">
              Our Aim
            </p>

            <div className="w-full h-auto block">
              <p className="xl:text-exl lg:text-exsl sm:text-md md:text-xl  xs:text-mfont  text-lfont block">
                <span className="text-red-core">Converting</span>
                <span className="ml-1 text-green-core">Ideas</span>
                <span className="ml-1 text-yellow-core">into</span>
                <span className="ml-1 text-blue-core">Reality!</span>
              </p>
            </div>
            <div className="w-full mt-3 mb-3 xl:text-lg lg:text-lg md:text-md sm:text-landingfont text-xs pl-1 2xl:pt-5 xl:pt-5 lg:pt-5">
              <p className="flex flex-col xl:text-lg lg:text-lg md:text-sm sm:text-sm text-xs">
                <span className="pb-2">
                  Welcome to the first ever chapter of Google Developer Students
                  Club - VIT. Students develop their skills in this thriving
                  environment and build solutions for organizations and the
                  community.
                </span>

                <span className="pb-2 text-bold">
                  Be a part of this growing community now !
                </span>
              </p>
            </div>

            {/* <div className="mt-5 w-full xl:w-11/12 border p-1 rounded-xl text-left feont-bold flex justify-between 2xl:mt-10 xl:mt-10 lg:mt-10 sm:mt-5">
              <input
                type="text"
                name=""
                placeholder="Enter your Mail ID"
                id=""
                className="xl:w-full w-full lg:w-full p-2 font-bold ml-2 text-sm xl:text-lg lg:text-lg md:text-xs focus:outline-none"
              />
              <button className="font-bold xl:p-1 lg:p-1 w-24 xl:w-32 xl:rounded-lg lg:rounded-lg rounded-md bg-blue-500 text-white xl:text-lg lg:text-md text-join cursor-pointer">
                Join Us
              </button>
            </div> */}
            <div className="mt-5 w-full xl:w-11/12 border p-1 rounded-xl text-left flex justify-between 2xl:mt-10 xl:mt-10 lg:mt-10 sm:mt-5">
                <input
                  id="joinus-mail"
                  className="xl:w-full w-full lg:w-full p-2 font-bold ml-2 text-sm xl:text-lg lg:text-lg md:text-xs focus:outline-none"
                  type="email"
                  name="joinus-mail"
                  placeholder="Enter E-Mail Address to Join"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={handleJoinUsClick}
                  className="font-bold xl:p-1 lg:p-1 w-24 xl:w-32 xl:rounded-lg lg:rounded-lg rounded-md bg-blue-500 text-white xl:text-lg lg:text-md text-join cursor-pointer"
                >
                  Join Now
                </button>
              </div>
          </div>
        </div>
        <div
          className="xl:w-2/4 w-full mx-auto max-w-sm block my-auto"
          style={{}}
        >
          <img src={landingimage} alt="" />
          {/* <Landingimage/> */}
        </div>
        <NewsletterModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
      </div>
    </>
  );
};

export default Landing;
