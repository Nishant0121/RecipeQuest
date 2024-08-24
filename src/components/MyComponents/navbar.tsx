"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { AppWrapper, useAppContext } from "@/context/context";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const { querry, setQuerry } = useAppContext();

  const handleSearch = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuerry(e.target.value);
  };

  const handleSubmit = () => {
    console.log(querry);
  };

  return (
    <div className="flex w-full items-center justify-between">
      <div>RecipeQuest</div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search" onChange={handleSearch} />
        <Button type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </div>
    </div>
  );
}
