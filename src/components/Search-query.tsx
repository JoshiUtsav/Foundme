"use client";

import React, { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { FaArrowUp } from "react-icons/fa";

export default function Chat_Query() {
  const [query, setQuery] = React.useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (query === "") return;

    try {
      const response = await axios.post("http://localhost:3000/api", {
        text: query,
      });

      const result = response?.data?.Text?.matches;

      for (let i = 0; i < result.length; i++) {
        const holder = result[i].id;

        console.log(holder);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center fixed bottom-0 left-0 right-0 p-4 bg-white">
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full max-w-2xl mx-auto space-x-4 bg-gray-100 rounded-full px-4 py-2"
      >
        <input
          type="text"
          placeholder="Search for queries"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500"
        />
        <Button
          type="submit"
          className="text-white rounded-full px-4 py-2"
          disabled={!query.trim()}
        >
          <span className="text-sm font-semibold bg-none">
            <FaArrowUp />
          </span>
        </Button>
      </form>
    </div>
  );
}
