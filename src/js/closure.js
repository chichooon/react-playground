function foo() {
  const str = "Hello World!";

  function bar() {
    // 함수 bar의 선언부
    console.log(str);
  }

  return bar;
}

const closureFunc = foo();
closureFunc(); // bar 실행
