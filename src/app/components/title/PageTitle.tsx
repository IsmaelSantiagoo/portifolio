import style from './PageTitle.module.css'

export default function PageTitle(props:any) {
    return (
        <div className={style.PageTitle}>
            <h1>{props.children}</h1>
        </div>
    )
}