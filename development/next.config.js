// next.config.js
module.exports = {
    webpack(config) {
        config.infrastructureLogging = { debug: /PackFileCache/ }
        return config;
    },
    experimental: {
        serverActions: true,
    }
}