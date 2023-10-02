import Link from "next/link";

const getItemSets = async (itemSetId: string) => {
    const res = await fetch(`http://api.dofusdb.fr/item-sets?id=${itemSetId}`)
    return res.json()
}

export default async function Sets(props) {
    const itemSet = await getItemSets(props.itemSetId)

    return (
        <article>
            {
                itemSet.data.map((set) => (
                    <>
                        <p><strong>{set.name.fr}</strong></p>
                        <ul>
                            {
                                set.items.map((item) => (
                                    <li>
                                        <Link href={`/item/${item.id}`}>
                                            <img src={ item.imgset[0].url } />
                                            <span>{ item.name.fr }</span>
                                        </Link>
                                    </li>))
                            }
                        </ul>
                    </>
                ))
            }
        </article>
    )
}