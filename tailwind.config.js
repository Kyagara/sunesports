module.exports = {
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: 'Montserrat',
                oswald: 'Oswald',
                lato: 'Lato',
                openSans: 'Open Sans',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
