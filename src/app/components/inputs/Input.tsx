import style from './Input.module.css'
import { useState } from 'react'

export default function Input(props:any) {

    const [value, setValue] = useState<string>('')

    return (
        <input className={style.Input} type={props.type} placeholder={props.placeholder} onChange={(e) => setValue(e.target.value)}/>
    )
}