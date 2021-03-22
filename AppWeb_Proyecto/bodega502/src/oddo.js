const  Odoo = require('odoo-xmlrpc')

const odoo = new Odoo({
  url: 'https://proyecto10.odoo.com',
  //port: 80, /* Defaults to 80 if not specified */
  db: 'proyecto10',
  username : 'cot19324@uvg.edu.gt', /* Optional Like Change Language */
  password: 'ProyectoSoft1234'
})
console.log('funciona esto????')

odoo.connect(function (err) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');    
});