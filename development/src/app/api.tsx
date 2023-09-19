async function getData({ setData }) {
    const res = await fetch('https://api.dofusdb.fr/items?$limit=20')

    if (!res.ok ) throw new Error("Failed to fetch data")

    setData(await res.json())
}