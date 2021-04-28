const express = require('express')
const app = express()
const port = 3001
const Odoo = require('odoo-xmlrpc')
const cors = require('cors');
app.use(cors({

}));
const odoo = new Odoo({
    url: 'https://proyecto10.odoo.com/',
    db: 'proyecto10',
    username: 'cot19324@uvg.edu.gt',
    password: 'ProyectoSoft1234',
    cors: 'True'
})
app.get('/', (req, res) => {
    odoo.connect(function (err) {

        if (err) { return console.log(err); }
        console.log('Connected to Odoo server.');
        var inParams = [];
        inParams.push([['active', '=', false]]);
        inParams.push(['description'])
        var params = [];
        params.push(inParams);

        odoo.execute_kw('product.product', 'search_read', params, function (err, value) {
            if (err) { return console.log(err); }
            console.log('Result: ', value);
            res.send(value)
        });
    });
    //res.send('Hello World!')
})
app.get('/productos', (req, res) => {
    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        console.log('Connected to Odoo server.');
        var inParams = [];
        //inParams.push([['active', '=', false], ['display_name', '=', nombre], ['list_price', '=', precio], ['description': descripcion] ['qty_available', '=', cantidad], ]);
        inParams.push([])
        inParams.push(['display_name', 'list_price', 'description', 'qty_available']);
        var params = [];
        params.push(inParams);
      
          odoo.execute_kw('product.product', 'search_read', params, function (err, value) {
            if (err) { return console.log(err); }
            res.send(value)
        });
      })
    //res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})