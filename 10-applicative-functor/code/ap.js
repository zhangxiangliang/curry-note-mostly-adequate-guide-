var Container = function(x) {
    this.__value = x
}
Container.of = x => new Container(x);

Container.prototype.map = function(f) {
    return Container.of(f(this.__value))
}

Container.prototype.ap = function(other_container) {
    return other_container.map(this.__value)
}
