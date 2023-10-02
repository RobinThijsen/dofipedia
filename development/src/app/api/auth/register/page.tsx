'use client'
import * as zod from "zod"

import Link from "next/link"
import Image from "next/image"

import Fieldset from "@/components/Fieldset"
import Button from "@/components/Button"

import BackgroundImage from "../../../../../public/images/BG-register.jpeg"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

const matchingEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const matchingPassword = (password: string): { message: string; status: number } | boolean => {
    if (!password.match(".*[a-z].*")) return { message: "Le mot de passe doit contenir 1 minuscule", status: 208 }
    else if (!password.match(".*[A-Z].*")) return { message: "Le mot de passe doit contenir 1 majuscule", status: 207 }
    else return true
}

export default function Page() {
    // create router and session to check if user connect
    //      redirect if true
    const router = useRouter()
    const { data: session } = useSession()
    if (session) router.push('/')

    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [error, setError] = useState("")
    const [userInfos, setUserInfos] = useState({ name: "", pseudo: "", email: "", password: "", confirmPassword: ""})

    const handleChangeName = e => {
        setUserInfos({ ...userInfos, name: e.target.value })
    }

    const handleChangeEmail = e => {
        if (e.target.value === "") setErrorEmail("")
        else {
            if (matchingEmail(e.target.value)) {
                setUserInfos({...userInfos, email: e.target.value})
                setErrorEmail("")
            } else setErrorEmail("Email non valid")
        }
    }

    const handleChangePseudo = e => {
        setUserInfos({ ...userInfos, pseudo: e.target.value })
    }

    const handleChangePassword = e => {
        const res = matchingPassword(e.target.value)

        if (e.target.value === "") setErrorPassword("")
        else {
            if (typeof res == "boolean") {
                setUserInfos({...userInfos, password: e.target.value})
                setErrorPassword("")
            } else setErrorPassword(res.message)
        }
    }

    const handleChangeConfirmPassword = e => {
        setUserInfos({ ...userInfos, confirmPassword: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            name: userInfos.name,
            pseudo: userInfos.pseudo,
            email: userInfos.email,
            password: userInfos.password,
            confirmPassword: userInfos.confirmPassword
        }

        const res: Response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

         if (res.ok) {
             router.push('/api/auth/login')
         } else {
             if (res.status == 500) setError("Une erreur à été rencontré")
             else if (res.status == 409) setError("Cet utilisateur existe déjà")
         }
    }

    const styling = {
        backgroundImage: `url(${BackgroundImage.src})`
    }

    return (
        <main className="register" style={styling}>
            <section>
                <Link href={`/`}><Image src="/images/logo.png" alt="logo dofipedia" width={150} height={100}/></Link>
                <h2>Nous rejoindre</h2>
                <form onSubmit={handleSubmit}>
                    <Fieldset
                        variant="red"
                        label="Nom"
                        onChangeFunction={ handleChangeName }
                        type="text"
                        id="name"
                        placeholder="John Smith" />
                    <Fieldset
                        variant="red"
                        label="Pseudo"
                        onChangeFunction={ handleChangePseudo }
                        type="text"
                        id="pseudo"
                        placeholder="JJSmith" />
                    <Fieldset
                        errorValue={ errorEmail }
                        variant="red"
                        onChangeFunction={ handleChangeEmail }
                        id="email"
                        type="email"
                        label="Email"
                        placeholder="johnsmith@gmail.com" />
                    <Fieldset
                        errorValue={ errorPassword }
                        variant="red"
                        onChangeFunction={ handleChangePassword }
                        id="password"
                        type="password"
                        label="Mot de passe"
                        placeholder="***********"/>
                    <Fieldset
                        variant="red"
                        onChangeFunction={ handleChangeConfirmPassword }
                        id="cPassword"
                        type="password"
                        label="Confirme ton mot de passe"
                        placeholder="***********"/>
                    <p className="error-field">{ error }</p>
                    <div>
                        <p>Pas encore inscrit(e) ?<Link href="/api/auth/login">Me connecter</Link></p>
                    </div>
                    <Button variant="standard red" type="submit" content="terminer l'inscription"/>
                </form>
            </section>
        </main>
    )
}