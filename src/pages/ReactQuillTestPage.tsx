import { useState } from "react";
import ReactPDF, {
  PDFDownloadLink,
  Document,
  Page,
  Font,
  StyleSheet,
  PDFViewer,
  Note,
  View,
  Text,
} from "@react-pdf/renderer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Html } from "react-pdf-html";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  section: {
    marginBottom: 10,
    padding: "10px 20px",
    border: "1px solid black",
  },
  text: {
    fontFamily: "Nanum Gothic",
  },
});

const MyDocument = ({ data }: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* <Html>{data}</Html> */}
      <View style={styles.section}>
        <Text style={styles.text}>가나다</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>hello</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>hello</Text>
      </View>
    </Page>
  </Document>
);

Font.register({
  family: "Nanum Gothic",
  src: "https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-ExtraBold.ttf",
});

export const ReactQuillTestPage = () => {
  const [contents, setContents] = useState("");

  function handleChange(value: any) {
    setContents(value);
  }

  return (
    <div>
      <div style={{ position: "relative" }}>
        <ReactQuill onChange={handleChange} />
      </div>

      <PDFDownloadLink
        document={<MyDocument data={contents} />}
        fileName="resume.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
      <br />
      <PDFViewer>
        <MyDocument data={contents} />
      </PDFViewer>
    </div>
  );
};
