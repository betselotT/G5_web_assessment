"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import { Blog } from "@/types/blog";
import Footer from "./components/Footer/Footer";

const Page = () => {
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://a2sv-backend.onrender.com/api/blogs", {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmNkYWQzODliMzM5M2FjN2U3NDIzZTQiLCJuYW1lIjoiQmV0c2Vsb3QgVGVzZmEiLCJyb2xlIjoidXNlciIsImlhdCI6MTcyNDc1NjEwOSwiZXhwIjoxNzI3MzQ4MTA5fQ.XqYvrjW7ibxUmmE-8FAHDFvdGNHhdgM55SWO7C7pBsw",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        setBlogs(result);
        setFilteredBlogs(result); // Initialize filteredBlogs with all blogs
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (blogs) {
      const filtered = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
      setCurrentPage(1); // Reset to the first page when search term changes
    }
  }, [searchTerm, blogs]);

  // Pagination calculation
  const indexOfLastBlog = currentPage * cardsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - cardsPerPage;
  const currentBlogs = filteredBlogs?.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = filteredBlogs
    ? Math.ceil(filteredBlogs.length / cardsPerPage)
    : 1;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <NavBar />
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start w-full px-4 md:px-20 pt-10">
        <p className="text-2xl font-semibold mb-4 md:mb-0">Blogs</p>
        <div className="flex flex-col md:flex-row md:gap-6 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="border border-[#AFAFAF] py-2 px-4 md:px-8 rounded-3xl mb-4 md:mb-0 w-full md:w-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-[#264FAD] text-white py-2 px-5 rounded-3xl w-full md:w-auto">
            + New Blog
          </button>
        </div>
      </div>
      <div className="pt-8 px-4 md:px-20 flex flex-wrap gap-8 justify-center">
        {currentBlogs &&
          currentBlogs.map((blog) => (
            <Card
              key={blog._id}
              _id={blog._id}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              tags={blog.tags}
              author={blog.author}
            />
          ))}
      </div>
      <div className="flex justify-center pt-8 px-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 border rounded-lg ${
              currentPage === index + 1
                ? "bg-[#264FAD] text-white"
                : "bg-white text-[#264FAD]"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="pt-10 px-4">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
