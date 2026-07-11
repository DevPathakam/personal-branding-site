"use client";

import { useEffect } from "react";

interface TestUSeClientProps {
  data: unknown;
}
export const TestUseClient = ({ data }: TestUSeClientProps) => {
  useEffect(() => {
    console.log("Data ==>> ", data);
  }, [data]);
  return <></>;
};
