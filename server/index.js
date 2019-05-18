const express = require('express');
const app = express(); 
const bodyParser = require('body-parser')
const db = require('../database/index.js');

const port = 8080;

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.get('/listings/:id', (req, res) => res.send('Hello You!'))

app.get('/listings/:id', function(req, res) {
    db.findOne({id: req.params.id}).exec((err, docs) => {
        if (err) {
          res.status(500).send();
        } else {
          res.status(200).send(docs);
        }
      })
})

// app.get('/repos', function (req, res) {
//     // TODO - your code here!
//     // This route should send back the top 25 repos
//     getAllData(function(err, data){
//       if (err) {
//         res.status(500).send();
//       } else {
//         res.status(200).send(data);
//       }
//     });
//   });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
