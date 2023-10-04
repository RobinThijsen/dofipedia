const getEffect = async (effectId: string | number) => {
    const res: Response = await fetch(`https://api.dofusdb.fr/characteristics?id=${effectId}`)
    return res.json()
}

const getName = async (effectId: string | number): Promise<string[]> => {
    const effect = await getEffect(effectId)
    const name: string[] = []
    effect.data.map((ef: { name: { fr: string } }): void => {
        name.push(ef.name.fr)
    })
    return name
}

export default async function Effect(props: { effectFrom: string | number, effectTo: string | number, effectId: string | number }): Promise<JSX.Element> {

    return (
        <>
            {
                props.effectId != "-1"
                ? props.effectTo != "0"
                    ? <li>{ `${props.effectFrom} à ${props.effectTo} ${await getName(props.effectId)}` }</li>
                    : <li>{ `${props.effectFrom} ${await getName(props.effectId)}` }</li>
                : false
            }
        </>
    )
}