"use client";

import { ReactNode, useState } from "react";

export default function SideMenu({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <button type="button" onClick={() => setOpen((prev) => !prev)}>
          toggle
        </button>
        {open && <div>Open!!!</div>}
      </div>
      {children}
    </>
  );
}
