import Image from "next/image";
import Link from "next/link";

export default function login(){


    return(
        <main className="login">
            <section className="login-page">
                <div className="form-login">
                    <div className="logo">
                        <Image src="/images/logo.png" alt="logo" width={150} height={150}></Image>
                    </div>
                    <h3>CONNEXION</h3>
                    <form action="#" method="post">
                        <div>
                            <input type="email" id="email" name="email" placeholder="email"/>
                        </div>
                        <div>
                            <input type="password" id="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="pass-link">
                            <p><Link href={`/`}>Password forgot ?</Link></p>
                            <p>Pas encore inscrit ?<Link href={`/register`}>Rejoins nous</Link></p>
                        </div>
                        <div className="btn">
                            <button type="submit">LOGIN</button>
                        </div>
                    </form>
                </div>
                <div className="bg-login">
                    <Image
                        src="/images/BG-login.jpeg"
                        alt="background login page"
                        width={2250}
                        height={1440}
                    />
                </div>

            </section>
        </main>
    );
}