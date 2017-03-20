//Closures and confusion
var z = {
    i: 0,
    Fn: function () {
        var a = function () { this.i = 42; };
        a();
        console.log(this.i);
    }
}
z.Fn();

var q = {
    i: 0,
    Fn: function () {
        var that = this;
        var a = function () { that.i = 42; };
        a();
        console.log(this.i);
    }
}
q.Fn();

function abc(foo, bar) {
    console.log(foo);
    console.log(bar);
}
abc(123, 456, 789);

function def(foo, bar) {
    console.log(arguments);
}
def(123, 456, 789);
