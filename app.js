const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end('Welcome to my homepage')
    }
    if ( req.url === '/about'){
        res.end   ('this is thr about page')
    }
    res.end(`<h1> OO[ps there is nothing found on the server</h1>
    <a href=' /' >back home</a>`)
   

})

server.listen(7000)