import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";


export const metadata: Metadata = { title: "About Seun", description: "Biography of Oluseun (Seun) Odusanya: British-Nigerian young leader, UN Women UK Community Member, Pan-African Youth Parliament representative and Theirworld Global Ambassador." };

export default function AboutPage() {
  return (
    <>
      <PageHero word="About" label="About Seun" title="Young leader. Advocate. Mentor." intro="Championing youth empowerment, gender equality and social impact, with a particular interest in Africa&rsquo;s development and the role of diaspora engagement." />
      <section className="sec white"><div className="wrap">
      <div className="fx">
      <div className="prose">
      <p className="lab">Biography</p>
      <h2 className="t">Seun&rsquo;s story</h2>
      <p>Oluseun (Seun) Odusanya is an award winning, British-Nigerian young leader and international speaker who is deeply passionate about youth empowerment, gender equality and creating social impact both locally and globally. She holds a First-Class degree in Management, Politics and International Relations from Lancaster University (2017&ndash;2021), including a year in industry.</p>
      <p>Seun works in local government in Greater Manchester, where she has supported the Mayor in delivering community engagement and participation, using data, intelligence and insights to inform communications and policy. She now contributes to initiatives supporting children and young people across Greater Manchester.</p>
      </div>
      <div className="fx-media"><Photo name="burnham" alt="Seun in discussion at a Greater Manchester roundtable" /></div>
      </div>
      <div className="fx rev">
      <div className="prose">
      <p>Seun advances change through a combination of international advocacy and community initiatives. She is a Community Member of UN Women UK, represents Nigeria in the Pan-African Youth Parliament and is a Theirworld Global Ambassador, collaborating with a network of advocates to drive change through action. She is also an active member of the Common Futures Conversations community at Chatham House, working with other young people from around the world to discuss policy ideas and engage with policymakers. Alongside this, she volunteers as a King&rsquo;s Trust Youth Mentor, supporting secondary school students across Greater Manchester to build confidence and achieve their aspirations.</p>
      <p>A key part of Seun&rsquo;s leadership is using her connection to the diaspora to create lasting social impact. Growing up in the UK while remaining deeply invested in Nigeria has shaped her sense of responsibility to use her opportunities and networks to make a difference. Over the years, this has included raising funds to support an orphanage, tackling environmental challenges through beach clean-up initiatives and participating in community outreach to support vulnerable communities. Seun&rsquo;s long-term ambition is to advance the economic empowerment of women and young people in Nigeria.</p>
      <p>In recognition of her leadership potential across her academic, professional and volunteering experiences, she was named one of the most outstanding Black university students in Britain, and recently recognised as a finalist on two separate occasions for her achievement, dedication and contribution inspiring future generations.</p>
      </div>
      <div className="fx-media"><Photo name="portrait-blue" alt="Portrait of Seun Odusanya in a blue blazer" /></div>
      </div>
      </div></section>

      <section className="sec dark" id="interests"><div className="wrap">
      <p className="lab">Areas of interest</p>
      <h2 className="t">What she works on</h2>
      <div style={{ marginTop: '30px' }}>
      <div className="ar"><h3>Youth Empowerment</h3><p>Seun is passionate about creating opportunities for the next generation of young people to develop their potential, build confidence and shape their futures. Through her professional work, mentoring and international advocacy, she champions youth empowerment both locally and globally.</p><Link href="/contact">Work with her &rarr;</Link></div>
      <div className="ar"><h3>Gender Equality</h3><p>Seun is passionate about championing gender equality, empowering women and girls, and ensuring they have the opportunities and support to reach their full potential. She brings this commitment to life through charitable initiatives and community projects.</p><Link href="/impact#warif">Her projects &rarr;</Link></div>
      <div className="ar"><h3>Diaspora Engagement</h3><p>Her experiences as a British-Nigerian woman, growing up in the UK while remaining deeply invested in Nigeria, have shaped her sense of responsibility to use her opportunities and networks to make a difference. At 16 she organised a cake sale at her local church in Manchester, raising more than double her target to support an orphanage in Lagos.</p><Link href="/impact#diaspora">Read more &rarr;</Link></div>
      <div className="ar"><h3>Social Impact</h3><p>Seun is keen to deepen her understanding of how organisations can make a positive difference in society and create lasting social impact. She has explored this through participating in various voluntary initiatives.</p><Link href="/impact#nigeria">Read more &rarr;</Link></div>
      </div></div></section>

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
