import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import HomeHero from "@/components/HomeHero";

export const metadata: Metadata = { title: { absolute: "Seun Odusanya | Young Leader, Changemaker, International Speaker" }, description: "Oluseun (Seun) Odusanya is an award-winning British-Nigerian young leader and international speaker championing youth empowerment, gender equality and social impact." };

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <section className="sec white"><div className="wrap">
      <p className="lab">About Seun</p>
      <p className="lead">A British-Nigerian young leader who uses her platform for <em>youth empowerment, gender equality</em> and lasting social impact, in Manchester and in Nigeria.</p>
      <dl className="glance">
      <div><dt>Education</dt><dd><b>First-Class degree</b>Management, Politics and International Relations, Lancaster University, 2017&ndash;2021, including a year in industry</dd></div>
      <div><dt>Work</dt><dd><b>Local government</b>Supports the Mayor in Greater Manchester on community engagement, using data and insight to inform policy</dd></div>
      <div><dt>Roles</dt><dd><b>Global advocate</b>UN Women UK, Pan-African Youth Parliament, Theirworld, Chatham House Common Futures, King&rsquo;s Trust mentor</dd></div>
      <div><dt>Recognition</dt><dd><b>Finalist, twice</b>Named among the most outstanding Black university students in Britain</dd></div>
      </dl>
      <div className="btns" style={{ marginTop: '34px' }}><Link className="btn dk" href="/about">Read her full story</Link></div>
      </div></section>

      <section className="sec"><div className="wrap">
      <p className="lab">Impact</p>
      <h2 className="t">Work that shows up in the community</h2>
      <p className="sub">From a Manchester half marathon to beach clean-ups in Lagos, Seun turns her networks into practical support.</p>
      <div className="feat">
      <div className="ph"><Photo name="mcr-medal" alt="Seun with her Manchester Half Marathon medal" /><span>Manchester Half Marathon &middot; 12 Oct 2025</span></div>
      <div className="tx">
      <div className="n">&pound;2,575<small>raised for WARIF</small></div>
      <h3>Supporting survivors of gender-based violence in Nigeria</h3>
      <div className="bar" role="img" aria-label="171 percent of the &pound;1,500 target"><i></i></div>
      <div className="barl"><span>171% of &pound;1,500 target</span><span>105 supporters</span></div>
      <p>The funds backed the Men As Allies programme, which equips around 50 men and boys in local communities to challenge harmful norms and help end violence against women and girls.</p>
      <div className="facts"><div><b>21.5 km</b><span>distance</span></div><div><b>2h 34m</b><span>her first half marathon</span></div></div>
      </div></div>
      <div className="cards">
      <article className="card"><Photo name="orphanage" alt="Seun presenting funds to an orphanage in Lagos" style={{ objectPosition: '50% 25%' }} /><div className="b"><span className="chip">Age 16 &middot; Manchester to Lagos</span><h3>A cake sale for an orphanage</h3><p>Seun organised a cake sale at her local church and raised more than double her target to support an orphanage in Lagos.</p><Link className="arrow go" href="/impact#diaspora">Read more</Link></div></article>
      <article className="card"><Photo name="beach-collage" alt="Elegushi Beach clean-up volunteers" style={{ objectPosition: '50% 12%' }} /><div className="b"><span className="chip">2025 &middot; Sterling One Foundation</span><h3>Elegushi Beach clean-up</h3><p>She helped collect plastic that coastal communities, especially women and youth, recycle into income.</p><Link className="arrow go" href="/impact#nigeria">Read more</Link></div></article>
      <article className="card"><Photo name="beach-collage" alt="Volunteers at Ikoyi Correctional Centre" style={{ objectPosition: '50% 92%' }} /><div className="b"><span className="chip">2025 &middot; Kornerstone Counselling</span><h3>Ikoyi Correctional Centre</h3><p>She listened to inmates&rsquo; stories and handed out food and toiletries in a facility holding around 3,000 people built for 800.</p><Link className="arrow go" href="/impact#nigeria">Read more</Link></div></article>
      </div></div></section>

      <section className="banner">
      <Photo name="air-event" alt="Seun on a panel at the Africa Infrastructure Roundtable" />
      <div className="wrap in"><p className="lab">Speaking</p>
      <h2>Africa Infrastructure Roundtable 2026</h2>
      <p>Seun was selected as a panellist, contributing to discussions on the role of the diaspora in the continent&rsquo;s future. She is accepting virtual and in-person speaking engagements.</p>
      <div className="btns"><Link className="btn" href="/speaking">See her speaking</Link><Link className="btn ghost" href="/contact">Invite Seun</Link></div></div>
      </section>

      <section className="sec deep quote"><div className="wrap">
      <blockquote>Through my work, I have seen how listening to people and placing their voices at the heart of decision-making can lead to better outcomes for communities.</blockquote>
      <cite>Seun Odusanya &middot; Black History Month spotlight, GM Black Tech Expo</cite>
      </div></section>

      <section className="sec white"><div className="wrap">
      <p className="lab">Awards &amp; recognition</p>
      <h2 className="t">Finalist. Mentee. Gold.</h2>
      <ul className="rows">
      <li><Link href="/recognition"><b>Youth Leadership Recognition, 23rd BBI Achievement Recognition Awards</b><span>Finalist &middot; 2026</span></Link></li>
      <li><Link href="/recognition"><b>Civic Leadership, Black Futures Awards</b><span>Finalist &middot; 2026</span></Link></li>
      <li><Link href="/recognition"><b>WIMBIZ Mentoring Programme</b><span>Mentee &middot; 2026</span></Link></li>
      <li><Link href="/recognition"><b>Future Leaders, Powerlist Media</b><span>2020&ndash;21</span></Link></li>
      <li><Link href="/recognition"><b>Gold Duke of Edinburgh Award</b><span>Gold</span></Link></li>
      </ul></div></section>

      <section className="sec stone"><div className="wrap">
      <p className="lab">Associated organisations</p>
      <ul className="orgs">
      <li>UN Women UK<span>Community Member</span></li>
      <li>King&rsquo;s Trust<span>Youth Mentor</span></li>
      <li>Pan-African Youth Parliament<span>Youth Representative</span></li>
      <li>Theirworld<span>Global Ambassador</span></li></ul>
      </div></section>
      <Cta />
    </>
  );
}
