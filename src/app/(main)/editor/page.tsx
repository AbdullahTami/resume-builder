import { Metadata } from "next";
import React from "react";
import ResumeEditor from "./_components/ResumeEditor";

export const metadata: Metadata = {
  title: "Design your resume",
};

export default function page() {
  return <ResumeEditor />;
}
