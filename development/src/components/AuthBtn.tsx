'use client'
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { router } from "next/client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import {redirect} from "next/navigation";

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
                        <li><Link href={`/profile`}>{ session.data.user?.name }</Link></li>
                        <li><Link href={`/shop`}>Boutique</Link></li>
                        <li className="absolute"><a type="button" onClick={ async () => {
                            await signOut()
                            await router.push('/')
                        }}><FontAwesomeIcon icon={faArrowRightFromBracket} /></a></li>
                    </>
            }
        </ul>
    )
}