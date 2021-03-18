import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class SunlightDoc extends Document {
    render() {
        return (
            <Html lang="pt">
                <Head />
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}
