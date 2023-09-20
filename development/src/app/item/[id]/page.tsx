import Background from '../../../../public/images/background-item.jpg'

const getData = async (id: string) => {
    const res= await fetch(`https://api.dofusdb.fr/items?id=${ id }`)
    return res.json()
}

const getCharacteristics = async (itemId: string) => {

}

export default async function Item({ params }: { params: { id: string } }) {
    const data = await getData(params.id)

    const styling = {
        backgroundImage: `url(${Background.src})`
    }

    return (
        <main className="item" style={styling}>
            <section>
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
            </section>
        </main>
    )
}