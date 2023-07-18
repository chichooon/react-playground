/* eslint-disable react-hooks/rules-of-hooks */

function useState(initValue) {
  let _val = initValue;
  const state = () => _val;
  const setState = (newVal) => {
    _val = newVal;
  };
  return [state, setState];
}

const [state, setState] = useState("hello");

console.log(state());
setState("world");
console.log(state());
