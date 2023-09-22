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

export default async function Effect(props: { effectFrom: string, effectTo: string, effectId: string}) {

    return (
        <>
            {
                props.effectTo != "0"
                    ? <li>{ `${props.effectFrom} à ${props.effectTo} ${await getName(props.effectId)}` }</li>
                    : <li>{ `${props.effectFrom} ${await getName(props.effectId)}` }</li>
            }
        </>
    )
}