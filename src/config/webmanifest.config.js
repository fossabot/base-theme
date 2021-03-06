const path = require('path');

module.exports = (projectRoot) => {
    const pathToFaviconDir = path.resolve(projectRoot, 'src/public/assets/favicon');

    return {
        name: 'ScandiPWA',
        short_name: 'ScandiPWA',
        description: 'ScandiPWA theme DEMO store',
        background_color: '#ffffff',
        lang: 'en-US',
        theme_color: '#ffffff',
        start_url: '/',
        crossorigin: null,
        ios: {
            'apple-mobile-web-app-title': 'ScandiPWA',
            'apple-mobile-web-app-status-bar-style': 'black'
        },
        inject: true,
        orientation: 'portrait',
        display: 'standalone',
        icons: [
            {
                src: path.resolve(pathToFaviconDir, 'scandipwa_startup_ios.png'),
                sizes: [120, 152, 167, 180, 1024],
                destination: path.join('icons', 'ios'),
                ios: true
            },
            {
                src: path.resolve(pathToFaviconDir, 'scandipwa_favicon.png'),
                size: 1024,
                destination: path.join('icons', 'ios'),
                ios: 'startup'
            },
            {
                src: path.resolve(pathToFaviconDir, 'scandipwa_favicon.png'),
                sizes: [36, 48, 72, 96, 144, 192, 512],
                destination: path.join('icons', 'android')
            }
        ]
    }
};
