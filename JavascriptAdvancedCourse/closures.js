//Closures in Javascript

var sum = function (a) {
  console.log("Hello", a);
  var c = 4;
  return function (b) {
    return a + b + c;
  };
};

var store = sum(2);
console.log(store(5));

var sum2 = function (a, b, c) {
  return {
    getSum2: function(){
        return a + b;
    },
    getSum3: function(){
        return a + b + c;
    }
  };
};

var store2 = sum2(2, 3, 4);
console.log(store2.getSum2());
console.log(store2.getSum3());
