import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { RefObject } from "react";

export const makePDF = async (ref: RefObject<HTMLElement>) => {
  // image creation from html docs
  const docs = ref.current;
  const canvas = await html2canvas(
    document.getElementById("docs") as HTMLElement
  );
  const image = canvas.toDataURL("image/png", 1.0);

  // PDF creation from image
  const pdf = new jsPDF("p", "mm", "a4"); // A4 size, portrait, mm unit page of PDF
  const pageWidth = pdf.internal.pageSize.getWidth(); // page internal width
  const pageHeight = pdf.internal.pageSize.getWidth(); // page internal height
  const imageHeight = (canvas.height * pageWidth) / canvas.width; // image height
  let heightTemp = imageHeight; // image height left
  let position = 0;

  pdf.addImage(image, "PNG", 0, 0, pageWidth, imageHeight); // image, type, x, y, width, height
  heightTemp -= pageHeight;

  while (heightTemp >= 0) {
    position = heightTemp - imageHeight;
    pdf.addPage();
    pdf.addImage(image, "PNG", 0, position, pageWidth, imageHeight);
    heightTemp -= pageHeight;
  }

  window.open(pdf.output("bloburl")); // open PDF in new tab

  const file = new File([pdf.output("blob")], "test.pdf", {
    type: "application/pdf",
  });
  // file creation

  return file;
};
