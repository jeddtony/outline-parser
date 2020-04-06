// let fs = require('fs'),
// PDFParser = require("pdf2json");

// let pdfParser = new PDFParser();

// pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
// pdfParser.on("pdfParser_dataReady", pdfData => {
// fs.writeFile("./talk-outline.txt", pdfParser.getRawTextContent(), (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });
// });

// pdfParser.loadPDF("./talk-outline.pdf");


const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('./talk-outline.pdf');
 
pdf(dataBuffer).then(function(data) {
 
    // number of pages
    // console.log(data.numpages);
    // // number of rendered pages
    // console.log(data.numrender);
    // // PDF info
    // console.log(data.info);
    // // PDF metadata
    // console.log(data.metadata); 
    // // PDF.js version
    // // check https://mozilla.github.io/pdf.js/getting_started/
    // console.log(data.version);
    // // PDF text
    // console.log(data.text); 

    // const json = JSON.parse(data.text);

    // json.ilove = 'unicorns';

    fs.writeFileSync('foo.txt', data.text);
        
});