const express = require('express');
const data = require('moment');
const app = express();

app.listen(3000, () => {
    console.log('listening on port 3000');
});
app.get('/:mes/:ano', (req, res) => {
    const ano = req.params.ano;
    const mes = req.params.mes;
    res.send(`${mes}/${ano}`);
   // console.log(data().format("DD/MM/YYYY hh:mm:ss"));

    var inicio = data(`${ano}-${mes}`);  
    var final = data(`${ano}-${mes}`); 
    inicio.set({hour:0,minute:0,second:0,millisecond:0});
    final.endOf('month');
    console.log(inicio.format("DD/MM/YYYY HH:mm:ss"));
    console.log(final.format("DD/MM/YYYY HH:mm:ss"));
     
    
  
})