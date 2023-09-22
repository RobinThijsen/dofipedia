import Image from "next/image";
import Link from "next/link";

export default function login(){


    return(
        <main className="register">
            <section className="register-page">
                <div className="bg-register">
                    <Image
                        src="/images/BG-register.jpeg"
                        alt="background register page"
                        width={2250}
                        height={1440}
                    />
                </div>
                <div className="form-register">
                    <div className="logo">
                        <Image src="/images/logo.png" alt="logo" width={150} height={150}></Image>
                    </div>
                    <h3>NOUS REJOINDRE</h3>
                    <form action="#" method="post">
                        <div>
                            <input type="text" id="name" name="name" placeholder="Name"/>
                        </div>
                        <div>
                            <input type="text" id="pseudo" name="pseudo" placeholder="Pseudo"/>
                        </div>
                        <div>
                            <input type="email" id="email" name="email" placeholder="email"/>
                        </div>
                        <div>
                            <input type="password" id="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="pass-link">
                            <p>Déjà inscrit ?<Link href={`/login`}>connecte toi</Link></p>
                        </div>
                        <div className="btn">
                            <button type="submit">Terminer l'inscription</button>
                        </div>
                    </form>
                </div>

            </section>
        </main>
    );
}