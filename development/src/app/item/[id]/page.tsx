const getData = async (id: string) => {
    const res= await fetch(`https://api.dofusdb.fr/items?id=${ id }`)
    return res.json()

}

export default async function Item({ params }: { params: { id: string } }) {
    const data = await getData(params.id)

    return (
        <>
            {data.data.map((d) => (
                <>
                    <img src={ d.imgset[1].url } alt={ d.name.fr } />
                    <h1>{ d.name.fr }</h1>
                    <p>{ d.price } kama</p>
                    <p>Niveau: { d.level }</p>
                    <p>Type: { d.type.name.fr }</p>
                    <p>Description: { d.description.fr }</p>
                </>
            ))}
        </>
    )
}