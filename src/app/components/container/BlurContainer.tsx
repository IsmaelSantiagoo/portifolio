import style from './BlurContainer.module.css'

export default function BlurContainer(props:any) {

    return (
        <div className={style.BlurContainer}>
            {props.children}
        </div>
    )
}