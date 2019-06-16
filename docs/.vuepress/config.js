const path = require('path')
function resolve (dir) {
    return path.join(__dirname, '..' ,'..', dir)
}

module.exports = {
    title: 'Tiger UI',
    base: '/',
    description: 'Tiger UI Document',
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: 'https://segmentfault.com/u/tombear' },
            { text: 'Github', link: 'https://github.com/tombear110' },
        ],
        sidebar: [
            ['/views/button', '按钮 Button'],
            ['/views/icon', '图标 Icon'],
            ['/views/switch', '开关 Switch'],
            ['/views/table', '表格 Table']
        ]
    },
    markdown: {
        lineNumbers: false
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              'vue$': 'vue/dist/vue.esm.js',
              '@': resolve('docs'),
              '@src': resolve('src'),
              '@scss': resolve('src/scss'),
              '@components': resolve('src/components'),
              '@utils': resolve('src/utils')
            }
        }
    }
}
