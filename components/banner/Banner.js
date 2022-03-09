import style from './banner.module.scss'

export default function Banner () {
    const Illustration = () => {

        return (
            <div className={style.illustration}>
                <Content/>
                <div className={style.filter}/>
                <img src='/assets/img/banner.jpg'/>
            </div>
        )
    }

    const Content = () => {

        return (
            <div className={style.content}>
                <h1>Accélérer votre performance énergétique durable</h1>
                <p>Pour faire des économies d’énergie et développer les énergies renouvelables, l’état peut vous aider pour atteindre les objectifs communs.</p>
                <button>En savoir plus</button>
            </div>
        )
    }

    return (
        <section className={style.banner}>
            <Illustration/>
        </section>
    )
}