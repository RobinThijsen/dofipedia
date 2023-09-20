import Link from "next/link"

const getData = async (categoryId: string) => {
    const res = await fetch(`https://api.dofusdb.fr/items?$limit=50`)
    return res.json()
}

export default async function Page({ params }: { params: { categoryId: string } }) {
    const data = await getData(params.categoryId)

    return (
        <main>
            <section>
                <ul>
                    { data.data.map((i) => (
                        <li>
                            <Link href={`/item/${ i.id }`}>{ i.name.fr }</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}