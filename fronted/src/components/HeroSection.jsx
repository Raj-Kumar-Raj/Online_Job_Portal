import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="bg-gradient-to-b from-white via-[#f3e8ff] to-[#e9d5ff] py-20">
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10 px-4">
          <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
            India’s #1 Career Destination
          </span>
          <h1 className="text-5xl font-bold leading-tight">
            Discover Your Next <br />
            <span className="text-[#6A38C2]">Big Opportunity</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Whether you're just starting or looking to level up, we've got jobs
            that fit your passion and purpose. Start your journey today.
          </p>
          <div className="flex w-full max-w-xl shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto bg-white">
            <input
              type="text"
              placeholder="Search by job title, skill, or company"
              onChange={(e) => setQuery(e.target.value)}
              className="outline-none border-none w-full py-3 px-4 rounded-l-full text-gray-800"
            />
            <Button
              onClick={searchJobHandler}
              className="rounded-r-full bg-[#6A38C2] hover:bg-[#5a2dab]"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
