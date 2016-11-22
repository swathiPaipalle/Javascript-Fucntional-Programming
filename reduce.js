/*Javascript Functioning -Filters*/
var orders = [
  {amount:100},
  {amount:200},
  {amount:10},
  {amount:54},
  {amount:22},
  {amount:20}
];
/*get the total amount of array*/
// var orderSummary = 0;
// for(var i=0; i<orders.length; i++){
//   orderSummary += orders[i].amount;
// }

var orderSummary = orders.reduce(function(sum, order){
  return sum + order.amount;
}, 0)

console.log('orderSummary using reduce ', orderSummary);

var x = {
  'mark': [
    {name: 'waffle',  price: '12',  qty: '2'},
    {name: 'blender', price: '2',   qty: '1'},
    {name: 'knife',   price: '33',  qty: '3'}
  ],
  'nikita': [
    {name: 'waffle',  price: '92', qty: '2'},
    {name: 'blender', price: '22', qty: '1'},
    {name: 'pot',     price: '33', qty: '3'}
  ]
};
// import fs from 'fs';
// var output = fs.readFileSync('data.txt', utf8)
// .trim()
// .split('\n')
// .map(line => line.split('\t'))
// .reduce((customers, line) => {
//   customers[line[0]] = customers[line[0]] || []
// });
