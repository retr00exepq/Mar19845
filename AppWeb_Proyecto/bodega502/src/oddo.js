

const  Odoo = require('odoo-xmlrpc')

const odoo = new Odoo({
  url: 'https://proyecto10.odoo.com/',
  db: 'proyecto10',
  username : 'cot19324@uvg.edu.gt',
  password: 'ProyectoSoft1234'
})

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
  });
});