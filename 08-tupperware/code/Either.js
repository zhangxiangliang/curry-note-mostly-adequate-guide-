var Left = function(x) {
    this.__value = x
}

Left.of = x => new Left(x)

Left.prototype.map = function (f) {
    return this;
}

var Right = function(x) {
    this.__value = x
}

Right.of = x => new Right(x)

Right.prototype.map = function (f) {
    return Right.of(f(this.__value))
}

either = curry((f, g, e) => {
    switch(e.constructor) {
        case Left: return f(e.__value)
        case Right: return g(e.__value)
    }
})
