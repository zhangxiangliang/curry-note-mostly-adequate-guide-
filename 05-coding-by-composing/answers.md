# Exercise Answers

## Exercise 1:
```
isLastInStock = _.compose(_.prop('in_stock'), _.last)
```

## Exercise 2:
```
nameOfFirstCar = _.compose(_.prop('name'), _.head)
```

## Exercise 3:
```
_average = function(xs) { return reduce(add, 0, xs) / xs.length; };
averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')))
```

## Exercise 4:
```
// => sanitizeNames([{name: "Ferrari FF"}]) => object => prop => name
// <= ["ferrari_ff"]
_underscore = replace(/\W+/g, '_')
sanitizeNames = _.map(_.compose((_underscore, toLowerCase, _.prop('name'))))
```
