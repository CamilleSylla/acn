import Section from "../templates/Section/Section";
import style from "./accordion.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const accordionData = [
  {
    title: "Chauffage",
    desc: "Le chauffage est un pôle énergivore s’il est mal maitrisé il peut nous couter très chère, un Français sur cinq est en situation de précarité énergétique ACF peut vous aider à faire ce choix, notamment grâce à un bilan énergétique complet et gratuit.",
  },
  {
    title: "Eau chaude sanitaire",
    desc: `Il est parfois nécessaire d'obtenir un conseil de qualité en vue de réaliser des travaux. En effet, la question "quel système choisir ?" n'a pas de réponse toute faite. La gamme de solutions de production d’eau chaude dans chaque habitation présente des spécificités et l'occupant doit faire des choix : faut-il opter pour une solution Et prendre le parti des énergies renouvelables ?\n
        ACN peut vous aider à faire ce choix, notamment grâce à un bilan énergétique complet et gratuit.`,
  },
  {
    title: "Isolation",
    desc: `Plusieurs raisons rendent nécessaire l’isolation thermique d’un logement :\n
        • Améliorer le confort thermique
        • Réaliser des économies
        • Augmenter sa valeur`,
  },
  {
    title: "Électricité",
    desc: `De nombreux matériels de production d’électricité peuvent aujourd’hui être installés chez vous, que vous logiez dans une maison ou en appartement.\n Plusieurs solutions vertes sont de même à la disposition des foyers qui veulent être autonomes sur le plan énergétique sans polluer la planète.`,
  },
];

export default function AccordionComponent() {
  const Content = () => {
    return (
      <article className={style.content}>
        <div className={style.container}>
          <span>Nos activités</span>
          <h1>ACN couvre un bon nombre de domaine</h1>
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor nisi, egestas in accumsan egestas, semper ac ante. Integer sit amet congue metus.\n\nSed commodo, leo eget mattis semper, dui nunc aliquam erat, id vehicula turpis neque eget lacus. Ut vehicula tempus mauris, id tristique velit condimentum sit amet. Fusce vel semper nisl. Duis semper,"
            }
          </p>
        </div>
      </article>
    );
  };

  const AccordionContent = () => {
    return (
      <div className={style.accordion}>
        <Accordion>
          {accordionData.map((el, i) => {
            return (
              <AccordionItem key={el.title}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className={style.accordion_title}>
                      {el.title}
                      <img src="/assets/icons/downarrow.svg" />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>{el.desc}</p>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    );
  };

  return (
    <Section>
      <div className={style.wrapper}>
        <Content />
        <AccordionContent />
      </div>
    </Section>
  );
}
