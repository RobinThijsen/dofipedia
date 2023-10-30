import Fieldset from "@/components/Fieldset"
import Button from "@/components/Button"

import { POST } from "@/app/api/comment/route"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"

export default async function Comments(props: { item_id: string }) {
    const session = await getServerSession(authOptions)

    const handleAddComment = async (formData: FormData) => {
        'use server'
        const body = {
            content: formData.get('comment'),
            author_email: session?.user?.email,
            item_id: props.item_id
        }
        const res = await POST({
            body: JSON.stringify(body)
        })

        console.log(res)
    }

    return (
        <form action={ handleAddComment }>
            <Fieldset label="Commenter" type="text" id="comment" placeholder="Cet item est useless..." />
            <Button variant="standard" type="submit" content="Commenter" />
        </form>
    )
}