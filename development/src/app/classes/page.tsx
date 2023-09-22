import Image from "next/image"

const getData = async () => {
    const res = await fetch("https://api.dofusdb.fr/breeds?$limit=20")
    return res.json()
}

export default async function Page() {
    const data = await getData()
    console.log(data)

    return (
        <>
            <ul>
                {data.data.map((d) => (
                    <li>
                        <h3>{ d.longName.fr }</h3>
                        <img
                            src={ d.img }
                            alt={ d.shortName.fr + " image"}
                            width="100"
                            height="100"
                        />
                        <p>{ d.gameplayDescription.fr }</p>
                        <p>{ d.description.fr }</p>
                    </li>
                ))}
            </ul>
        </>
    );
}