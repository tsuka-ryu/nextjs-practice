"use client";

import { updateCookie } from "../_lib/actions";

export function Form() {
  return (
    <>
      <h2>Form</h2>
      <button onClick={updateCookie}>Submit</button>
    </>
  );
}
