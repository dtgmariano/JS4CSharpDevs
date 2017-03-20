function Shape() {
    this.area = 1;
};

function Rectangle() { };
Rectangle.prototype = new Shape();

var a = new Rectangle();
console.log(a.area);
