import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";


export const metadata: Metadata = { title: "Press & Blog", description: "Press coverage, features and blog posts by and about Seun Odusanya." };

export default function PressPage() {
  return (
    <>
      <PageHero word="Press" label="Press & blog" title="In the news, and in her words" intro="Features, coverage and writing from Seun&rsquo;s time at Lancaster University to the Africa Infrastructure Roundtable." />
      <section className="sec white"><div className="wrap">
      <p className="lab">Press</p>
      <h2 className="t">In the news</h2>
      <ul className="rows">
      <li><a href="https://myfernandez.com/2026/03/22/women-history-month-celebrating-manchester-based-seun-odusanya-gender-equality-and-social-impact-advocate-young-leader/" target="_blank" rel="noopener noreferrer"><b>Celebrating Manchester Based Young Leader Seun Odusanya<small>My Fernandez &middot; Women&rsquo;s History Month, March 2026</small></b><span>Feature</span></a></li>
      <li><a href="https://portal.lancaster.ac.uk/portal/news/article/graduation-celebrations-for-future-leader-seun" target="_blank" rel="noopener noreferrer"><b>Graduation celebrations for Future Leader Seun<small>Lancaster University</small></b><span>News</span></a></li>
      <li><a href="https://www.lancaster.ac.uk/news/six-lancaster-university-stars-picked-out-as-future-leaders" target="_blank" rel="noopener noreferrer"><b>Six Lancaster University stars picked out as Future Leaders<small>Lancaster University</small></b><span>News</span></a></li>
      <li><a href="https://www.africantechjournal.com/articles/the-africa-infrastructure-roundtable" target="_blank" rel="noopener noreferrer"><b>The Africa Infrastructure Roundtable<small>African Tech Journal</small></b><span>Event</span></a></li>
      <li><a href="https://guardian.ng/business-services/firm-to-host-africa-infrastructure-roundtable-on-diaspora-investment/" target="_blank" rel="noopener noreferrer"><b>Firm to host Africa Infrastructure Roundtable on diaspora investment<small>The Guardian Nigeria</small></b><span>Event</span></a></li>
      <li><a href="https://bentelevision.com/bbi-achievement-recognition-awards-2026-celebrates-global-excellence-leadership-and-community-service-in-historic-final-edition/" target="_blank" rel="noopener noreferrer"><b>BBI Achievement Recognition Awards 2026 celebrates global excellence<small>BEN Television</small></b><span>Awards</span></a></li>
      </ul></div></section>

      <section className="sec"><div className="wrap">
      <div className="fx">
      <div className="fx-media"><Photo name="bhm-spotlight" alt="Black History Month spotlight on Seun Odusanya, GM Black Tech Expo" style={{ maxWidth: '420px', marginInline: 'auto' }} /></div>
      <div className="prose">
      <p className="lab">Spotlight</p>
      <h2>Black History Month, GM Black Tech Expo</h2>
      <p>Seun was featured in the GM Black Tech Expo&rsquo;s Black History Month spotlight, speaking about listening to people and placing their voices at the heart of decision-making.</p>
      </div></div>
      <div className="fx rev">
      <div className="fx-media pair"><Photo name="clip-stockport" alt="Stockport Express: Schoolgirl's mission of mercy" /><Photo name="clip-charity" alt="Taking Stock: Overseas charity mission" /></div>
      <div className="prose">
      <p className="lab">From the archive</p>
      <h2>Where it started</h2>
      <p>Seun&rsquo;s first charity mission to Nigeria, as a Lower Sixth pupil, made the local news and her school magazine.</p>
      <p><a href="https://stockportgrammar.co.uk/wp-content/uploads/2019/03/Taking-Stock-62.pdf" target="_blank" rel="noopener noreferrer">Taking Stock (PDF)</a></p>
      </div></div>
      </div></section>

      <section className="sec dark"><div className="wrap">
      <p className="lab">Blog</p>
      <h2 className="t">Writing and reflections</h2>
      <div style={{ marginTop: '26px' }}>
      <div className="ar"><h3 style={{ fontSize: 'clamp(24px,2.6vw,34px)' }}>AI, Gender, and Digital Safety in Lagos: Reflecting on Digital Violence Against Women</h3><p>Seun&rsquo;s reflections on the LSE Africa Summit.</p><a href="https://lseafricasummit.substack.com/p/ai-gender-and-digital-safety-in-lagos" target="_blank" rel="noopener noreferrer">Read &rarr;</a></div>
      <div className="ar"><h3 style={{ fontSize: 'clamp(24px,2.6vw,34px)' }}>My Placement Year</h3><p>Lancaster University Management School blog.</p><a href="https://www.lancaster.ac.uk/lums/blogs/my-placement-year-seun-odusanya" target="_blank" rel="noopener noreferrer">Read &rarr;</a></div>
      <div className="ar"><h3 style={{ fontSize: 'clamp(24px,2.6vw,34px)' }}>My Degree: Management, Politics and International Relations</h3><p>Lancaster University Management School blog.</p><a href="https://www.lancaster.ac.uk/lums/blogs/my-degree-management-politics-and-international-relations" target="_blank" rel="noopener noreferrer">Read &rarr;</a></div>
      <div className="ar"><h3 style={{ fontSize: 'clamp(24px,2.6vw,34px)' }}>My Duke of Edinburgh Story</h3><p>Shared on the DofE website.</p><a href="https://www.dofe.org/your-story/stories/" target="_blank" rel="noopener noreferrer">Read &rarr;</a></div>
      </div></div></section>
      <Cta />
    </>
  );
}
