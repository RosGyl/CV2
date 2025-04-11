
function downloadPDF() {
    const element = document.body;
    html2pdf().from(element).set({
        margin: 0.5,
        filename: 'Mitt-CV.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).save();
}
