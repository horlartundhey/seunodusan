"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";

/** Opens the visitor's email app with the message filled in. Swap for a form service if you want server-side delivery. */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="f" onSubmit={onSubmit}>
      <label htmlFor="name">
        Your name
        <input id="name" name="name" autoComplete="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label htmlFor="email">
        Your email
        <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label htmlFor="message">
        Message
        <textarea id="message" name="message" placeholder="Tell Seun about the event, project or enquiry" value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <div className="btns">
        <button className="btn" type="submit" style={{ cursor: "pointer", fontFamily: "inherit" }}>
          Open in my email app
        </button>
      </div>
      <small>This opens your email app with the message filled in, addressed to Seun.</small>
    </form>
  );
}
