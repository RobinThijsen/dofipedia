import type { ChangeEventHandler } from "react"

export default function Fieldset(props: { label: string; variant?: string; onChangeFunction?: ChangeEventHandler<HTMLInputElement>; type: string; id: string; placeholder: string; errorValue?: string }) {

    return (
        <fieldset className={props.variant}>
            <label>{props.label}</label>
            <input onChange={props.onChangeFunction} type={props.type} id={props.id}
                   placeholder={ props.placeholder ? props.placeholder : "" } required />
            <p className="error-field">{ props.errorValue }</p>
        </fieldset>
    )
}