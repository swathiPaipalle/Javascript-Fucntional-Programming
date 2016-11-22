/*Javascript Functioning -Filters*/
var animals = [
  {name:'puppy', species:'dog'},
  {name:'jimmy', species:'cat'},
  {name:'carol', species:'rabbit'},
  {name:'harald',species:'dog'},
  {name:'ursula',species:'fish'},
  {name:'caro',  species:'dog'},
];

var isDog = function(animal){
  return animal.species == 'dog'
}
var dogs = animals.filter(isDog);
// var otherAnimals = animals.reject(isDog);
console.log('Filter dogs', dogs);
