function exportToExcel() {
    const table = document.getElementById("workTable");
    const html = table.outerHTML;

    // Create a data URI for the Excel file
    const url = 'data:application/vnd.ms-excel;base64,' + btoa(unescape(encodeURIComponent(html)));
    
    // Create a temporary link element
    const downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);
    
    downloadLink.href = url;
    downloadLink.download = 'Construction_Progress_Report.xls'; // File name
    
    // Trigger the download
    downloadLink.click();
    
    // Clean up
    document.body.removeChild(downloadLink);
}