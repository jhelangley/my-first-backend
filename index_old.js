const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/chickens', (req, res) => {
    res.send('Hello there, we like chickens')   
})

app.get('/chickens/:name', (req, res) => {
    res.send({ params: req.params, query: req.query })
})

/* localhost:3000/chickens/gunther?size=large returns 
{
    "params": {
      "name": "gunther"
    },
    "query": {
      "size": "large"
    }
  }
*/

app.get('/broken', (req, res) => {
    throw new Error('Something went wrong')
})

app.get('/forbidden', (req, res) => {
    res.status(403).send();
})

app.get('/teapot', (req, res) => {
    res.sendStatus(418);
})

// this method from the express server listens for connections
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})