import React from "react";

const Footer = () => {
  return (
    <div className="p-6">
      <hr className="my-6" />
      <div className="flex flex-col md:flex-row gap-6 md:gap-20">
        <img
          className="w-full md:w-auto"
          src="/images/footer-image.png"
          alt=""
        />
        <div className="flex flex-col items-start">
          <p className="font-semibold text-xl pb-6 text-center md:text-left">
            Get involved in improving tech education in Africa!
          </p>
          <button className="bg-[#264FAD] text-white py-2 px-10 rounded mx-auto md:mx-0">
            Support Us
          </button>
        </div>
        <div className="flex flex-col text-center md:text-left">
          <p className="font-bold pb-5">Links</p>
          <a className="pb-3 font-light block" href="#">
            Home
          </a>
          <a className="pb-3 font-light block" href="#">
            Success Stories
          </a>
          <a className="pb-3 font-light block" href="#">
            About Us
          </a>
          <a className="pb-3 font-light block" href="#">
            Get Involved
          </a>
        </div>
        <div className="flex flex-col text-center md:text-left">
          <p className="font-bold pb-5">Teams</p>
          <a className="pb-3 font-light block" href="#">
            Board Members
          </a>
          <a className="pb-3 font-light block" href="#">
            Advisors/Mentors
          </a>
          <a className="pb-3 font-light block" href="#">
            Executives
          </a>
          <a className="pb-3 font-light block" href="#">
            Staffs
          </a>
        </div>
        <div className="flex flex-col text-center md:text-left">
          <p className="font-bold pb-5">Blogs</p>
          <a className="pb-3 font-light block" href="#">
            Recent Blogs
          </a>
          <a className="pb-3 font-light block" href="#">
            New Blog
          </a>
        </div>
      </div>
      <hr className="my-6" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center text-center md:text-left">
          <img className="w-8 h-8" src="/images/copyright.png" alt="" />
          <p className="pl-3 font-light">
            2020 Africa to Silicon Valley, Inc. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#">
            <img className="w-6 h-6" src="/images/twitter.png" alt="" />
          </a>
          <a href="#">
            <img className="w-6 h-6" src="/images/facebook.png" alt="" />
          </a>
          <a href="#">
            <img className="w-6 h-6" src="/images/youtube.png" alt="" />
          </a>
          <a href="#">
            <img className="w-6 h-6" src="/images/linkedin.png" alt="" />
          </a>
          <a href="#">
            <img className="w-6 h-6" src="/images/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
