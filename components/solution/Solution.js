import Section from "../templates/Section/Section";
import style from "./solution.module.scss";

export default function Solution() {

  
  const Illustration = () => {
    return (
      <div className={style.illustration}>
        <img src="/assets/img/pompe.png" />
        {/* <img src="/assets/img/aireau.png"/>
                <img src="/assets/img/ro.png"/> */}
      </div>
    );
  };

  const Content = () => {
    return (
      <article className={style.content}>
        <div className={style.container}>
          <span>La solution la plus performante</span>
          <h1>La pompe a chaleur, votre meilleur outil</h1>
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor nisi, egestas in accumsan egestas, semper ac ante. Integer sit amet congue metus.\n\nSed commodo, leo eget mattis semper, dui nunc aliquam erat, id vehicula turpis neque eget lacus. Ut vehicula tempus mauris, id tristique velit condimentum sit amet. Fusce vel semper nisl. Duis semper,"
            }
          </p>
        </div>
      </article>
    );
  };

  return (
    <Section>
      <div className={style.wrapper}>
        <Illustration />
        <Content />
      </div>
    </Section>
  );
}
