'use client';

import { Icon } from "@iconify/react";

export const ToggleSidebar = () => {
  return (
    <button
      className="bg-transparent hover:cursor-pointer hover:opacity-50"
      onClick={() => console.log("Toggle sidebar...")}
    >
      <Icon icon={"ph:sidebar-simple-fill"} className="text-[23px]" />
    </button>
  );
};
