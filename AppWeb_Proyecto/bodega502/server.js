const express = require('express')
const app = express()
const port = 3001
const Odoo = require('odoo-xmlrpc')
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
app.use(cors({}));
app.use(bodyParser.json());
const odoo = new Odoo({
    url: process.env.REACT_APP_URL,
    db: process.env.REACT_APP_DB,
    username: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD,
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
        inParams.push(['display_name', 'list_price', 'description', 'qty_available','image_1920']);
        var params = [];
        params.push(inParams);
      
          odoo.execute_kw('product.product', 'search_read', params, function (err, value) {
            if (err) { return console.log(err); }
            res.send(value)
        });
      })
    //res.send('Hello World!')
})
app.post('/getProduct',(req,res)=>{
    let id = req.body.id;
    console.log(req.body)
    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        console.log('getPr');
        var inParams = [];
        //inParams.push([['active', '=', false], ['display_name', '=', nombre], ['list_price', '=', precio], ['description': descripcion] ['qty_available', '=', cantidad], ]);
        inParams.push([['id', '=', id]])
        inParams.push(['display_name', 'list_price', 'description', 'qty_available']);
        var params = [];
        params.push(inParams);
      
          odoo.execute_kw('product.product', 'search_read', params, function (err, value) {
            if (err) { return console.log(err); }
            res.send(value)
            //res.send(id)
        });
      })
    //res.send({'id':'1'})
})


app.get('/img', (req, res) => {
    
    odoo.connect(function (err) {

        if (err) { return console.log(err); }
        console.log('Connected to Odoo server.');
        var inParams = [];
        inParams.push([]);
        inParams.push(['description','display_name','image_512'])
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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})