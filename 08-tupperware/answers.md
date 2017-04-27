# Exercise Answers

## Exercise 1
```
ex1 = _.map(_.add(1))
```

## Exercise 2
```
var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);
ex2 = _.map(_.head)
```

## Exercise 3
```
// user => name => _head
var safeProp = _.curry((x, o) => Maybe.of(o[x]))
var user = { id: 2, name: "Albert" }
ex3 = _.compose(_.map(_.head), safeProp('name'))
```

## Exercise 4
```
ex4 = _.compose(_.map(parseInt), Maybe.of)
```

### Exercise 5
```
data = {id: i, title: 'Love them futures'}

getPost = i => new Task((rej, res) => setTimeout(() => res(data), 300))

upperTitle = _.compose(_,toUpper, _.prop('title'))

ex5 = _.compose(upperTitle, getPost)
```

## Exercise 6
```
showWelcome = _.compose(_.add('Welcome '), _.prop('name'))

checkActive = user => user.active
    ? Right.of(user)
    : Left.of('Yout account is not active')
// check => error || showWelcome =>

ex6 = _.compose(_.map(showWelcome), checkActive)
```

## Exercise 7

```
ex7 = x => x.length > 3 ? Right.of(x) : Left("You need > 3")
```

## Exercise 8

```
save = x => new IO(() => {
    console.log('SAVED USER!')
    return x + '-saved';
})

// user => check => (save || error)

ex8 = _.compose(either(IO.of, save), ex7)
```
