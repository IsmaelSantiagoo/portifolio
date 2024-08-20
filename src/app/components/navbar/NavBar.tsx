// importando módulos
import { useState } from 'react'
import Link from 'next/link'

// importando componentes
import ThemeChanger from '../theme-changer/ThemeChanger'

// importando estilização
import style from './NavBar.module.css'

// importando assets
import profile_img from '../../../../public/profile.png'
import dev_icon from './assets/dev_icon.png'

// links
const links = [
    {
        "id": 0,
        "name": "INÍCIO",
        "route": ""
    },
    {
        "id": 1,
        "name": "SERVIÇOS",
        "route": "servicos"
    },
    {
        "id": 2,
        "name": "HABILIDADES",
        "route": "habilidades"
    },
    {
        "id": 3,
        "name": "PROJETOS",
        "route": "projetos"
    },
    {
        "id": 4,
        "name": "CONTATO",
        "route": "contato"
    }
]

export default function NavBar() {

    const [showTheme, setShowTheme] = useState(false)

    const displayTheme = () => {
        setShowTheme(!showTheme)
    }

    return (
        <div className={style.NavBar} >
            <img className={style.Logo} src={dev_icon.src} alt='Logomarca'/>
            <ul className={style.ulMenu}>
                <li>Menu</li>
                <ul className={style.ulLinks}>
                    {
                        links.map((e) => (
                            <li key={e.id}><Link key={e.id} href={`/${e.route}`}>{e.name}</Link></li>
                        ))
                    }
                </ul>
            </ul>
            <img className={style.Profile} src={profile_img.src} alt='Imagem de perfil' onClick={displayTheme}/>
            <ThemeChanger display={showTheme?'flex':'none'}/>
        </div>
    )
}