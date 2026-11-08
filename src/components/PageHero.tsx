import Tick from "./Tick";

type Props = { word: string; label: string; title: string; intro: string };

export default function PageHero({ word, label, title, intro }: Props) {
  return (
    <>
      <section className="page-hero" data-word={word}>
        <div className="wrap">
          <p className="lab">{label}</p>
          <h1>{title}</h1>
          <p className="intro">{intro}</p>
        </div>
      </section>
      <Tick />
    </>
  );
}
