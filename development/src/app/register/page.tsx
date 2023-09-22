import Image from "next/image";
import Link from "next/link";
import BackgroundRegister from "../../../public/images/BG-register.jpeg";

export default function login(){

    const styleRegister = {
        backgroundImage: `url(${BackgroundRegister.src})`
    }

    return(
        <main className="register" style={styleRegister}>
            <section>
                <Link href={`/`}>
                    <Image src="/images/logo.png" alt="logo" width={135} height={94} />
                </Link>
                <h2>NOUS REJOINDRE</h2>
                <form action="#" method="post">
                    <fieldset>
                        <input type="name" id="name" name="name" />
                        <label>name</label>
                    </fieldset>
                    <fieldset>
                        <input type="text" id="pseudo" name="pseudo" />
                        <label>pseudo</label>
                    </fieldset>
                    <fieldset>
                        <input type="email" id="email" name="email" />
                        <label>email</label>
                    </fieldset>
                    <fieldset>
                        <input type="password" id="password" name="password" />
                        <label>password</label>
                    </fieldset>
                    <div>
                        <p>Déjà inscrit ?<Link href={`/login`}> Connecte toi</Link></p>
                    </div>
                    <button type="submit">Terminer l'inscription</button>
                </form>
            </section>
        </main>
    );
}