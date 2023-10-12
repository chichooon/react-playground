import { useReducer, useState } from "react";

// export const UseRenderPage = () => {
//   const [num, setNum] = useState(0);

//   function handleAddNum() {
//     setNum((prev) => prev + 1);
//   }

//   function handleSubNum() {
//     setNum((prev) => prev - 1);
//   }

//   return (
//     <div>
//       <span>{num}</span>
//       <br />
//       <button onClick={handleAddNum}>더하기</button>
//       <button onClick={handleSubNum}>빼기</button>
//     </div>
//   );
// };

function numberReducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUB":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
}

export const UseRenderPage = () => {
  const [num, dispatch] = useReducer(numberReducer, 0);

  return (
    <div>
      <span>{num}</span>
      <br />
      <button onClick={() => dispatch({ type: "ADD" })}>더하기</button>
      <button onClick={() => dispatch({ type: "SUB" })}>빼기</button>
    </div>
  );
};
