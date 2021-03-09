module.exports = {
    exportPathMap: async () => {
        return {
            '/': { page: '/' },
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
