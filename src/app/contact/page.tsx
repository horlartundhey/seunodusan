import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Seun Odusanya for speaking invitations, collaborations and press enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        word="Contact"
        label="Contact"
        title="Let&rsquo;s talk"
        intro="Speaking invitations, collaborations and press enquiries are all welcome."
      />
      <section className="sec dark">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <p className="lab">Get in touch</p>
              <h2 className="t">Invitations, collaborations and press</h2>
              <dl className="dl">
                <dt>Email</dt>
                <dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd>
                <dt>Based in</dt>
                <dd>The United Kingdom</dd>
                <dt>LinkedIn</dt>
                <dd><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">Seun Odusanya</a></dd>
                <dt>Instagram</dt>
                <dd><a href={SITE.instagram} target="_blank" rel="noopener noreferrer">@oluseunodusanya</a></dd>
              </dl>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
