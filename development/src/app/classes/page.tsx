import Classes from '../../../public/classes.json'

export default function Page() {

    return (
        <>
            <ul>
                {Classes.map((classe) => (
                    <li>
                        <h3>{ classe.name }</h3>
                        <Image src={`${classe.id}.jpg`} />
                        <img src={`../../../public/images/${classe.id}.jpg`} />
                    </li>
                ))}
            </ul>
        </>
    );
}