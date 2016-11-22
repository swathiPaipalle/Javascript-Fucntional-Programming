/*Javascript Functioning -Filters*/
var animals = [
  {name:'puppy', species:'dog'},
  {name:'jimmy', species:'cat'},
  {name:'carol', species:'rabbit'},
  {name:'harald',species:'dog'},
  {name:'ursula',species:'fish'},
  {name:'caro',  species:'dog'},
];
/*get the names of animals*/
// var names =[];
// for(var i=0; i<animals.length; i++){
//   names.push(animals[i].name);
// }

// var names = animals.map(function(animal){
//   return animal.name;
// });
var names = animals.map((x) => x.name);
console.log('Map Names', names);
