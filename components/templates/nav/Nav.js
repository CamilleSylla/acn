import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import style from './nav.module.scss'
const navItems = [
    {
        label : "Solution",
        link : "solution"
    },
    {
        label : "Nos forces",
        link : "solution"
    },
    {
        label : "Nos activités",
        link : "solution"
    },
    {
        label : "Informations",
        link : "solution"
    },
    {
        label : "Contact",
        link : "solution"
    },
]
export default function Nav () {

    const [menu, setMenu] = useState(false)
    const menuRef = useRef()
    const navRef = useRef()

    useEffect(() => {
        const body = document.getElementById('app')
        console.log(body);
            if (window.matchMedia("(min-width: 991.98px)").matches) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.to(navRef.current, {
                background : "#F2F2F2",
                color : "var(--primary-color)",
                borderBottom: "4px solid var(--primary-color)",
                scrollTrigger : {
                    trigger : '#app',
                    start : "top+=200 top",
                    end : "top+=300 top",
                    scrub : 1,
                    markers: true
                }
            })
        
        }

        if (window.matchMedia("(max-width: 991.98px)").matches) {
            if (menu === true) {
                menuRef.current.style.opacity = 1
            } else {
                menuRef.current.style.opacity = 0
            }
        }
    }, [menu])

    return( 
        <nav ref={navRef} className={style.nav}>
            <div className={style.container}>
                <img className={style.logo} src="/assets/logo/ACN.svg"/>
                <div onClick={() => setMenu(!menu)} className={style.hamburger}>
                   {menu === false ? <img className={style.ham_img} src="/assets/icons/hamburger.svg"/> : <img className={style.cross_img} src="/assets/icons/cross.svg"/>} 
                </div>
                <ul ref={menuRef}>
                    {navItems.map((el, i) => {
                        return (
                            <li key={el.label + i}>
                                {el.label}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}