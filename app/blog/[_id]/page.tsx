"use client";
import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";
import RelatedCard from "@/app/components/RelatedCard/RelatedCard";
import { Blog } from "@/types/blog";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [blog, setBlog] = useState<Blog[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://a2sv-backend.onrender.com/api/blogs/${_id}",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmNkYWQzODliMzM5M2FjN2U3NDIzZTQiLCJuYW1lIjoiQmV0c2Vsb3QgVGVzZmEiLCJyb2xlIjoidXNlciIsImlhdCI6MTcyNDc1NjEwOSwiZXhwIjoxNzI3MzQ4MTA5fQ.XqYvrjW7ibxUmmE-8FAHDFvdGNHhdgM55SWO7C7pBsw",
            },
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        console.log("API result:", result);
        setBlog(result);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IM+Fell+French+Canon:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-full overflow-x-hidden">
        <NavBar />
        <p
          className="pt-32 font-medium text-3xl text-center"
          style={{ fontFamily: "'IM Fell French Canon', serif" }}
        >
          The essential guide to Competitive Programming
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 pt-2">
          <p className="font-light text-center">PROGRAMMING, TECH |</p>
          <p className="font-light text-center">6 MIN READ</p>
        </div>
        <img
          className="w-full max-w-[1200px] h-auto rounded-none mx-auto pt-10"
          src="/images/blog-image.png"
          alt="Blog"
        />
        <img
          className="pt-10 mx-auto block"
          src="/images/desc-logo.png"
          alt="Description Logo"
        />
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 pt-2">
          <p className="font-normal text-center">CHALTU KEBEDE |</p>
          <p className="font-normal text-center">SOFTWARE ENGINEER</p>
        </div>
        <p className="text-[#264FAD] text-center pt-1">@CHALTU_KEBEDE</p>
        <p
          className="font-normal text-[35px] w-full max-w-[65%] mx-auto pt-10"
          style={{ fontFamily: "'IM Fell French Canon', serif" }}
        >
          We know that data structure and algorithm can seem hard at first
          glance. And you may not be familiar with advanced algorithms, but
          there are simple steps you can follow to see outstanding results in a
          short period of time.
        </p>
        <p className="font-light text-[#737373] text-xl w-full max-w-[65%] mx-auto pt-10 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/* Additional paragraphs with similar styling */}
        <p className="font-light text-[#737373] text-xl w-full max-w-[65%] mx-auto pt-10 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="font-light text-[#737373] text-xl w-full max-w-[65%] mx-auto pt-10 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="font-light text-[#737373] text-xl w-full max-w-[65%] mx-auto pt-10 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-2xl font-semibold mx-auto text-center pt-32">
          Related Blogs
        </p>
        <div className="pt-16 overflow-x-auto">
          <div className="flex flex-nowrap gap-16 mx-auto lg:ml-[15%]">
            <RelatedCard />
            <RelatedCard />
            <RelatedCard />
          </div>
        </div>
        <div className="pt-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page;
