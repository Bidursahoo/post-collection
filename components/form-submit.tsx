"use client";
import React from "react";
import { useFormStatus } from "react-dom";

export default function FormSubmit() {
  const formStatus = useFormStatus();
  if (formStatus.pending) {
    return <p>Creating post...</p>;
  }
  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
