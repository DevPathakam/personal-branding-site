"use client";

import { Icon } from "@iconify/react";
import { useRef } from "react";

export const ViewResumeButton = () => {
  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);
  const handleDownload = async () => {
    try {
      const response = await fetch("/docs/resume.pdf");
      if (!response.ok) {
        throw new Error(`Fetch failed: ${response.status}`);
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      if (downloadLinkRef.current) {
        downloadLinkRef.current.href = blobUrl;
        downloadLinkRef.current.click();
      }

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Asset download failed:", error);
    }
  };
  return (
    <>
      <a
        ref={downloadLinkRef}
        className="hidden"
        download="Aman_Pathak_Resume.pdf"
      />
      <button
        onClick={handleDownload}
        className="flex gap-1 hover:bg-brand-primary-highlight hover:cursor-pointer p-1"
      >
        <Icon icon="material-symbols:download" className="hidden md:block text-[18px]" />
        <span>View Resume</span>
      </button>
    </>
  );
};
