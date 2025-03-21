import "./App.css";
import PdfViewer from "./PdfViewer";

function App() {
  const pdfUrl = "http://192.168.68.110:3000/files/proposta.pdf";

  return (
    <>
      <h1>PDF Viewer</h1>
      <div className="pdf-viewer-container">
        <PdfViewer pdfUrl={pdfUrl} />
      </div>
    </>
  );
}

export default App;
