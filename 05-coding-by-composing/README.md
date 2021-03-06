# Coding by Composing

## Category theory

### Components
In category theory, we have someting called a categroy. It is defined as a collection with the following components:

* A collection of objects
    * For instance, `String`, `Boolean`, `Number`, `Object` etc.
    * Look at `Boolean` as the set of [true, false]
* A collection of morphisms - standard every day pure functions
* A notion of composition on the morphisms - `compose`
* A distinguished morphism called identity - `id = x => x`

### Associativity
```
compose(a, b, c) === compose(a, (b, c)) === compose((a, b), c)
```

### Identity
```
compose(id, f) === compose(f, id) === f
```

### Composition Law
```
compose(map(f), map(g)) === map(compose(f, g))
```
