import Background from '../../../../public/images/background-item.jpg'
import Image from "next/image"
import Link from "next/link"

import Sets from "@/components/sets"
import Effect from "@/components/Effect"
import Comments from "@/components/Comments"
import Comment from "@/components/Comment"

import {DELETE, GET} from "@/app/api/comment/route"
import { GET_USER } from "@/app/api/user/route"

const getData = async (id: string) => {
    const res= await fetch(`https://api.dofusdb.fr/items?id=${ id }`)
    return res.json()
}

const getComments = async (item_id: string) => {
    const res = await GET({
        body: JSON.stringify({item_id: item_id})
    })
    return res.json()
}

const getName = async (author_id: string): Promise<string[]> => {
    'use server'
    const user = await GET_USER({
        body: JSON.stringify({ user_id: parseInt(author_id) })
    })
    const User = await user.json()
    return User?.user?.name
}

export default async function Item({ params }: { params: { id: string } }): Promise<JSX.Element> {
    const data: Promise<any> = await getData(params.id)
    const comments = await getComments(params.id)

    const styling= {
        backgroundImage: `url(${Background.src})`
    }



    return (
        <main className="item" style={styling}>
            <section>
                { data.data.map((d: { imgset: [{ url: string }] | undefined, name: { fr: string }, level: string | number, price: string | number, typeId: string | number, type: { name: { fr: string }}, effects: [{ from: string | number, to: string | number, characteristic: string | number }], description: { fr: string }, itemSetId: string | number } ) => (
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
                                { d.effects.map(async (effect: { from: string | number, to: string | number, characteristic: string | number }): Promise<JSX.Element> => (<Effect effectId={ effect.characteristic } effectFrom={effect.from} effectTo={effect.to} />)) }
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
            <section>
                <h2>Commentaire</h2>
                <ul>
                    {
                        comments.comments.map( async (comment, index) => <Comment key={ index } comment={ comment } user={ await getName(comment.comment_id) } />)
                    }
                </ul>
                <Comments item_id={ params.id } />
            </section>
        </main>
    )
}