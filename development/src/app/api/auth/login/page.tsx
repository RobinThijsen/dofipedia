'use client'
/* ---------- IMPORT ---------- */
// import react component
import Fieldset from "@/components/Fieldset"
import Button from "@/components/Button"

// import next component
import Image from "next/image"
import Link from "next/link"

// import background image object
import BackgroundImage from "../../../../../public/images/BG-login.jpeg"

// import useState from react
import { useState } from "react"

// import next-auth client sided react hook
import { signIn, useSession } from "next-auth/react"

// import next-auth client sided navigation hook
import { useRouter, useSearchParams } from "next/navigation"

// react component
export default function Login() {
    const errorParams = useSearchParams().get('error')
    // hook state of value of input
    const [userInfos, setUserInfos] = useState({ email: "", password: "" })
    const [error, setError] = useState(() => {
        if (typeof errorParams == "string") return "Email ou mot de passe non valide"
        else return ""
    })

    // create router and session to check if user connect
    //      redirect if true
    const router = useRouter()
    const {data: session} = useSession()

    if (session) router.push('/')

    // function handleSubmit when submitting form
    const handleSubmit = async (e) => {
        e.preventDefault()

        // response of signIn function
        const res = await signIn('credentials', {
            email: userInfos.email,
            password: userInfos.password
        })
        console.log(res)
    }

    // style of background image
    const styling= {
        backgroundImage: `url(${BackgroundImage.src})`
    }

    // JSX.HTMLElement
    return (
        <main className="login" style={ styling }>
            <section>
                <Link href={`/`}><Image src="/images/logo.png" alt="logo dofipedia" width={150} height={100} /></Link>
                <h2>Connexion</h2>
                <form onSubmit={ (e) => handleSubmit(e) }>
                    <Fieldset
                        onChangeFunction={ (e) => setUserInfos({ ...userInfos, email: e.target.value }) }
                        id="email"
                        type="email"
                        label="Email"
                        placeholder="johnsmith@gmail.com" />
                    <Fieldset
                        onChangeFunction={ (e) => setUserInfos({ ...userInfos, password: e.target.value }) }
                        id="password"
                        type="password"
                        label="Mot de passe"
                        placeholder="*********" />
                    <p className="error-field">{ error }</p>
                    <div>
                        <Link href="/password">Mot de passe oublié ?</Link>
                        <p>Pas encore inscrit(e) ?<Link href="/api/auth/register">M'inscrire</Link></p>
                    </div>
                    <Button variant="standard" type="submit" content="connexion" />
                </form>
            </section>
        </main>
    )
}