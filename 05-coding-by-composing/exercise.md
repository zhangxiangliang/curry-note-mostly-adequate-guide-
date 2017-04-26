# Exercise

## Example Data
```
var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
]
```

## Exercise 1:
Use _.compose() to rewrite the function below. Hint: _.prop() is curried.
```
var isLastInStock = function(cars) {
    var reversed_cars = _.last(cars)
    return _.prop('in_stock', reversed_cars)
}
```

## Exercise 2:
use _.compose(), _.prop() and _.head() to retrieve the name of the first cars.
```
var nameOfFirstCar = undefined;
```

## Exercise 3:
Use the helper function _average to refactor averageDollarValue as a composition.
```
var _average = function(xs) { return reduce(add, 0, xs) / xs.length; }; // <- leave be

var averageDollarValue = function(cars) {
  var dollar_values = map(function(c) { return c.dollar_value; }, cars);
  return _average(dollar_values);
};
```

## Exercise 4:
Write a function: sanitizeNames() using compose that takes an array of cars and returns a list of lowercase and underscored names: e.g: sanitizeNames([{name: "Ferrari FF"}]) //=> ["ferrari_ff"].
```
_underscore = replace(/\W+/g, '_');
sanitizeNames = undefined;
```

