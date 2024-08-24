"use client";

import { useAppContext } from "@/context/context";
import React from "react";

export default function Page() {
  const { querry, setQuerry } = useAppContext();
  return <div> About {querry}</div>;
}
