import Link from "next/link"
import Image from "next/image"

import Fieldset from "@/components/Fieldset"
import Button from "@/components/Button"

import BackgroundImage from "../../../../../public/images/BG-register.jpeg"

import { redirect } from "next/navigation"
import { POST } from "@/app/api/user/route"

const matchingEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const matchingPassword = (password: string): { message: string; status: number } | boolean => {
    if (!password.match(".*[a-z].*")) return { message: "Le mot de passe doit contenir 1 minuscule", status: 208 }
    else if (!password.match(".*[A-Z].*")) return { message: "Le mot de passe doit contenir 1 majuscule", status: 207 }
    else return true
}

export default function Page(): JSX.Element {


    const handleSubmit = async (formData: FormData) => {
        "use server"

        const data = {
            name: formData.get('name'),
            pseudo: formData.get('pseudo'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('cPassword')
        }

        const res: Response = await POST({
            body: JSON.stringify(data)
        })

         if (res.ok) redirect('/api/login')
         else console.log(res.json())
    }

    const styling = {
        backgroundImage: `url(${BackgroundImage.src})`
    }

    return (
        <main className="register" style={styling}>
            <section>
                <Link href={`/`}><Image src="/images/logo.png" alt="logo dofipedia" width={150} height={100}/></Link>
                <h2>Nous rejoindre</h2>
                <form action={handleSubmit}>
                    <Fieldset
                        variant="red"
                        label="Nom"
                        type="text"
                        id="name"
                        placeholder="John Smith" />
                    <Fieldset
                        variant="red"
                        label="Pseudo"
                        type="text"
                        id="pseudo"
                        placeholder="JJSmith" />
                    <Fieldset
                        variant="red"
                        id="email"
                        type="email"
                        label="Email"
                        placeholder="johnsmith@gmail.com" />
                    <Fieldset
                        variant="red"
                        id="password"
                        type="password"
                        label="Mot de passe"
                        placeholder="***********"/>
                    <Fieldset
                        variant="red"
                        id="cPassword"
                        type="password"
                        label="Confirme ton mot de passe"
                        placeholder="***********"/>
                    <div>
                        <p>Pas encore inscrit(e) ?<Link href="/api/auth/login">Me connecter</Link></p>
                    </div>
                    <Button variant="standard red" type="submit" content="terminer l'inscription"/>
                </form>
            </section>
        </main>
    )
}