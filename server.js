const express = require ('express');
const path = require ('path');
const port = process.env.PORT || 8080;
const app = express();
const publicPath = path.join (__dirname,'public');


app.use(express.static(publicPath));

app.get('*', (req,res)=>{
    res.sendFile(path.resolve(publicPath, 'index.html'))
})

app.listen(port);
console.log('server started');