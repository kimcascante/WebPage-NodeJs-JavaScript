const express = require('express');
const app  = express();

/*app.get('/', (req, res) => {
  res.end('works');
});*/

app.use(express.static('assets'));


app.listen(3000, () => {
  console.log('Servidor iniciado.');

});
