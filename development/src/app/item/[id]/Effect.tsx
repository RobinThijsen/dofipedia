const getEffect = async (effectId: string) => {
    const res: Response = await fetch(`https://api.dofusdb.fr/characteristics?id=${effectId}`)
    return res.json()
}

const getName = async (effectId: string) => {
    const effect = await getEffect(effectId)
    const name = []
    effect.data.map((ef) => {
        name.push(ef.name.fr)
    })
    return name
}

export default async function Effect(props: { effectFrom: number, effectTo: number, effectId: string}) {

    return (
        <li>
            {`${props.effectFrom} à ${props.effectTo} ${await getName(props.effectId)}`}
        </li>
    )
}