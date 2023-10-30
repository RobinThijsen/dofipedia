import Item from "@/components/Item"
import Link from "next/link"

const getData = async (categoryId: string) => {
    const res = await fetch(`https://api.dofusdb.fr/items?typeId=${ categoryId }&$limit=50`)
    return res.json()
}

const getCharacteristics = async () => {
    const res = await fetch(`https://api.dofusdb.fr/characteristics?$limit=100`)
    return res.json()
}

export default async function Page({ params }: { params: { categoryId: string } }) {
    const data = await getData(params.categoryId)
    const characteristics = await getCharacteristics()

    return (
        <main className="listes">
            <section>
                <h2>Filtre</h2>
                <ul>
                    {
                        characteristics.data.map((characteristic, index) => <li key={ index }><Link href={`/test/${ characteristic.id }`}>{ characteristic.name.fr }</Link></li>)
                    }
                </ul>
            </section>
            <section className="list-container">
                <ul>
                    { data.data.map((d) => (
                        <Item
                            id={ d.id }
                            img={ d.imgset[1].url }
                            name={ d.name.fr }
                            level={ d.level }
                            type={ d.type.name.fr }
                            description={ d.description.fr }
                        />
                    ))}
                </ul>
            </section>
        </main>
    )
}