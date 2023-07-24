import { useMemo, useState } from "react";

function multiply10(n: number) {
  console.log("곱하기 10 계산 중...");
  return n * 10;
}

export const MemoTestPage = () => {
  const [count, setCount] = useState<number>(1);
  const [count2, setCount2] = useState<number>(1);
  const result = useMemo(() => multiply10(count2), [count2]);

  const handleClickButton = () => {
    console.log("왼쪽 버튼 클릭");
    setCount((prev) => prev + 1);
  };

  const handleClickButton2 = () => {
    console.log("오른쪽 버튼 클릭");
    setCount2((prev) => prev + 1);
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", gap: 50 }}>
        <h2>왼쪽: {count}</h2>
        <h2>오른쪽: {result}</h2>
      </div>
      <button type="button" onClick={handleClickButton}>
        왼쪽 숫자 증가
      </button>
      <button type="button" onClick={handleClickButton2}>
        오른쪽 숫자 증가
      </button>
    </div>
  );
};
