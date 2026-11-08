import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";


export const metadata: Metadata = { title: "Speaking", description: "Book Seun Odusanya for virtual and in-person speaking. Panellist at the Africa Infrastructure Roundtable 2026 and the Youth Wealth and Future Africa Summit." };

export default function SpeakingPage() {
  return (
    <>
      <PageHero word="Speaking" label="Speaking" title="On stage and on the record" intro="Seun welcomes opportunities that align with her skills, values and interests, and is currently accepting virtual and in-person speaking engagements." />
      <section className="sec white"><div className="wrap">
      <div className="fx">
      <div className="prose">
      <p className="lab">Africa Infrastructure Roundtable 2026</p>
      <h2>Diaspora, infrastructure and the continent&rsquo;s future</h2>
      <p>Seun was selected as a panellist for the Africa Infrastructure Roundtable, contributing to discussions on the role of the diaspora in the continent&rsquo;s future.</p>
      <p>She brought the discussion back to community inclusion and youth participation, highlighting the need to intentionally involve people who are often excluded from development conversations, particularly young Africans and local communities directly affected by infrastructure decisions. Drawing from her experience in local government participation and youth advocacy, she emphasised that meaningful development must be community-centred, participatory, and rooted in lived experiences.</p>
      <p><a href="https://www.africantechjournal.com/articles/the-africa-infrastructure-roundtable" target="_blank" rel="noopener noreferrer">African Tech Journal</a> &nbsp;&middot;&nbsp; <a href="https://guardian.ng/business-services/firm-to-host-africa-infrastructure-roundtable-on-diaspora-investment/" target="_blank" rel="noopener noreferrer">The Guardian Nigeria</a></p>
      </div>
      <div className="fx-media"><Photo name="flyer-air" alt="Africa Infrastructure Roundtable, Manchester Edition flyer" style={{ maxWidth: '480px', marginInline: 'auto' }} /></div>
      </div>
      <div className="gallery" style={{ marginTop: 'clamp(40px,6vw,72px)' }}>
      <Photo name="speak-portrait" alt="Seun speaking on the panel" style={{ objectPosition: '50% 20%' }} />
      <Photo name="panel-three" alt="Panellists at the Africa Infrastructure Roundtable" />
      <Photo name="speak-two" alt="Seun in conversation with a fellow panellist" />
      </div>
      <div className="quotecards" style={{ marginTop: '18px', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))' }}>
      <Photo name="card-lime" alt="Summary of Seun's contribution on community inclusion and youth participation" />
      <Photo name="card-dark" alt="Summary of Seun's contribution on inclusive development systems" />
      <Photo name="card-orange" alt="Seun's statement on her long-term ambition for Africa's development" />
      </div>
      </div></section>

      <section className="sec"><div className="wrap">
      <div className="prose">
      <p className="lab">Panel</p>
      <h2 className="t">Youth Wealth and Future Africa Summit</h2>
      <p>Seun was also a panellist at the Youth Wealth and Future Africa Summit, discussing ways to equip young Africans with insight to thrive in today&rsquo;s evolving economic landscape.</p>
      </div></div></section>

      <section className="sec dark"><div className="wrap">
      <div className="fx">
      <div className="prose">
      <p className="lab">Talk &middot; Women At Risk International Foundation</p>
      <h2>Men As Allies (MAA) programme</h2>
      <p>Seun had the privilege to speak with the men who stepped forward in the Women At Risk International Foundation (WARIF) Men As Allies (MAA) programme.</p>
      <p>Inspired by the UN&rsquo;s 16 Days of Activism against Gender-Based Violence theme, &ldquo;UNiTE to End Digital Violence Against All Women and Girls&rdquo;, the future of Nigeria&rsquo;s digital space must be safe and inclusive, with men playing a vital role in shaping it.</p>
      <p>As she shared in the video, ending violence, physical or digital, requires action from everyone: governments, communities, and organisations. But it especially needs men who are willing to challenge inequality, confront harmful norms, and help prevent violence against women and girls.</p>
      </div>
      <div className="fx-media"><Photo name="maa-class" alt="Men As Allies programme participants" /></div>
      </div></div></section>

      <section className="sec white"><div className="wrap">
      <div className="fx rev">
      <div className="fx-media"><Photo name="hull-event" alt="Seun at the Wilberforce Institute with two guests" style={{ maxWidth: '420px', marginInline: 'auto' }} /></div>
      <div className="prose">
      <p className="lab">Event</p>
      <h2>Black History Month event at the Wilberforce Institute</h2>
      <div className="video" style={{ margin: '18px 0' }}><iframe src="https://www.youtube-nocookie.com/embed/7vw4IDWBqIg" title="Seun Odusanya video" allow="accelerometer; encrypted-media; picture-in-picture" allowFullScreen></iframe></div>
      <p><a href="https://youtu.be/7vw4IDWBqIg" target="_blank" rel="noopener noreferrer">Watch on YouTube</a></p>
      </div></div></div></section>

      <section className="sec stone"><div className="wrap" style={{ textAlign: 'center' }}>
      <h2 className="t">Invite Seun to speak</h2>
      <p className="sub" style={{ marginInline: 'auto' }}>Seun welcomes opportunities that align with her skills, values and interests. She is currently accepting virtual and in-person speaking engagements.</p>
      <div className="btns" style={{ justifyContent: 'center' }}><Link className="btn dk" href="/contact">Send an invitation</Link></div>
      </div></section>
      <Cta />
    </>
  );
}
