# Exercise

## Exercise 1
Use _.add(x,y) and map(f,x) to make a function that increments a value inside a functor.

```
ex1 = undefined
```

## Exercise 2
Use _.head to get the first element of the list.

```
xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
ex2 = undefined
```

## Exercise 3
Use safeProp and _.head to find the first initial of the user.

```
safeProp = _.curry((x, o) => Maybe.of(o[x]))
user = { id: 2, name: "Albert" }
ex3 = undefined
```

## Exercise 4
Use Maybe to rewrite ex4 without an if statement.
```
ex4 = n => n ? parseInt(n) : null
```

## Exercise 5
Write a function that will getPost then _.toUpper the post's title.

```
getPost = i => new Task((rej, res) => setTimeout(() => res(data), 300))
ex5 = undefined
```

## Exercise 6
Write a function that uses checkActive() and showWelcome() to grant access or return the error.
```
showWelcome = _.compose(_.add('Welcome '), _.prop('name'))

checkActive = user => user.active
    ? Right.of(user)
    : Left.of('Yout account is not active')

ex6 = undefinded
```

## Exercise 7
Write a validation function that checks for a length > 3. It should return Right(x) if it is greater than 3 and Left("You need > 3") otherwise

```
ex7 = x => undefined
```

## Exercise 8
Use ex7 above and Either as a functor to save the user if they are valid or return the error message string. Remember either's two arguments must return the same type.

```
save = x => new IO(() => {
    console.log('SAVED USER!')
    return x + '-saved';
})

var ex8 = undefined
```
