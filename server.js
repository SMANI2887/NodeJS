// module install 
const http = require('http');

const app = http.createServer((req, res) => {
    res.writeHead(200,{ 'Contain-Type' : 'Text/Plain' });
    res.end('Hello Wrold!!!');
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`server is running successfully ${PORT}`)
})