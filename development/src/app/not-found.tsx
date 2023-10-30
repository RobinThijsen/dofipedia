import Link from "next/link"
import BackgroundImage from "../../public/images/background-404.jpg"
import BackgroundText from "../../public/images/background-404-msg.png"
import BackgroundButton from "../../public/images/btn-play1-over.png"

export default function NotFound(): JSX.Element {
    const styling = {
        backgroundImage: `url(${ BackgroundImage.src })`
    }

    const sectionStyling = {
        backgroundImage: `url(${ BackgroundText.src })`
    }

    const btnStyling = {
        backgroundImage: `url(${ BackgroundButton.src })`
    }

    return (
        <main className="_404" style={ styling }>
            <section style={ sectionStyling }>
                <h1>Cette page n'apparait pas sur la map</h1>
                <img src={`/images/separator.png`} alt="separator" width={ 150 } height={ 20 } />
                <p>La page que vous essayez d'afficher ne semble pas exister sur dofipedia. Si vous pensez que c'est une erreur du site, veuillez nous contacter à l'adresse <a href="mailto:info@dofipedia.com">info@dofipedia.com</a>.</p>
            </section>
            <Link className="btn-img" style={ btnStyling } href={`/`}>Retourner à Astrub</Link>
        </main>
    )
}