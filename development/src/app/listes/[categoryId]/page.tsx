import Link from "next/link"
const getData = async (categoryId: string) => {
    const res = await fetch(`https://api.dofusdb.fr/items?typeId=${ categoryId }&$limit=50`)
    return res.json()
}

export default async function Page({ params }: { params: { categoryId: string } }) {
    const data = await getData(params.categoryId)
    const loader = <li>Loading...</li>

    return (
        <main className="listes">
            <section>

            </section>
            <section>
                <ul>
                    { data.data.map((d) => (
                        <li>
                            <Link href={`/item/${d.id}`}>
                                <figure>
                                    <img src={ d.imgset[1].url } alt="image item" />
                                    <p><strong>{ d.name.fr }</strong></p>
                                </figure>
                                <article>
                                    <p><strong>Type:</strong> { d.type.name.fr }</p>
                                    <p><strong>Description:</strong> { d.description.fr }</p>
                                </article>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}