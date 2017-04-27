var id = x => x

map = R.curry((fn, xs) => xs.map(fn))

var Container = function(x) {
    this.unsafePerformIO = x;
}

Container.of = x => new Container(x)

Container.prototype.map = function(f) {
    return Container.of(f(this.unsafePerformIO))
}

var law1 = map(id)
var law2 = id

law1(Container.of(2))
law2(Container.of(2))
