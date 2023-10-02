import Background from '../../../../public/images/background-item.jpg'
import Image from "next/image"
import Link from "next/link"
import Sets from "@/components/sets"
import Effect from "@/components/Effect"

const getData = async (id: string) => {
    const res= await fetch(`https://api.dofusdb.fr/items?id=${ id }`)
    return res.json()
}

export default async function Item({ params }: { params: { id: string } }) {
    const data: Promise<any> = await getData(params.id)

    const styling= {
        backgroundImage: `url(${Background.src})`
    }

    return (
        <main className="item" style={styling}>
            <section>
                {data.data.map((d) => (
                <>
                    <article>
                        <figure>
                            <img src={ d.imgset[1].url } alt={ d.name.fr } />
                        </figure>
                        <div>
                            <h2>{ d.name.fr }</h2>
                            <ul>
                                <li><strong>Niveau:</strong> { d.level }</li>
                                <li><strong>Type:</strong> <Link href={ "/listes/" + d.typeId } >{ d.type.name.fr }</Link></li>
                                <li><strong>Prix:</strong> { d.price } <Image src="/images/kamas.png" width="14" height="18" alt="kama picture" /></li>
                            </ul>
                        </div>
                    </article>
                    { d.effects.length > 1 || (d.effects.length == 1 && d.effects[0].characteristic != -1)
                        ? <article>
                            <p><strong>Effects</strong></p>
                            <ul>
                                { d.effects.map(async (effect) => (<Effect effectId={effect.characteristic} effectFrom={effect.from} effectTo={effect.to} />)) }
                            </ul>
                        </article>
                        : false
                    }
                    <article>
                        <p><strong>Description</strong></p>
                        <p>{ d.description.fr }</p>
                    </article>
                    <Sets itemSetId={d.itemSetId} />
                </>
                ))}
            </section>
            <section></section>
        </main>
    )
}