const getData = async (categoryId: string) => {
    const res = await fetch(`https://api.dofusdb.fr/items?typeId=${ categoryId }&$limit=50`)
    return res.json()
}

export default async function Page({ params }: { params: { categoryId: string } }) {
    const data = await getData(params.categoryId)

    return (
        <main>
            <section>
                <ul>
                    { data.data.map((d) => ( <li>{ d.name.it }</li> ))}
                </ul>
            </section>
        </main>
    )
}