import style from './section.module.scss'

export default function Section ({children}) {

    return (
        <section className={style.wrapper}>
            <div className={style.content}>
                {children}
            </div>
        </section>
    )
}