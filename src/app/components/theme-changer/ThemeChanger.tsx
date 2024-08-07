import style from './ThemeChanger.module.css'
import { useState } from 'react'

export default function ThemeChanger(props:any) {

    const [themeName, setThemeName] = useState(false)

    const setTheme = () => {

        if (themeName) {
            setThemeName(false)
        } else {
            setThemeName(true)
        }
    }

    return (
        <div className={style.Switcher} style={{display: props.display}}>
            <label className={style.Switch}>
                <input id="theme-switcher" type="checkbox" onClick={setTheme}/>
                <span className={style.Slider}></span>
            </label>
            <p>{themeName?'Tema claro':'Tema escuro'}</p>
        </div>
    )
}