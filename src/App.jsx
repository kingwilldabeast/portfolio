import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Header from './Components/Header'
import Torso from './Components/Torso'
import Footer from './Components/Footer'
import PdfViewer from './Components/PDFviewer'
// import PDFFile from './assets/resume.pdf'


export default function App() {

  const [pdfFile, setPdfFile] = useState(null);
  const [showPdf, setShowPdf] = useState(false);
  const handleButtonClick = () => {
      setShowPdf(true);
      // setPdfFile('../src/assets/resume.pdf'); 
      setPdfFile('/resume.pdf');  // Reference directly from public directory
    };

  const handleCloseModal = () => {
      setShowPdf(false);
  };

  return (
    <>
    <Header/>
    <Torso/>
    {showPdf && <PdfViewer onClose={handleCloseModal} showPdf = {showPdf} handleCloseModal={handleCloseModal} pdfFile={pdfFile}/>}
    <Footer handleButtonClick = {handleButtonClick}/>
    </>
  )
}


