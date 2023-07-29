// import { TestPage } from "./pages/TestPage";
import "./App.css";
import { LazyTestPage } from "./pages/LazyTestPage";
// import { CallbackTestPage } from "./pages/CallbackTestPage";
// import { RecoilPage } from "./pages/RecoilPage";
// import { MemoTestPage } from "./pages/MemoTestPage";
// import { SnapTestPage } from "./pages/SnapTestPage";
function App() {
  return (
    <div className="App">
      {/* <TestPage /> */}
      {/* <SnapTestPage /> */}
      {/* <MemoTestPage /> */}
      {/* <CallbackTestPage /> */}
      {/* <RecoilPage /> */}
      <LazyTestPage />
    </div>
  );
}

export default App;
