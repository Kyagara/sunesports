module.exports = {
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                'fade-in': {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
                'hashtag-slider': {
                    '0%': {
                        transform: 'translatex(0%)',
                    },
                    '100%': {
                        transform: 'translatex(-100%)',
                    },
                },
            },
            animation: {
                'fade-in': 'fade-in 1.2s ease-out',
                'spin-slow': 'spin 180s linear infinite',
                'hashtag-slider': 'hashtag-slider 120s linear infinite',
            },
            fontFamily: {
                montserrat: 'Montserrat',
                oswald: 'Oswald',
                lato: 'Lato',
                openSans: 'Open Sans',
            },
            colors: {
                'sun-orange': '#ff9400',
                'sun-yellow': '#fcd34d',
                'discord-blue': '#7289da',
            },
        },
    },
}
