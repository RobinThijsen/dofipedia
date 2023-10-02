'use client'
import { useSession } from "next-auth/react"

export default function Profile() {
    const {data:session} = useSession()

    return <code>{JSON.stringify(session)}</code>
}