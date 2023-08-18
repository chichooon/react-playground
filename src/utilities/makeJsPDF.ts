import jsPDF from "jspdf";
import { font } from "./nanumGothic";

const data = {
  name: "chichoon",
  phone: "01012345678",
  email: "asd@naver.com",
  github: "https://github.com",
  blog: "https://blog.naver.com",
};

export const makeJsPDF = async () => {
  const pdf = new jsPDF("p", "mm", "a4"); // A4 size, portrait, mm unit page of PDF
  pdf.addFileToVFS("NanumGothic-Regular.ttf", font);
  pdf.addFont("NanumGothic-Regular.ttf", "NanumGothic", "normal");
  pdf.setFont("NanumGothic");
  pdf.text("이력서", 13, 12, { align: "center" });

  pdf.text(data.name, 120, 10);
  pdf.text(data.phone, 120, 20);
  pdf.text(data.email, 120, 30);
  pdf.link(120, 40, 20, 10, { url: data.github });

  window.open(pdf.output("bloburl")); // open PDF in new tab
};
