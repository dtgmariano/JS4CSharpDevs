var x = [];
x['name'] = 'Bill';
console.log(x['name']);
console.log(x.name);

//example of a function definition
function abc() {
    console.log('ABC...by J5');
};

abc(); // invokes the function

//Anonymous function
x.foo = function () {
    console.log('yo');
};

x.foo();

//Functions acts as an object.
//It doesn't need to be implemented as a method inside a class
var b = x.foo;
x.qak = b;
x.qak();

/*
In CSharp this indicates the instance of the class we're in.
The thing here is that the function is not in the class.
Here the function has a higher level.
For JS, "x" (in the left of the dot for getPayment) is "this".
*/
var getPayment = function (amount) {
    this.cash = (this.cash || 0) + amount;
};

var showCash = function () {
    console.log('Current cash: ' + this.cash);
};

x.getPayment = getPayment;
x.showCash = showCash;
x.getPayment(10);
x.showCash();

/*
look what happens if we don't call getPayment function
from the instance x (I'm using y instead of x now!)
*/

var y = [];

y.getPayment = getPayment;
y.showCash = showCash;
getPayment(20);
y.showCash();

var z = [];

z.getPayment = getPayment;
z.showCash = showCash;
z.getPayment(30);
showCash();

/*
showCase is function for the window object (WHAT????)
Window object -> Super Level!
*/
