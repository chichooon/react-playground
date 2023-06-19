export const SnapTestPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h1>snap test</h1>
      <div
        style={{
          height: 240,
          border: "1px solid black",
          padding: "20px",
          overflow: "scroll",
          scrollSnapType: "block mandatory",
        }}>
        <div
          style={{
            width: 200,
            height: 200,
            marginBottom: 10,
            color: "white",
            backgroundColor: "green",
            scrollSnapAlign: "start",
          }}>
          Box 1
        </div>
        <div
          style={{
            width: 200,
            height: 200,
            marginBottom: 10,
            color: "white",
            backgroundColor: "black",
            scrollSnapAlign: "start",
          }}>
          Box 2
        </div>
        <div
          style={{
            width: 200,
            height: 200,
            marginBottom: 10,
            color: "white",
            backgroundColor: "magenta",
            scrollSnapAlign: "start",
          }}>
          Box 3
        </div>
        <div
          style={{
            width: 200,
            height: 200,
            marginBottom: 10,
            color: "white",
            backgroundColor: "blue",
            scrollSnapAlign: "start",
          }}>
          Box 4
        </div>
      </div>
    </div>
  );
};
