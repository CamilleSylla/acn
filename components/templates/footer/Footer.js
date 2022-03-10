import style from './footer.module.scss'

const social = [
    {
        label : "instagram",
        icon : "/assets/icons/ig.svg",
        link : "#"
    },
    {
        label : "facebook",
        icon : "/assets/icons/fb.svg",
        link : "#"
    },
    {
        label : "twitter",
        icon : "/assets/icons/tw.svg",
        link : "#"
    },
]

export default function Footer () {

    const FlexDiv = ({children}) => {

        return <div className={style.flex_div}>{children}</div>
    }

    return (
        <footer className={style.wrapper}>
            <div className={style.container}>
                <FlexDiv>
                    <p>Copyright ACN 2022, all rights reserved.</p>
                </FlexDiv>
                <FlexDiv>
                    <div className={style.icons}>
                        {social.map((el, i) => {
                            return <img src={el.icon}/>
                        })}
                    </div>
                </FlexDiv>
                <FlexDiv>
                    <p style={{textAlign: "right"}}>Mentions légales</p>
                </FlexDiv>
            </div>
        </footer>
    )
}