import '../css/screen.scss'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return <Component {...pageProps} key={router.route} />
}

export default MyApp
