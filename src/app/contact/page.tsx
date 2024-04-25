"use client";

import { FormEvent } from "react";

export default function Contact() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formDataValues = {
      name: formData.get("moo"),
    };

    const response = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(formDataValues),
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <section className="hello">
        <div className="container">
          <h1>
            Let&apos;s work
            <br />
            <span>together</span>
          </h1>
          <h2>Connect</h2>
        </div>
      </section>
      <form onSubmit={onSubmit}>
        <input type="text" name="moo" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
