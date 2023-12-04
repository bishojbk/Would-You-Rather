"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home: React.FC = () => {
  const [firstHalf, setFirstHalf] = useState("");
  const [secondHalf, setSecondHalf] = useState("");

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://would-you-rather-api.abaanshanid.repl.co/",
    };

    try {
      const response = await axios.request(options);
      let data = response.data?.data;

      const halves = data.split(" or ");
      const firstHalf = halves[0].trim();

      const replacedFirstHalf = firstHalf
        .replace("Would you rather", "")
        .trim();
      console.log(data);

      const capitalizedFirstHalf =
        replacedFirstHalf.charAt(0).toUpperCase() + replacedFirstHalf.slice(1);

      const secondHalf = halves[1].trim();

      const capitalizedSecondHalf =
        secondHalf.charAt(0).toUpperCase() + secondHalf.slice(1);

      setFirstHalf(capitalizedFirstHalf);
      setSecondHalf(capitalizedSecondHalf);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBoxClick = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center gap-8 h-screen bg-black">
      <h2 className="text-6xl text-white">WOULD YOU RATHER?</h2>
      <div className={"flex items-center justify-center gap-8"}>
        <div
          className="bg-[#55bfe7] h-52 w-96 text-center text-black flex items-center justify-center text-2xl px-16 text-shadow cursor-pointer"
          onClick={handleBoxClick}
        >
          {firstHalf}
        </div>
        <div className="absolute text-white text-5xl h-32 w-32 rounded-full bg-black flex items-center justify-center text-shadow">
          OR
        </div>
        <div
          className="bg-[#e02c2d] h-52 w-96 text-center text-white flex items-center justify-center text-2xl px-16 text-shadow cursor-pointer"
          onClick={handleBoxClick}
        >
          {secondHalf}
        </div>
      </div>
    </main>
  );
};

export default Home;
