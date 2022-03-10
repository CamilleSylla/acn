import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import style from "./steps.module.scss";

const stepsdata = [
  {
    title: "MATÉRIELS DE DERNIÈRE TECHNOLOGIE",
    content:
      "Grâce à la domotique vous gérez la consommation de votre maison où vous êtes et quand vous voulez !",
    imgSrc: "/assets/icons/tech.svg",
  },
  {
    title: "TECHNICIENS DE HAUT NIVEAU",
    content:
      "Des professionnels riches en expérience et hautement qualifiés au service des particuliers",
    imgSrc: "/assets/icons/worker.svg",
  },
  {
    title: "QUALITÉ DE SERVICE NATIONALE",
    content:
      "Avec nos technologies avancées on veille à optimiser vos énérgies en respectants les dispositifs fixés par la loi.",
    imgSrc: "/assets/icons/quality.svg",
  },
  {
    title: "UNE ASSISTANCE PERMANENTE",
    content:
      "Nous avons des techniciens hautement qualifiés dans le térritoire national qui peuvent intervenir 24h/24",
    imgSrc: "/assets/icons/assistance.svg",
  },
];

export default function Steps() {
  const [activeImg, setActiveImg] = useState(0);
  const animationStart = useRef();
  const illustrationAnim = useRef();
  const stepAnim = useRef();

  const StepsSection = () => {
    return (
      <div ref={stepAnim} className={style.steps_container}>
        {stepsdata.map((el, i) => {
          return (
            <div key={el.title} className={style.content_wrapper}>
              <article key={i} className={style.step}>
                <span data-index={i}>{i + 1}</span>
                <h1>{el.title}</h1>
                <p>{el.content}</p>
              </article>
              <div className={style.bubble}>
                <div className={style.circle}>
                  <img src={el.imgSrc}/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scrollDivs = gsap.utils.toArray(stepAnim.current);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animationStart.current,
        start: "top+=15% bottom",
        end: "bottom-=30% top",
        scrub: 0.5,
      },
    });
    scrollDivs.forEach((div, i) => {
      let span = gsap.utils.toArray("span", div);
      console.log(span);
      span.forEach((span, i) => {
        tl.to(span, {
          // autoAlpha: 0,
          color: "blue",
          background: "white",
        });
      });
    });
  }, []);

  return (
    <section ref={animationStart} className={style.wrapper}>
      <div className={style.container}>
        <h1>
          Les etapes / forces de d'une installation avec ACN (Ce titre doit etre
          changé)
        </h1>
        <StepsSection />
      </div>
    </section>
  );
}
