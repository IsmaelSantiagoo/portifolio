// importando estilização
import style from './Content.module.css'

export default function Content(props:any) {

    return (
        <div className={style.Content}>
            {props.children}
        </div>
    )
}