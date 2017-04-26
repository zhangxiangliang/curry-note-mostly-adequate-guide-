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

## Bonus 1:
```
// cars => in_stock => map (=> dollar_value => accounting.formatMoney ) => join
formatMoney = _.composer(accounting.formatMoney, _.prop('dollar_value'))
availablePrices = _.composer(join(', '), _.map(formatMoney), _.filter(_.prop('in_stock')))
```

## Bonus 2:
```
// car => sorted (=> sortBy => props ) => last =>

fastestCar = R.compose(
    R.flip(R.concat)(' is the fastest'),
    R.prop('name'),
    R.last,
    R.compose(R.sortBy, R.prop )('horsepower')
)
```
