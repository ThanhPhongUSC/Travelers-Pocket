const express = require('express');
const router = express.Router();
const axios = require('axios');
const {key} = require('../config.js');
const db = require('../database/queries.js');
const path = require('path');

router.get('/jokes', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'),(err) => {
    if(err) {
      res.status(400).send(err)
    }
  }
  )});
router.get('/translation', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'),(err) => {
    if(err) {
      res.status(400).send(err)
    }
  }
  )
})
router.get('/allDadJokes', (req, res) => {
  axios.get('https://icanhazdadjoke.com/search?limit=3', {headers: {Accept: 'application/json'}})
  .then((response) => {
    for (var i = 0; i< response.data.results.length; i++) {
      var joke = response.data.results[i].joke;
      db.insertJoke(joke)
    }
    res.status(200).send('successful insert into database');

  })
  .catch((err) => {
    res.status(404).send(err);
  })
  })


router.get('/dadJokes', (req, res) => {
axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
.then((response) => {
  res.status(200).send(response.data);
})
.catch((err) => {
  res.status(404).send(err);
})
})

router.post('/translate', async (req, res) => {
  console.log(req.query.q)
  console.log(req.query.target)
   try {
    const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, { headers: {'Content-Length': '222',
    'Host': 'translation.googleapis.com',
    'referer': 'http://localhost:3000/',
  },
      params: {
        q: req.query.q,
        target: req.query.target,
        key: key,
      }
    });
    console.log(data)
    res.status(201).send(data)

   }
   catch(e){
     res.status(404).send(e);
   }

  // axios.post('https://translation.googleapis.com/language/translate/v2', {}, { headers: {'Content-Type': 'application/json'},
  //       params: {
  //         q: req.query.q,
  //         target: req.query.target,
  //         key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
  //       }
  //     })
  // .then((response) => {
  //   res.status(201).send()
  // })
  // .catch((err) => {
  //   res.status(400).send(err)
  // })
})

module.exports = router;