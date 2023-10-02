import Head from "@/components/Head"

import Header from "@/components/Header"
import Providers from "@/components/Provider"
import Footer from "@/components/Footer";

export default async function RootLayout({
      children,
    }: {
      children: React.ReactNode
    }) {

  return (
    <html lang="fr">
    <Head />
    <body>
      <Header />
      <Providers>
      {children}
      </Providers>
      <Footer />
    </body>
    </html>
  )
}
