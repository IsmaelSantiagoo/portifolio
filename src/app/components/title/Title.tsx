import style from './Title.module.css'

export default function Title(props:any) {
    return (
        <div className={style.Title}>
            {props.children}
        </div>
    )
}