import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { makePDF } from "../utilities/makePDF";

export const Html2PdfPage = () => {
  const [contents, setContents] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  function handleChange(value: any) {
    setContents(value);
    document.getElementById("docs")!.innerHTML = contents;
  }

  function handleClick() {
    makePDF(ref);
  }

  return (
    <div>
      <div style={{ position: "relative" }}>
        <ReactQuill onChange={handleChange} />
      </div>
      <button type="button" onClick={handleClick}>
        download pdf
      </button>
      <div dangerouslySetInnerHTML={{ __html: contents }} ref={ref} />
    </div>
  );
};
