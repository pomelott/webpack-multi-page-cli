const {distDir, pageDir} = require('../tools/path');
const {getPageModule} = require('../tools/util');
console.log('999999')
console.log(getPageModule(pageDir))
module.exports = {
    path: distDir,
    filename: 'js/[name].js',
    // chunkFilename: 'js/[name].bundle.js'
    // filename: (pathData) => {
    //     console.log('-------------');
    //     console.log(pathData)
    //     return 'js/[name]/[name].js'
    // },
    // publicPath: '../'
    // publicPath: '/'
}