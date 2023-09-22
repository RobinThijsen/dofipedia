'use client'
import Image from "next/image"

export default function Home() {

  return (
    <main className="home">
        <section
            className="portal"
        >
            <Image
                src="/images/zaap/back.png"
                alt="brakmar"
                width="1200"
                height="753"
            />
            <Image
                className="light-zaap-aura"
                src="/images/zaap/zaap-light-ray.png"
                alt="aura"
                width="695"
                height="695"
            />
            <Image
                className="light-zaap"
                src="/images/zaap/zaap-light.png"
                alt="portal"
                width="416"
                height="416"
            />
            <Image
                className="default-zaap"
                src="/images/zaap/zaap.png"
                alt="empty cadrant"
                width="1200"
                height="590"
            />
            <Image
                className="open-zaap"
                src="/images/zaap/zaap-open.png"
                alt="empty-light-cadrant"
                width="1200"
                height="590"
            />
            <Image
                src="/images/zaap/front.png"
                alt="front"
                width="1200"
                height="407"
            />
        </section>
    </main>
  );
}