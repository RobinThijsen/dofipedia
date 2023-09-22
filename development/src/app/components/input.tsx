export default function Input(props) {

    return(
        <fieldset>
            <input type={props.type} id={props.id} name={props.name} />
            <label>{props.name}</label>
        </fieldset>
    )
}