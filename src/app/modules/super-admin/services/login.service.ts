import { Injectable } from "@angular/core";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
@Injectable()
export class LoginService{


    exportCurrentPageData(dataSource:any): void {
    if (!dataSource || dataSource.length === 0) {
      console.warn('No data available to export.');
      return;
    }

    // Define CSV Headers matching your table columns
    const headers = [
      'Login ID', 
      'Login Date & Time', 
      'User Name', 
      'Employee ID', 
      'User Role', 
      'Branch', 
      'IP Address', 
      'Device Type', 
      'Browser', 
      'Operating System', 
      'Login Status', 
      'Session Duration'
    ];

    // Map the current data source rows to an array of values
    const rows = dataSource.map((item:any) => [
      item.loginId,
      `"${item.loginDateTime}"`, // Wrap strings with commas/spaces in quotes
      `"${item.userName}"`,
      item.employeeId,
      `"${item.userRole}"`,
      `"${item.branch}"`,
      item.ipAddress,
      item.deviceType,
      item.browser,
      item.os,
      item.loginStatus,
      item.sessionDuration
    ]);

    // Combine headers and rows into a CSV string format
    const csvContent = [
      headers.join(','),
      ...rows.map((row:any) => row.join(','))
    ].join('\n');

    // Create a Blob and trigger file download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    const timestamp = new Date().toISOString().slice(0, 10);
    link.setAttribute('href', url);
    link.setAttribute('download', `login_history_page_${timestamp}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  downloadPDF(dataSource:any): void {
    if (!dataSource || dataSource.length === 0) {
      console.warn('No data available to download.');
      return;
    }

    // Initialize jsPDF (Landscape mode 'l' is recommended for wider tables)
    const doc = new jsPDF('l', 'mm', 'a4');

    // Add Document Title & Subtitle
    doc.setFontSize(18);
    doc.text('Login History Report', 14, 20);

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 27);

    // Define Table Headers
    const headers = [[
      'Login ID', 
      'Date & Time', 
      'User Name', 
      'Employee ID', 
      'User Role', 
      'Branch', 
      'IP Address', 
      'Status', 
      'Duration'
    ]];

    // Map Data Source rows matching the headers
    const data = dataSource.map((item:any) => [
      item.loginId,
      item.loginDateTime,
      item.userName,
      item.employeeId,
      item.userRole,
      item.branch,
      item.ipAddress,
      item.loginStatus,
      item.sessionDuration
    ]);

    // Generate AutoTable inside the PDF
    autoTable(doc, {
      head: headers,
      body: data,
      startY: 35, // Position below title
      theme: 'grid',
      styles: { fontSize: 8, cellPadding: 3 },
      headStyles: { fillColor: [41, 128, 185] } // Professional blue theme
    });

    // Trigger file download
    const timestamp = new Date().toISOString().slice(0, 10);
    doc.save(`login_history_${timestamp}.pdf`);
  }
}