import axios from "axios";
import jsPDF from "jspdf";
import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
const generatePDF = (data, filename) => {
  const doc = new jsPDF();
  doc.text("PDF Document", 10, 10);

  // Add data to the PDF
  data.forEach((item, index) => {
    const yPos = 20 + index * 10;
    doc.text(`${item.Name}, ${item.Age}, ${item.City}`, 10, yPos);
  });

  doc.save(`${filename}.pdf`);
};

const ScrollableTable = () => {
  const data = [
    { Name: "John Doe", Age: 30, City: "New York" },
    { Name: "Jane Doe", Age: 25, City: "San Francisco" },
    // Add more data as needed
  ];
  const [qrCodeDataURL, setQRCodeDataURL] = useState('');


const laosk = async ()=>{
  console.log("tolonmh")
  await axios.get('http://localhost:8080/wa/auth/generate-qr') // Sesuaikan URL sesuai dengan backend Anda
      .then(res => {
        console.log(res.data.qrCodeDataUrl)
        // Ekstrak URL QR code dari respons
        // const qrCodeURL = res// Sesuaikan dengan format respons dari backend Anda
        setQRCodeDataURL(res.data.qrCodeDataUrl);
        // alert(res)
   
      })
      .catch(error => console.error('Error fetching QR code:', error));
}
  return (
    <>
    <button onClick={() => generatePDF(data, "pdfFile")}>
      Download PDF
    </button>
    <button onClick={() => laosk()}>
      generate qr
    </button>
    <div>
      <h1>QR Code Viewer</h1>
      { <QRCode value={qrCodeDataURL} />}
    </div>
  
    </>
  );
};

export default ScrollableTable;
 
