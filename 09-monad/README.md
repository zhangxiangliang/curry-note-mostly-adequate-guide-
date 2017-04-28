# Monad

## Pointed Functor
* 实现了 `of` 方法的 functor。
* 用于把值放至 `默认最小化上下文`(存值)。
* 关键 `of` 使用后，能够随意使用 `map` 能力。
* 例如 `Ramda` 实现是返回一个数组。

## Monad
* Bad => 容器多层嵌套，调用的时候需要用 `map` 解开嵌套。
* monad 是可以 `扁平化`(flatten) 的 Pointed Functor。
* 实现了 `of` 和 `join` 的 functor。

## Chain
* 抽象 map 和 join 为 chain 函数。
* `chain` 叫做 `>>=` 、`bind` 或者 `flatMap`。

## 理论
### 结合律
```
// M(M(Ma)) => Ma
compose(join, join) == compose(join, map(join))
```

### 同一律
```
// Ma => Ma
compose(join, of) == compose(join, map(of)) == id
```

### 左同一律
```
Ma => Ma
compose(chain(M), chain(f)) == f
```

### 右同一律
```
Ma => Ma
compose(chain(f), chain(M)) == f
```

## 结合律
```
compose( compose( chain(f), chain(g) ), chain(h) ) === compose( chain(f), compose( chain(g), chain(h) ) )
```

## 总结
* 利用 `monad` 避免 `回调金字塔`。
* 利用 `pointed` 和 `monad` 可以从 容器 中取出值。
* 利用 `either` 错误判断。
