import Link from "next/link"

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const getData = async (categoryId: string) => {
    const res = await fetch(`https://api.dofusdb.fr/items?typeId=${ categoryId }&$limit=50`)
    return res.json()
}

export default async function Page({ params }: { params: { categoryId: string } }) {
    const data = await getData(params.categoryId)

    return (
        <main className="listes">
            <section>
                <h2>Filtre</h2>
            </section>
            <section className="list-container">
                <ul>
                    { data.data.map((d) => (
                        <li>
                            <Link href={`/item/${d.id}`}>
                                <figure>
                                    <img src={ d.imgset[1].url } alt="image item" />
                                </figure>
                                <article>
                                    <p><strong>{ d.name.fr }</strong></p>
                                    <p><strong>Niveau:</strong> { d.level }</p>
                                    <p><strong>Type:</strong> { d.type.name.fr }</p>
                                    <p><strong>Description:</strong> { d.description.fr }</p>
                                </article>
                                <FontAwesomeIcon icon={ faArrowUpRightFromSquare } />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}