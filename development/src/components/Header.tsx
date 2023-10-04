import Link from "next/link"
import Image from "next/image"

import Logo from "../../public/images/logo.png"

import AuthBtn from "@/components/AuthBtn"
import Provider from "@/components/Provider"

export default async function Header() {

    const getClasses = async (): Promise<any> => {
        const res: Response = await fetch(`https://api.dofusdb.fr/breeds?$limit=20`)
        return res.json()
    }

    const getItemTypes = async (typeId: string): Promise<any> => {
        const res: Response = await fetch(`https://api.dofusdb.fr/item-types?superTypeId=${typeId}`)
        return res.json()
    }

    const armes = await getItemTypes("2")
    const resources = await getItemTypes("9")
    const trophies = await getItemTypes("13")
    const consumers = await getItemTypes("6")

    const breeds = await getClasses()

    return (
    <header>
        <ul>
            <li id="listes-btn">
                Listes
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                    <path
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                </svg>
                <menu>
                    <div>
                        <h3>Equipements</h3>
                        <ul>
                            <li><Link href="/listes/16">Chapeaux</Link></li>
                            <li><Link href="/listes/10">Ceintures</Link></li>
                            <li><Link href="/listes/11">Bottes</Link></li>
                            <li><Link href="/listes/1">Amullettes</Link></li>
                            <li><Link href="/listes/9">Anneaux</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Armes</h3>
                        <ul>
                            {armes.data.map((arme, index) => (
                                <li key={index}><Link href={`/listes/${arme.id}`}>{arme.name.fr}</Link></li>))}
                        </ul>
                    </div>
                    <div>
                        <h3>Resources</h3>
                        <ul>
                            {resources.data.map((resource, index) => (
                                <li key={index}><Link href={`/listes/${resource.id}`}>{resource.name.fr}</Link></li>))}
                        </ul>
                    </div>
                    <div>
                        <h3>Dofus | Trophés</h3>
                        <ul>
                            {trophies.data.map((trophy, index) => (
                                <li key={index}><Link href={`/listes/${trophy.id}`}>{trophy.name.fr}</Link></li>))}
                        </ul>
                    </div>
                    <div>
                        <h3>Consommables</h3>
                        <ul>
                            {consumers.data.map((graille, index) => (
                                <li key={index}><Link href={`/listes/${graille.id}`}>{graille.name.fr}</Link></li>))}
                        </ul>
                    </div>
                    <Image src="/images/dofus-transparent.png" alt="dofus" width="338" height="296"/>
                </menu>
            </li>
            <li id="sutffs-btn">
                Stuffs
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                    <path
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                </svg>
                <menu>
                    {
                        breeds.data.map((breed) => (
                            <div>
                                <h3>{ breed.shortName.fr }</h3>
                                <ul>
                                    <li><Link href={`/stuff/${ breed.id }/1`}>Intelligence</Link></li>
                                    <li><Link href={`/stuff/${ breed.id }/2`}>Chance</Link></li>
                                    <li><Link href={`/stuff/${ breed.id }/3`}>Agilité</Link></li>
                                    <li><Link href={`/stuff/${ breed.id }/4`}>Force</Link></li>
                                </ul>
                            </div>
                        ))
                    }
                    <Image src="/images/personnage-transparent.png" alt="dofus" width="338" height="296"/>
                </menu>
            </li>
        </ul>
        <li>
            <Link href={`/`}><Image src={Logo} alt=""/></Link>
        </li>
        <Provider>
            <AuthBtn />
        </Provider>
    </header>
    )
}