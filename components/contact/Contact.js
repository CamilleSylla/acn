import Section from '../templates/Section/Section'
import style from './contact.module.scss'

export default function Contact () {

    const Content = () => {
        return (
            <article className={style.content}>
            <div className={style.container}>
              <span>Votre projet</span>
              <h1>Etablissons un premier contact</h1>
              <p>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor nisi, egestas in accumsan egestas, semper ac ante. Integer sit amet congue metus."
                }
              </p>
            </div>
          </article>
        );
      };
    const Form = () => {
        return (
            <div className={style.form}>
                <input type="text" placeholder='Nom et prénom'/>
                <input type="email" placeholder='Email'/>
                <input type="tel" placeholder='N° téléphone'/>
                <textarea placeholder='Votre message'/>
                <button>Envoyer</button>
            </div>
        )
    }

    return (
        <Section>
            <div className={style.wrapper}>
<Content/>
<Form/>
            </div>
        </Section>
    )
}