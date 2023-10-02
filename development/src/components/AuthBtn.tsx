'use client'
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { router } from "next/client"

export default function AuthBtn() {
    const session = useSession()

    return (
        <ul className="left">
            {
                session.data == null
                    ? <>
                        <li><Link href={`/api/auth/login`}>connexion</Link></li>
                        <li><Link href={`/api/auth/register`}>nous rejoindre</Link></li>
                    </>
                    : <>
                        <li><Link href={`/profile`}>{ session.data?.user?.name }</Link></li>
                        <li><a type="button" onClick={ async () => {
                            await signOut()
                            await router.push('/')
                        } }>se déconnecter</a></li>
                    </>
            }
        </ul>
    )
}