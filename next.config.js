module.exports = {
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
        optimizeImages: true,
    },
}
