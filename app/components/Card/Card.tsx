"use client";
import { Blog, Author } from "@/types/blog";
import Link from "next/link";
import React from "react";

interface CardProps {
  _id: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  author: Author;
}

const Card: React.FC<CardProps> = ({
  _id,
  title,
  description,
  image,
  tags,
  author,
}) => {
  console.log("Card props:", { _id, title, description, image, tags, author });
  const imageSrc = author?.image || "/images/blog-logo.png";
  const authorName = author?.name || "Yididiya Kebede";
  const authorRole = author?.role.toUpperCase() || "SOFTWARE ENGINEER";
  const titleF = title || "The essential guide to Competitive Programming";
  const descriptionB =
    description ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ";
  const tagList = tags.length > 0 ? tags : ["UI/UX", "Development"];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-6">
      <Link href={`/blog/${_id}`}>
        <hr className="border-[#D7D7D7] w-[90%] mx-auto mt-8" />
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 pt-6">
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <img
                className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                src={imageSrc}
                alt="Author"
              />
              <div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                  <p className="font-semibold text-md md:text-lg">
                    {authorName}
                  </p>
                  <p className="text-[#868686] text-sm md:text-base">
                    Apr 16, 2022
                  </p>
                </div>
                <p className="text-[#9C9C9C] font-semibold text-sm md:text-base">
                  {authorRole}
                </p>
              </div>
            </div>
            <div className="pt-5">
              <p className="font-bold text-xl md:text-2xl tracking-wide">
                {titleF}
              </p>
              <p className="text-[#737373] font-light text-sm md:text-base leading-relaxed pt-3">
                {descriptionB}
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {tagList.map((tag, index) => (
                  <button
                    key={index}
                    className="bg-[#F5F5F5] rounded-full py-1 px-4 text-[#8E8E8E] text-sm md:text-base font-semibold"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              className="w-full h-[200px] md:w-[400px] md:h-[250px] object-cover"
              src={image}
              alt={title}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
