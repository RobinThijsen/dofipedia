export default function Button(props: {variant: string, type: string | undefined, content: string}) {
    return(
        <button className={props.variant} type={props.type}>{props.content}</button>
    )
}