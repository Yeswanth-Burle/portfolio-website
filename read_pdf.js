const fs = require('fs');
const pdf = require('pdf-parse');

async function readPdfs() {
    try {
        const newPdf = fs.readFileSync('C:\\Users\\yeswa\\OneDrive\\Desktop\\IMP\\CV.pdf');
        const newText = await pdf(newPdf);
        console.log("--- NEW CV ---");
        console.log(newText.text);

        const oldPdfFilePath = 'C:\\Users\\yeswa\\OneDrive\\Desktop\\PORTFOLIO\\assets\\Yeswanth_Burle_CV.pdf';
        if (fs.existsSync(oldPdfFilePath)) {
            const oldPdf = fs.readFileSync(oldPdfFilePath);
            const oldText = await pdf(oldPdf);
            console.log("\n\n--- OLD CV ---");
            console.log(oldText.text);
        } else {
            console.log("\n\n--- OLD CV ---");
            console.log("Old CV not found at the expected path.");
        }
    } catch (e) {
        console.error("Error reading PDFs:", e);
    }
}

readPdfs();
