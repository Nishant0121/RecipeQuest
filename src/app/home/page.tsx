import Navbar from "@/components/MyComponents/navbar";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      {" "}
      Home <Link href="/home/about">Dashboard</Link>
    </div>
  );
}
