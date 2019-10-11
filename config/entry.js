let config = {
    page: './examples/demos/main',
    template: "index-m.html",
    publicPath: '/smart-ui/',
    subDirectory: 'demos',
    type: 'mobile',
    title: ''
};

let channel = process.env.CHANNEL;

if (channel == "docs") {
    config = {
        page: './examples/docs/main',
        template: "index.html",
        publicPath: '/smart-ui/',
        subDirectory: "docs",
        type: 'pc',
        title: ""
    };
} else if (channel == "demos") {
    config = {
        page: './examples/demos/main',
        template: "index-m.html",
        publicPath: '/smart-ui/',
        subDirectory: 'demos',
        type: 'mobile',
        title: ''
    };
}

const defaultTitle = '';

const openUrl = "http://localhost:8090/#/";

module.exports = { config, openUrl, defaultTitle }
