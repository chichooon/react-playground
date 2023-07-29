// import { TestPage } from "./pages/TestPage";
import "./App.css";
import { CallbackTestPage } from "./pages/CallbackTestPage";
import { RecoilPage } from "./pages/RecoilPage";
// import { MemoTestPage } from "./pages/MemoTestPage";
// import { SnapTestPage } from "./pages/SnapTestPage";
const arr = new Array(10000).fill(0);
function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "grid",
          width: 100,
          height: 100,
          gridTemplateColumns: "repeat(100, 1fr)",
          gridTemplateRows: "repeat(100, 1fr)",
          border: "1px solid black",
        }}>
        {arr.map((_, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: `rgba(${Math.random() * 255},${
                Math.random() * 255
              },${Math.random() * 255})`,
            }}
          />
        ))}
      </div>
      {/* <TestPage /> */}
      {/* <SnapTestPage /> */}
      {/* <MemoTestPage /> */}
      {/* <CallbackTestPage /> */}
      <RecoilPage />
    </div>
  );
}

export default App;
