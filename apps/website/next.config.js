// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
    reactStrictMode: true,
    poweredByHeader: false,

    images: {
        loader: 'custom',
    },

    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            '/contato': { page: '/contato' },
            '/quem-somos': { page: '/quem-somos' },
        }
    },
}
