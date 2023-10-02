import Link from "next/link";
const getData = async (itemId: string) => {
    const res = await fetch(`https://api.dofusdb.fr/items?id=${itemId}`)
    return res.json()
}

export default async function Item(props) {
    const data = getData(props.itemId)
    console.log(data)

    return (
        <li>
            {
                data.data.map((item) => (
                <Link href={`/item/${item.id}`}>
                    <figure>
                        <img src={ item.imgset[1].url } alt="image item" />
                        <p><strong>{ item.name.fr }</strong></p>
                    </figure>
                    <article>
                        <p><strong>Type:</strong> { item.type.name.fr }</p>
                        <p><strong>Description:</strong> { item.description.fr }</p>
                    </article>
                </Link>
                ))}
        </li>
    )
}