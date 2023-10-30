export default function Loading(): JSX.Element {

    const styling = {
        color: '#525252'
    }

    const SvgComponent = (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            style={{
                enableBackground: "new 0 0 500 500",
            }}
            viewBox="0 0 500 500"
            {...props}
        >
            <path
                d="M407.34 295.39c-.87-53.54-12.9-109.54-35.44-163.29-15.1-36-34.24-69.35-63.71-95.84-35.92-32.29-75.49-34.87-113.24-6.25-9.49 7.19-18.47 15.91-25.32 25.6-64.17 90.85-88.18 192.04-72.98 301.78 6.15 44.41 26.6 82.48 65.86 107.79 31.55 20.34 66.69 25.35 103.04 21.67 47.17-4.77 85.5-25.77 111.72-66.31 23.69-36.65 30.13-77.71 30.07-125.15z"
                style={{
                    fill: "#525252",
                }}
            />
        </svg>
    )

    return (
        <main className="loading">
            <h2>Chargement</h2>
            <figure>
                <SvgComponent />
                <SvgComponent />
                <SvgComponent />
            </figure>
        </main>
    )
}