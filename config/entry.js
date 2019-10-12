let config = {
    page: './examples/demos/main',
    template: "index-m.html",
    publicPath: '/smart-ui/',
    subDirectory: 'demos',
    type: 'mobile',
    title: ''
};

let channel = process.env.CHANNEL;

if (channel == "docs") { // 打包docs
    config = {
        page: './examples/docs/main',
        template: "index.html",
        publicPath: '/smart-ui/',
        subDirectory: "docs",
        type: 'pc',
        title: ""
    };
} else if (channel == "demos") { // 打包demos
    config = {
        page: './examples/demos/main',
        template: "index-m.html",
        publicPath: '/smart-ui/',
        subDirectory: 'demos',
        type: 'mobile',
        title: ''
    };
} else if (channel == "publish") { // 打包发布npm包
    config = {
        page: './src/index', 
        template: "index-m.html",
        publicPath: '/',
        subDirectory: '',
        cssfilename: "smart-ui.min.css", // 输出样式文件名称
        jsfilename: "smart-ui.min.js",   // 输出JS文件名称
        libraryname: "smart-ui",
        type: 'mobile',
        title: ''
    };
}

const defaultTitle = '';

const openUrl = "http://localhost:8090/#/";

module.exports = { config, openUrl, defaultTitle }
