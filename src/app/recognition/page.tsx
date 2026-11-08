import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";


export const metadata: Metadata = { title: "Awards & Recognition", description: "Awards and recognition for Seun Odusanya: BBI Achievement Recognition Awards finalist, Black Futures Awards finalist, WIMBIZ mentee, Powerlist Future Leaders and Gold Duke of Edinburgh." };

export default function RecognitionPage() {
  return (
    <>
      <PageHero word="Awards" label="Awards & recognition" title="Finalist. Mentee. Gold." intro="Recognised for her achievement, dedication and contribution to inspiring future generations." />
      <section className="sec white"><div className="wrap"><div className="fx">
      <div className="fx-media"><Photo name="award-bbi" alt="Seun holding her award at the BBI Awards" style={{ maxWidth: '440px', marginInline: 'auto' }} /></div>
      <div className="prose"><p className="lab">2026 &middot; Finalist</p><h2>23rd BBI Achievement Recognition Awards</h2><p>Youth Leadership Recognition (Finalist).</p><p><a href="https://bentelevision.com/bbi-achievement-recognition-awards-2026-celebrates-global-excellence-leadership-and-community-service-in-historic-final-edition/" target="_blank" rel="noopener noreferrer">Read the awards coverage</a></p></div></div><div className="fx rev">
      <div className="fx-media"><Photo name="award-finalist-card" alt="Black Futures Awards finalist card for Seun Odusanya" style={{ maxWidth: '440px', marginInline: 'auto' }} /><Photo name="certificate" alt="Black Futures Awards 2026 certificate of recognition" style={{ marginTop: '14px', maxWidth: '440px', marginInline: 'auto' }} /></div>
      <div className="prose"><p className="lab">2026 &middot; Finalist</p><h2>Black Futures Awards</h2><p>Civic Leadership (Finalist). Recognised as a public servant and advocate helping communities influence decision-making. Her work advances youth empowerment and builds trust with public institutions.</p></div></div><div className="fx">
      <div className="fx-media"><Photo name="wimbiz" alt="Seun beside the WIMBIZ display" style={{ maxWidth: '440px', marginInline: 'auto' }} /></div>
      <div className="prose"><p className="lab">2026 &middot; Mentee</p><h2>WIMBIZ Mentoring Programme</h2><p>Seun is a mentee on the 2026 WIMBIZ Mentoring Programme, which exists to inspire and empower women to attain leadership positions in business, management and public service.</p></div></div></div></section>
      <section className="sec"><div className="wrap"><div className="fx">
      <div className="fx-media"><Photo name="future-leaders" alt="Future Leaders 2020-21 magazine cover" style={{ maxWidth: '440px', marginInline: 'auto' }} /></div>
      <div className="prose"><p className="lab">2020&ndash;21</p><h2>Future Leaders, Powerlist Media</h2><p>Named among 150 of the UK&rsquo;s most outstanding African and African Caribbean students and new graduates, and one of six Lancaster University Future Leaders.</p><p><a href="https://www.flipsnack.com/powerfulmedia/future-leaders-2020-21/full-view.html" target="_blank" rel="noopener noreferrer">Read the Future Leaders edition</a> &nbsp;&middot;&nbsp; <a href="https://www.lancaster.ac.uk/news/six-lancaster-university-stars-picked-out-as-future-leaders" target="_blank" rel="noopener noreferrer">Lancaster University news</a></p></div></div><div className="fx rev">
      <div className="fx-media"><Photo name="dofe-story" alt="Seun's Duke of Edinburgh story page" style={{ maxWidth: '440px', marginInline: 'auto' }} /><Photo name="clip-dofe" alt="School magazine report on the Duke of Edinburgh presentation evening" style={{ marginTop: '14px' }} /></div>
      <div className="prose"><p className="lab">Gold</p><h2>Gold Duke of Edinburgh Award</h2><p>Seun embarked on her Duke of Edinburgh (DofE) Award during her time at secondary school and went on to receive her Gold Award. Her presentation evening was reported in the school magazine.</p><p><a href="https://www.dofe.org/your-story/stories/" target="_blank" rel="noopener noreferrer">Her DofE story</a> &nbsp;&middot;&nbsp; <a href="https://stockportgrammar.co.uk/wp-content/uploads/2019/03/Taking-Stock-Issue-67.pdf" target="_blank" rel="noopener noreferrer">Taking Stock, issue 67 (PDF)</a></p></div></div></div></section>
      <Cta />
    </>
  );
}
