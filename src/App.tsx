// import { TestPage } from "./pages/TestPage";
import "./App.css";
import { LazyTestPage } from "./pages/LazyTestPage";
import { RecoilRerenderPage } from "./pages/RecoilRerenderPage";
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
      {/* <LazyTestPage /> */}
      <RecoilRerenderPage />
    </div>
  );
}

export default App;
