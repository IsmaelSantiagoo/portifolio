// importando módulos
import { useState } from 'react'

// importando estilização
import style from './Input.module.css'

export default function Input(props:any) {

    const [value, setValue] = useState<string>('')

    return (
        <input className={style.Input} type={props.type} placeholder={props.placeholder} onChange={(e) => setValue(e.target.value)}/>
    )
}