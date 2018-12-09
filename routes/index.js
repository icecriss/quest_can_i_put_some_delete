const express = require('express');
const router = express.Router();
// const port = 3000;

// THIS SEEMS TO BE NOT REALLY NEEDED AS IT STILL WORKS WITHOUT IT
// const bodyParser = require('body-parser');
// // Support JSON-encoded bodies
// router.use(bodyParser.json());
// // Support URL-encoded bodies
// router.use(bodyParser.urlencoded({
//   extended: true
// }));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST Forms 101 */
router.post('/forms-:id', (req, res) => {
  const id = req.params.id;
  const getElt = req.query.level;
  const postElt = req.body;
  console.log('parametre de l\'URL:', id);
  console.log('requete GET:', getElt);
  console.log('requete POST:', postElt);
  res.json({ id, postElt, getElt })
})






module.exports = router;

// const server = router.listen(port, (err) => {
//   if (err) {
//     throw new Error('There\'s something bad Harry')
//   }
//   console.log(`Express running → PORT ${server.address().port}`);
// });