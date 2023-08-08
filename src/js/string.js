let string = "hello world";

String.prototype.replaceAt = function (index, replace) {
  return this.substring(0, index) + replace + this.substring(index + 1);
};

string = string.replaceAt(2, "a");
console.log(string);
