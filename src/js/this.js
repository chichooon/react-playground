function foo() {
  this.value = 2;
}

const obj = new foo();
console.log(obj.value);
