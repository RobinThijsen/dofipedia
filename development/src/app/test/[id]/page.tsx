import Item from "@/components/Item";

const getData = async (id: string) => {
    const res = await fetch(`https://api.dofusdb.fr/items?effectId[$ne]=${ id }`)
    return res.json()
}

const Test = async (params: { id: string }) => {
    const datas = await getData(params.id)

    return <main className="listes">
        <section className="list-container">
            <ul>
            {
                datas.data.map((data) => <Item id={ data.id } img={ data.imgset[0].url } name={ data.name.fr } description={ data.description.fr } level={ data.level } type={ data.type.name.fr } />)
            }
            </ul>
        </section>
    </main>
}

export default Test