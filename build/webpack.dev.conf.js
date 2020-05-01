const path = require('path')

module.exports={
    mode:'development',
    devServer:{
        port:3000,
        progress:true,
        contentBase:path.resolve(__dirname,'../dist'),
        hot:true,
        open:true,
        compress:true
    }
}