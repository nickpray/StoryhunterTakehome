var a = 23;

var outerFunction = function(inputVar) {
    var a = 5;
    var b = inputVar;

    return {
        increment: function() {
            a++;
            b++;
        },
        print: function() {
            console.log(a);
            console.log(b);
        }
    }
}

f = outerFunction(43);

f.increment();

f.print();

console.log(a);
