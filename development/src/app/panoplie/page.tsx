import Link from "next/link"

const getData = async () => {
    const res = await fetch("https://api.dofusdb.fr/item-sets?$limit=5")
    return res.json()
}

export default async function Page() {
    const data = await getData()

    return (
        <>
            {
                data.data.map((d) => (
                    <ul>
                        {
                            d.items.map((item) => (
                                <li><Link href={`/item/${ item.id }`}>{ item.name.fr }</Link></li>
                            ))
                        }
                    </ul>
                ))
            }
        </>
    )
}