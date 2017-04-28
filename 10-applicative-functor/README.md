# Applicative Functor

## Preface
如果要让一个 `functor` 作用于另一个 `functor`，可以利用 `chain` 和 `map` 函数实现，但会产生 `monad` 依赖关系。
```
Container.of(2).chain((two) => Container.of(3).map(add(two)))
```

## Applicative Functor
* 让不同 `functor` 可以相互应用（`apply`）的能力。
* 能够把一个 `functor` 的函数值应用到另一个 `functor` 的值上!!!!!
* 是一个实现了 `ap` 方法的 `pointed functor`（即实现了 `ap` 和 `of` 方法的 `functor`）。
* `F.of(x).map(f) == F.of(f).ap(F.of(x))`
* `ap` 需要调用者及其参数都属于同一类型（这种做法叫做 `lift`）。

## Use
两个独立调用的api，利用 `curry` 函数的 惰性，解决两个 api 请求的依赖问题。
```
renderPage = curry((destinations, events) => { //something })
Task.of(renderPage).ap(Http.get('/destinations')).ap(Http,get('/events'))
```

## Lift
* 用 `pointfree` 的方式调用 `applicative functor`。
* `map/ap == of`。
* 利用 `curry` 函数来实现 `pointfree` 使得 `applicative functor` lift。
* 命名 => (liftA2, liftA3, liftA4 etc)，根据 `functor` 数量。

## Operators
在 haskell、scala、PureScript 以及 swift 等语言中，开发者可以创建自定义的中缀操作符。

```
-- haskell
add <$> Right 2 <*> Right 3
```

```
// Javascript
map(add, Right(2)).ap(Right(3))
```

## 推导
```
// op/ap 衍生出 map
X.prototype.map = function(f) {
    return this.constructor.of(f).ap(this)
}
```
向下的嵌套结构使得 monad 拥有串行计算、变量赋值和暂缓后续执行等独特的能力。
```
// monad => chain => (functor || applicative)
// chain 衍生出 map
X.prototype.map = function (f) {
    return this.chain((a) => this.constructor.of(f(a)))
}

// 从 chain/map 衍生出的 ap
X.prototype.ap = function(other) {
  return this.chain((f) => other.map(f))
};
```

## 定律
### 同一律
* 使用同一律，能够强迫所有的接口都能完美结合。

```
A.of(id).ap(v) == v
map(id) = id
```

### 同态 (homomorphism)
* 不管是在，容器中运算，还是运算完后放入容器，都能保持结构的映射。
* functor 就是一个在不同范畴间的同态，映射完后还是保持着结构。

```
A.of(f).ap(A.of(x)) == A.of(f(x))
```

### 互换（interchange）
* 选择让函数在 ap 的左边还是右边发生 lift 是无关紧要的。

```
v.ap(A.of(x)) == A.of(function(f) { return f(x) }).ap(v)
```

### 组合（composition）
* 组合不过是在检查标准的函数组合是否适用于容器内部的函数调用。
```
A.of(compose).ap(u).ap(v).ap(w) == u.ap(v.ap(w))
```

## 总结

* 处理多个 functor 作为参数的情况，是 applicative functor 一个非常好的应用场景。
* 借助 applicative functor，我们能够在 functor 的世界里调用函数。
* monad 也可以达到这个目的，但在不需要 monad 的特定功能的时候（并发），我们还是更倾向于使用 applicative functor。
