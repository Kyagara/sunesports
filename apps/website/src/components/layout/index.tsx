import { NextSeo } from 'next-seo'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

interface Props {
    children: JSX.Element[]
    pageTitle: string
    pageDescription: string
}

const Layout = ({ children, pageTitle, pageDescription }: Props) => {
    return (
        <>
            <NextSeo
                title={pageTitle}
                description={pageDescription}
                openGraph={{
                    type: 'website',
                    url: 'https://sunesports.com.br/',
                    title: pageTitle,
                    site_name: 'Sunlight Esports',
                    description: pageDescription,
                    images: [
                        {
                            url: 'https://sunesports.com.br/card.png',
                            width: 400,
                            height: 400,
                        },
                    ],
                }}
                twitter={{
                    site: '@sunesportsbr',
                    cardType: 'summary',
                }}
            />

            <Navbar />

            {children}

            <Footer />
        </>
    )
}

export default Layout
