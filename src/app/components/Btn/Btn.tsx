// importando estilização
import style from './Btn.module.css'

export default function Btn(props:any) {
    
    return (
        <input className={style.Btn} type='button' value={props.value}/>
    )
}