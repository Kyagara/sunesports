module.exports = {
    exportPathMap: async () => {
        return {
            '/': { page: '/' },
            '/sobre': { page: '/sobre' },
        }
    },
    webpack: (config) => {
        config.node = {
            fs: 'empty',
        }

        return config
    },
    experimental: {
        optimizeFonts: true,
    },
}
