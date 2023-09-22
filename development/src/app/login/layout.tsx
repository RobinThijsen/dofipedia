export default async function RootLayout({
     children,
 }: {
    children: React.ReactNode
}) {

    return (
        <html lang="fr">
        <body>
        {children}
        </body>
        </html>
    )
}
