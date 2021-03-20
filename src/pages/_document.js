import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class SunlightDoc extends Document {
    render() {
        return (
            <Html lang="pt">
                <Head />
                <body className="animate-fade-in">
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}
