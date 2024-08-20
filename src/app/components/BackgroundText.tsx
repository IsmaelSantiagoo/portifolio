// importando estilização
import style from './BackgroundText.module.css'

export default function BackgroundText(props:any) {

    return (
        <div className={style.Content}>
            <h1 className={style.BackgroundText}>{props.text}</h1>
        </div>
    )
}