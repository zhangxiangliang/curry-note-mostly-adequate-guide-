# Tupperware

## Preface
* `命令式` => 控制流、异常处理、异步操作、状态。
* `声明式` => 使用别的方法。
* `应用程序` => 获取、更改、保存数据直到数据被释放。

## Container
* `Container` 通常称作 `Identity`。
* `Container` 是只有一个 属性 的 对象。
* `Container` 不能是特定值。
* `Container` 不能去直接获取属性。
* `点记法` (dot notation syntax)

## Functor
* `Functor` 是一个签订合约的接口(=> Mappable 形象解释)。
* 抽象让容器自己去运用函数，是一种强大的概念。

## Maybe
* 与 `Functor` 相似。
* 会 检查 自己的值是否为空后，才调用传递进来的函数。
* 能够使用 `Curry` 函数的方式来 `代理` 任何的 `Functor`。
* 使用 `Maybe` 可以使得应用更加健壮。


## Releasing the value
* 在某个特定的时间点有两种状态，而且应该保持这种状况不变直到最后一个函数为止。
* 即使代码有很多逻辑性的分支，也能保证一种线性的工作流。
* 利用 maybe 来进行空值检查 `maybe = curry((x, f, m) => m.isNothing() ? x : f(m.__value))`。

## Parametricity
* 不期待给定的参数是什么、是否有值。
* 常见 Some(x) : None 或者 Just(x) 或者 Just(x) / Nothing 类似的容器类型在做空值检查。

## Either
* `Either` 由 `Left` 和 `Right` 组成。
* `Right` => 引导正确操作。
* `Left`  => 引导错误操作。
* 本质上相当于 `逻辑或`(=> 范畴学中的 coproduct 的概念)。

## IO
* 把函数包裹在另外一个函数中，使得行为像一个纯函数。
* 类似于 命令模式 或者 队列。
* 把 `非纯执行动作` 捕获到包裹函数里。
* 延迟执行 `非纯执行动作`。
* 把函数当做变量，使函数不期待输入值。
* 最终调用，使用 `unsafePerformIO` 属性(相对于 __value 有利于提醒其他开发者)。

## 理论
### 交换律
```
map(id) === id
```

### 结合律
```
compose(map(f), map(g)) === map(compose(f, g))
```

### Functor
* Functor 把一个 `范畴` 映射到另一个 `范畴`。
* a 属于 C 范畴，通过 a 通过 functor 映射到 D 范畴 中，并使用 `F a` 代指 a。
* Maybe 把 一个 `范畴` 映射到另一个 `范畴`，可以有值，也可以没有职(Maybe => 称作 enddofunctor)。
* 关系图
```
Fa ------map(f)------> Fb
^                       ^
|                       |
(F.of)                (F.of)
|                       |
|                       |
a -------(f)----------> b
```

### 交换律
* 通过 Functor 关系图可得。
