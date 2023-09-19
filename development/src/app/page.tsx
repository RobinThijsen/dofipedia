const getData = async () => {
    const res = await fetch("https://api.dofusdb.fr/items?$limit=20")
    return res.json()
};

export default async function Home() {
    const data = await getData()

  return (
    <main>
        <h1>Data</h1>
        <section>
            <ul>
                {data.data.map((d) => (
                        <li>
                            <p>{ d.name.fr }</p>
                            <img src={ d.img } alt="wi" />
                            <p>{ d.description.fr }</p>
                        </li>
                    ))}
            </ul>
        </section>
    </main>
  );
}
