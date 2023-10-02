import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import button from "../../public/images/btn-play1-over.png"

export default function Footer() {

    const styling = {
        backgroundImage: `url(${button.src})`
    }

    return(
        <footer>
            <section>
                <ul>
                    <li><h3>suivez dofus</h3></li>
                    <li><a href="https://www.facebook.com/DOFUS" target="_blank"><FontAwesomeIcon icon={ faFacebookF } /></a></li>
                    <li><a href="https://twitter.com/DOFUSfr" target="_blank"><FontAwesomeIcon icon={ faXTwitter } /></a></li>
                    <li><a href="https://www.youtube.com/user/dofus" target="_blank"><FontAwesomeIcon icon={ faYoutube } /></a></li>
                </ul>
            </section>
            <section>
                <a style={styling} className="btn-img" href="https://www.dofus.com/fr/prehome" target="_blank">vers dofus</a>
            </section>
        </footer>
    )
}