import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";


export const metadata: Metadata = { title: "Impact", description: "Seun Odusanya's projects: £2,575 raised for WARIF, Men As Allies, an orphanage in Lagos and three months of volunteering in Nigeria." };

export default function ImpactPage() {
  return (
    <>
      <PageHero word="Impact" label="Seun's projects" title="Work that shows up in the community" intro="From a Manchester half marathon to beach clean-ups in Lagos, Seun turns her networks into practical support." />
      <section className="sec white" id="warif"><div className="wrap">
      <div className="fx">
      <div className="fx-media"><Photo name="mcr-medal" alt="Seun with her Manchester Half Marathon medal" /></div>
      <div className="prose">
      <p className="lab">Project &middot; Gender equality</p>
      <h2>Raised &pound;2,575 supporting survivors of gender-based violence in Nigeria</h2>
      <p>A key milestone was running the Manchester Half Marathon in October 2025, through which Seun raised over &pound;2,500 for Women At Risk International Foundation (WARIF), an organisation dedicated to combating gender-based violence in Nigeria. <a href="https://lnkd.in/p/ey97YsF7" target="_blank" rel="noopener noreferrer">Read her LinkedIn post</a>.</p>
      <p>The funds were used to support the Men As Allies (MAA) programme, designed to partner with around 50 men and boys in local communities to champion gender equality and reduce Violence Against Women and Girls (VAWG). The initiative strives to deconstruct harmful societal norms by equipping men, aged between 18&ndash;35, with the knowledge and skills to adopt gender-equitable attitudes and behaviours.</p>
      </div></div>
      <div className="fx rev">
      <div className="fx-media"><Photo name="maa-collage" alt="Participants in the Men As Allies programme" /></div>
      <div className="prose">
      <p>To complete the programme, participants were required to design a personal commitment to tackle VAWG in their local communities. Some of the most impactful ideas included creating online classes and videos to educate youth on the various forms of VAWG, including physical, sexual, and psychological abuse.</p>
      <p>The MAA programme also aligns with global efforts under the United Nations&rsquo; Sustainable Development Goal 5 to achieve gender equality by 2030, by ending VAWG and harmful practices such as child marriage and female genital mutilation, and ensuring equal access to education and economic opportunities.</p>
      <p>It is within this broader context that WARIF designed the MAA project to engage young men, not as perpetrators, but as protectors and partners in change. Seun has also mobilised young professionals in her network to deliver virtual digital skills training for vulnerable girls in Nigeria.</p>
      </div></div>
      <div className="gallery" style={{ marginTop: 'clamp(40px,6vw,72px)' }}>
      <Photo name="justgiving" alt="WARIF JustGiving page showing &pound;2,575 raised" style={{ objectFit: 'contain', background: '#fff', border: '1px solid var(--line)' }} />
      <Photo name="race-bib" alt="Seun's Manchester Half Marathon race bib" />
      <Photo name="maa-class" alt="Men As Allies programme participants in a workshop" />
      </div>
      </div></section>

      <section className="sec" id="diaspora"><div className="wrap">
      <div className="fx">
      <div className="prose">
      <p className="lab">Project &middot; Diaspora engagement</p>
      <h2>From a church cake sale to a charity mission</h2>
      <p>This began at 16, when Seun organised a cake sale at her local church in Manchester, raising more than double her target to support an orphanage in Lagos. Seun has continued to turn this commitment into tangible impact through mobilising her diaspora network.</p>
      <p>The story was covered by the Stockport Express and her school magazine, Taking Stock, as a Lower Sixth pupil who travelled overseas on an inspiring charity mission.</p>
      <p><a href="https://stockportgrammar.co.uk/wp-content/uploads/2019/03/Taking-Stock-62.pdf" target="_blank" rel="noopener noreferrer">Read the Taking Stock feature (PDF)</a></p>
      </div>
      <div className="fx-media pair"><Photo name="clip-charity" alt="Taking Stock article: Overseas charity mission" /><Photo name="clip-stockport" alt="Stockport Express: Schoolgirl's mission of mercy to help the needy of Nigeria" /></div>
      </div></div></section>

      <section className="sec dark" id="nigeria"><div className="wrap">
      <div className="fx rev">
      <div className="fx-media"><Photo name="beach-collage" alt="Volunteers at the Elegushi beach clean-up and at Ikoyi Correctional Centre" style={{ maxWidth: '420px', marginInline: 'auto' }} /></div>
      <div className="prose">
      <p className="lab">Project &middot; Social impact</p>
      <h2>Three months in Nigeria, 2025</h2>
      <p>In 2025, Seun spent three months in Nigeria, gaining first-hand experience of how organisations are driving positive change within communities.</p>
      <p>One highlight was volunteering with Sterling One Foundation at their Elegushi Beach Cleanup. Plastic pollution is one of Nigeria&rsquo;s most visible environmental challenges, and through their National Beach Adoption Programme, they empower coastal communities, particularly women and youth, to collect and recycle waste. Witnessing how plastic could be transformed into resources that support a circular economy while creating livelihoods was both inspiring and rewarding.</p>
      <p>Seun also volunteered with Kornerstone Counselling Centre at Ikoyi Correctional Centre, where around 3,000 inmates are crammed into facilities designed for only 800. Many of them are serving time for minor offences simply because they cannot afford legal representation. Listening to their stories and distributing essentials like food and toiletries was a deeply humbling experience that reminded her how even simple acts of kindness can restore dignity and hope.</p>
      <p>These experiences reaffirmed her belief in the transformative power of collective, purposeful action, whether tackling environmental challenges or supporting vulnerable communities. Seun believes this is what lies at the heart of lasting social impact.</p>
      </div></div></div></section>
      <Cta />
    </>
  );
}
