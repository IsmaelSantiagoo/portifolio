import Link from 'next/link'
import style from './NavBar.module.css'
import ThemeChanger from '../theme-changer/ThemeChanger'
import { useEffect, useState } from 'react'
import dev_icon from '../../../../public/dev_icon.png'
import profile_img from '../../../../public/profile.png'

export default function NavBar() {

    const [data, setData] = useState(null);

    useEffect(() => {

    },[data])

    const [showTheme, setShowTheme] = useState(false)

    const displayTheme = () => {
        if (showTheme) {
            setShowTheme(false)
        } else {
            setShowTheme(true)
        }
    }

    let navlinks = [
        {
            id: 0,
            name: 'INÍCIO',
            route: 'inicio'
        },
        {
            id: 1,
            name: 'SERVIÇOS',
            route: 'servicos'
        },
        {
            id: 2,
            name: 'HABILIDADES',
            route: 'habilidades'
        },
        {
            id: 3,
            name: 'PROJETOS',
            route: 'projetos'
        },
        {
            id: 4,
            name: 'CONTATO',
            route: 'contato'
        }
    ]

    return (
        <div className={style.NavBar} >
            <img className={style.Logo} src={dev_icon.src} alt='Logomarca'/>
            <ul>
                {/* {
                    navlinks.map((e) => (
                        <li key={e.id}><Link key={e.id} href={`/${e.route}`}>{e.name}</Link></li>
                    ))
                } */}
                <Link href='/servicos'>Teste</Link>
            </ul>
            <img className={style.Profile} src={profile_img.src} alt='Imagem de perfil' onClick={displayTheme}/>
            <ThemeChanger display={showTheme?'flex':'none'}/>
        </div>
    )
}