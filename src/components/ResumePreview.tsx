import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import React from "react";

interface ResumePreview {
  resumeData: ResumeValues;
  className?: string;
}

export default function ResumePreview({
  resumeData,
  className,
}: ResumePreview) {
  return (
    <div
      className={cn(
        "aspect-[210/297] h-fit w-full bg-white text-black",
        className,
      )}
    >
      <h1 className="p-6 text-3xl font-bold">
        This text should change with the container div
      </h1>
    </div>
  );
}
