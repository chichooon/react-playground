function foo() {
  console.log(this);
}

const class1 = {
  value: 1,
  func: foo,
};

const class2 = {
  value: 2,
};

const bar = class1.func.bind(class2);
bar();
