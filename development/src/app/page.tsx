import Image from "next/image";
import BackgroundLadder from "../../public/images/background-classement.jpg"
//import {useState} from "react";
//import {useEffect} from "react";


const getDataClass = async () => {
    const res = await fetch(`https://api.dofusdb.fr/breeds?$limit=19`)
    return res.json()
}

export default async function Home() {

    const data = await getDataClass()

    return (
    <main className="home">
        <section className="class-list">
            <h2>Classes</h2>
            <div className="class">
                {data.data.map((i) => (
                    <figure>
                        <Image
                            src={`/images/classes/${i.id}.jpg`}
                            alt="classe"
                            width={300}
                            height={150}
                        />
                        <article>
                            <h3>{i.longName.fr}</h3>
                        </article>
                    </figure>
                ))}
            </div>
            <div className="button-ShowMore">
                <button>Show More</button>
            </div>
        </section>
        <section className="ladder">
            <div>

            </div>
            <Image
                src={BackgroundLadder}
                alt="background ladder"
            />
        </section>
    </main>
  );
}
