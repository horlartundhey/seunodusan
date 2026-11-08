import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Cta() {
  return (
    <section className="cta">
      <div className="wrap">
        <div className="big">Let&apos;s talk.</div>
        <p>Speaking invitations, collaborations and press enquiries are all welcome.</p>
        <div className="btns">
          <Link className="btn dk" href="/contact">Get in touch</Link>
          <a className="btn line" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
