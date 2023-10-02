import Image from "next/image";
import BackgroundLadder from "../../public/images/background-classement.jpg"
import button from '../../public/images/btn-play1-over.png'

const getDataClass = async () => {
    const res = await fetch(`https://api.dofusdb.fr/breeds?$limit=20`)
    return res.json()
}

export default async function Home() {
    const data = await getDataClass()

    const styling = {
        backgroundImage: `url(${button.src})`
    }

    return (
    <main className="home">
        <section
            className="portal"
        >
            <Image
                src="/images/zaap/back.png"
                alt="brakmar"
                width="1200"
                height="753"
            />
            <Image
                className="light-zaap-aura"
                src="/images/zaap/zaap-light-ray.png"
                alt="aura"
                width="695"
                height="695"
            />
            <Image
                className="light-zaap"
                src="/images/zaap/zaap-light.png"
                alt="portal"
                width="416"
                height="416"
            />
            <Image
                className="default-zaap"
                src="/images/zaap/zaap.png"
                alt="empty cadrant"
                width="1200"
                height="590"
            />
            <Image
                className="open-zaap"
                src="/images/zaap/zaap-open.png"
                alt="empty-light-cadrant"
                width="1200"
                height="590"
            />
            <Image
                src="/images/zaap/front.png"
                alt="front"
                width="1200"
                height="407"
            />
            <a style={styling} className="btn-img" href="https://www.dofus.com/fr/prehome" target="_blank">vers dofus</a>
        </section>
        <section className="class-list">
            <h2>Classes</h2>
            <div className="class">
                {data.data.map((i, index) => (
                    <figure key={index}>
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
                alt="background ladder"/>
        </section>
    </main>
  );
}