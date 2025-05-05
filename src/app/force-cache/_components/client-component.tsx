"use client";

import { ReactNode } from "react";

export default function ClientComponent({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Client Component</h1>
      <p>This is a client component.</p>
      {children}
    </div>
  );
}
