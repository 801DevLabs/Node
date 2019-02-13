const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method
  if(url === '/'){
    res.write('<html>')
    res.write('<head>')
    res.write('<title>Enter Message')
    res.write('</title>')
    res.write('</head>')
    res.write('<body><form action="/message" method="POST">')
    res.write('<input type="text"><button type="submit">Send</button>')
    res.write('</form></body>')
    res.write('</html>')
    return res.end()
  }
  if(url === '/message' && method === 'POST'){
    fs.writeFileSync('message.txt', 'DUMMY')
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  }
  console.log(req.url, req.method, req.headers)
  // process.exit()
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head>')
  res.write('<title>My Frist Page')
  res.write('</title>')
  res.write('</head>')
  res.write('<body>')
  res.write('<h1>Hello from my NodeJS Server!')
  res.write('</h1>')
  res.write('</body>')
  res.write('</html>')
  res.end()
})

server.listen(3000)