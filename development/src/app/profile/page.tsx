'use client'
import { useSession } from "next-auth/react"
import Link from "next/link";

export default function Profile() {
    const {data:session} = useSession()

    const styling = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return <main
    style={ styling }
    >
        <code>{JSON.stringify(session)}</code>
        <Link href={`/stuff/creation`}>Créer un stuff</Link>
    </main>
}