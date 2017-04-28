# Answers

## Exercise 1

var ex1 = (x, y) => Maybe.of(_.add).ap(Maybe.of(x)).ap(Maybe.of(y))

## Exercise 2

```
var liftA2 = curry((f, functor1, functor2) => functor1.map(f).ap(functor2)

var ex2 = liftA2(_.add)
```

## Exercise 3

```
var ex3 = Task.of(render).ap(getPost(2)).ap(getComments(2))
```

## Exercise 4

```
var ex4 = liftA2(game, getCache("toby"), getCache("sally"))
```
