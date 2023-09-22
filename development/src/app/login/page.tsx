import Image from "next/image";
import Link from "next/link";
import BackgroundLogin from "../../../public/images/BG-login.jpeg"

export default function login(){

    const styleLogin = {
        backgroundImage: `url(${BackgroundLogin.src})`
    }

    return(
        <main className="login" style={styleLogin}>
            <section>
                <Link href={`/`}>
                    <Image src="/images/logo.png" alt="logo" width={135} height={94} />
                </Link>
                <h2>CONNEXION</h2>
                <form action="#" method="post">
                    <fieldset>
                        <input type="email" id="email" name="email" />
                        <label>email</label>
                    </fieldset>
                    <fieldset>
                        <input type="password" id="password" name="password" />
                        <label>password</label>
                    </fieldset>
                    <div>
                        <p><Link href={`/password-forget`}>Password forgot ?</Link></p>
                        <p>Pas encore inscrit ?<Link href={`/register`}>Rejoins nous</Link></p>
                    </div>
                    <button type="submit">login</button>
                </form>
            </section>
        </main>
    );
}