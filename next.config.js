module.exports = {
    exportPathMap: async () => {
        return {
            '/': { page: '/' },
            '/quem-somos': { page: '/quem-somos' },
            '/contato': { page: '/contato' },
        }
    },
    webpack: (config) => {
        config.node = {
            fs: 'empty',
        }

        return config
    },
}
