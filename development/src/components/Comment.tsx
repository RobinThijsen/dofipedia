import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"

const Comment = (
    props: {
        comment: {
            comment_id: string,
            content: string
        },
        user: string
    }) => {
    // @ts-ignore
    const session = getServerSession(authOptions)
    console.log(session)

    return <li>{ `${ props.comment.content } - ${ props.user }` }<Link href={ `/items/update/${ props.comment.comment_id }` }>
        <FontAwesomeIcon icon={faPencil} />
    </Link></li>
}

export default Comment