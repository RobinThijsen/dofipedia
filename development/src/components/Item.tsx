import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

export default function Item(props: { id: string, img: string, name: string, level: string, type: string, description: string }) {

    return (
        <li>
            <Link href={`/item/${props.id }`}>
                <figure>
                    <img src={ props.img } alt="image item" />
                </figure>
                <article>
                    <p><strong>{ props.name }</strong></p>
                    <p><strong>Niveau:</strong> { props.level }</p>
                    <p><strong>Type:</strong> { props.type }</p>
                    <p><strong>Description:</strong> { props.description }</p>
                </article>
                <FontAwesomeIcon icon={ faArrowUpRightFromSquare } />
            </Link>
        </li>
    )
}