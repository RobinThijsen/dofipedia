import Link from "next/link"

const getData = async () => {
    const res = await fetch("https://api.dofusdb.fr/items?$limit=20")
    return res.json()
};

export default async function Home() {
    const data = await getData()

  return (
    <>
        <h1>Data</h1>
        <section>
            <ul>
                {data.data.map((d) => (
                        <Link href={`/item/${ d.id }`}>
                            <p>{ d.name.fr }</p>
                            <img src={ d.img } alt="wi" />
                            <p>{ d.description.fr }</p>
                        </Link>
                    ))}
            </ul>
        </section>
    </>
  );
}
