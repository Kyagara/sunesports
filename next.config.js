module.exports = {
    exportPathMap: async () => {
        return {
            '/': { page: '/' },
        }
    },
    webpack: (config) => {
        return {
            ...config,
            node: {
                fs: 'empty',
            },
        }
    },
    experimental: {
        optimizeFonts: true,
    },
}
