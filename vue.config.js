module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false,
    dev: {
        proxy: {
            '/api':{
                // target:'http://jsonplaceholder.typicode.com',
                target: 'http://localhost:8686',
                changeOrigin:true,
                pathRewrite:{
                    '^/api': ''
                }
            }
        }
    }
    // dev: {
    //
    //     //设置跨域信息
    //     proxyTable: {
    //         '/api':{  //带有‘/api’的url请求，会把请求跨域到8080去
    //             target: "http://localhost:8686",
    //             changeOrigin: true, //改变源
    //             pathRewrite:{
    //                 '^/api':''  //路径重写，使用'/api'代替target
    //             }
    //         }
    //     }
    // }
}