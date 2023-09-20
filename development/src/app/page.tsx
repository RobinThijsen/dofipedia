'use client'
import Portal from '../../public/images/ZAAP-step1.jpg'
import Portal2 from '../../public/images/ZAAP-step2.jpg'
import { useState } from "react"

export default function Home() {
    const [hover, setHover] = useState(false)

    const isntHover = {
        backgroundImage: `url(${Portal.src})`
    }

    const isHover = {
        backgroundImage: `url(${Portal2.src})`
    }

  return (
    <main className="home">
        <section
            className="portal"
            style={hover ? isHover : isntHover}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        ></section>
    </main>
  );
}
