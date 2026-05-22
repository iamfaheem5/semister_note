const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

(async () => {
  const pdfPath = 'CSE-1102_Semester_Final_Questions_2018.pdf';
  const pdfBytes = fs.readFileSync(pdfPath);
  const pdfDoc = await PDFDocument.load(pdfBytes);
  
  const pages = pdfDoc.getPages();
  console.log('Pages:', pages.length);
  
  for (let i = 0; i < pages.length; i++) {
    const contentStream = pages[i].getContentStream();
    const operations = contentStream.getOperations();
    console.log('Page', i+1, 'operations count:', operations.length);
    
    const textOps = operations.filter(op => 
      op.name === 'Tj' || op.name === 'TJ' || op.name === "'" || op.name === '"'
    );
    console.log('Text operations:', textOps.length);
    if (textOps.length > 0) {
      console.log('Sample text op:', JSON.stringify(textOps[0]).substring(0, 200));
    }
  }
})();
