import Link from "next/link";
import Photo from "./Photo";
import Tick from "./Tick";

export default function HomeHero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <h1 className="nm" id="hero-title" aria-label="Oluseun (Seun) Odusanya">
          <span className="f">Seun</span>
          <span className="o">Odusanya</span>
        </h1>
        <Photo
          name="cut-blue"
          className="cut"
          alt="Seun Odusanya smiling in a blue blazer"
          priority
          sizes="(max-width: 900px) 86vw, 560px"
        />
        <div className="l">
          <p className="kick">British-Nigerian &middot; Manchester</p>
          <p className="big">
            Award-winning young leader. <span>Changemaker.</span> International speaker.
          </p>
          <p className="d">
            Championing youth empowerment, gender equality and social impact, with a particular interest in
            Africa&rsquo;s development and the role of diaspora engagement in driving positive change locally and
            globally.
          </p>
        </div>
        <div className="r">
          <ul className="themes">
            <li>Youth Empowerment</li>
            <li>Gender Equality</li>
            <li>Diaspora Engagement</li>
            <li>Social Impact</li>
          </ul>
          <div className="btns">
            <Link className="btn" href="/speaking">Book Seun to speak</Link>
            <Link className="btn ghost" href="/about">Her story</Link>
          </div>
        </div>
      </section>
      <Tick />
    </>
  );
}
