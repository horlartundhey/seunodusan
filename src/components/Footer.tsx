import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="top">
          <div>
            <Link className="logo" href="/">
              Seun<b>.</b>Odusanya
            </Link>
            <p style={{ color: "#8fa39a", marginTop: 12, maxWidth: "34ch" }}>
              Award-winning young leader, changemaker and international speaker.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/impact">Impact</Link></li>
              <li><Link href="/speaking">Speaking</Link></li>
              <li><Link href="/recognition">Recognition</Link></li>
              <li><Link href="/press">Press &amp; Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li>Based in the United Kingdom</li>
            </ul>
          </div>
        </div>
        <div className="bot">
          <span>&copy; {new Date().getFullYear()} {SITE.name}</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
