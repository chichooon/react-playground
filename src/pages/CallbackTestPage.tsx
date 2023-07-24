import { useCallback, useEffect, useState } from "react";

export const CallbackTestPage = () => {
  const [count, setCount] = useState<number>(1);
  const [count2, setCount2] = useState<number>(1);

  const handleClickButton = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleClickButton2 = useCallback(() => {
    setCount2((prev) => prev + 1);
  }, []);

  useEffect(() => {
    console.log("handleClickButton 재생성");
  }, [setCount]);

  useEffect(() => {
    console.log("handleClickButton2 재생성");
  }, [handleClickButton2]);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", gap: 50 }}>
        <h2>왼쪽: {count}</h2>
        <h2>오른쪽: {count2}</h2>
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
