const withImages = require('next-images')

module.exports = withImages({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.html$/i,
            loader: 'html-loader',
        })
        return config
    },
})
