import { Injectable } from "@angular/core";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Injectable({
    providedIn:'root'
})

export class CustomerService {


/**
 * Builds a beautiful standalone HTML document string from customer profile parameters
 * and exports it directly to a clean PDF format.
 */
downloadProfileAsPdf(customer: any): void {
  if (!customer) {
    alert('No active customer data loaded.');
    return;
  }

  // 1. Create a clean standalone container element node programmatically
  const pdfContainer = document.createElement('div');
  
  // Set dimensions tailored exactly to the jsPDF internal HTML coordinate matrix (approx 4:3 scale factor)
  pdfContainer.style.width = '790px'; 
  pdfContainer.style.padding = '40px';
  pdfContainer.style.backgroundColor = '#ffffff';
  pdfContainer.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  pdfContainer.style.boxSizing = 'border-box';

  // 2. Generate structured HTML layout string with clean inline styles
  pdfContainer.innerHTML = `
    <!-- Header Block -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 30px;">
      <div>
        <h1 style="margin: 0; font-size: 26px; font-weight: 800; color: #0f172a; letter-spacing: -0.5px;">Customer Profile</h1>
        <span style="font-size: 11px; font-weight: 700; color: #64748b; letter-spacing: 1px;">SYSTEM RECORD ARCHIVE</span>
      </div>
      <div style="text-align: right;">
        <span style="font-size: 13px; font-weight: 700; color: #2563eb; background-color: #eff6ff; padding: 6px 14px; border-radius: 6px; border: 1px solid #d0e1fd;">${customer.customerId}</span>
      </div>
    </div>

    
    <div style="display: flex; align-items: center; justify-content: space-between; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 35px;">
      <div style="display: flex; align-items: center; gap: 24px;">
        <img src="${customer.profilePic}" style="width: 84px; height: 84px; border-radius: 50%; object-fit: cover; border: 3px solid #ffffff; box-shadow: 0 4px 10px rgba(0,0,0,0.06);" alt="Avatar">
        <div>
          <h2 style="margin: 0 0 6px 0; font-size: 22px; font-weight: 700; color: #0f172a;">${customer.fullName}</h2>
          <span style="font-size: 13px; color: #64748b; font-weight: 500;">Registered: ${customer.registrationDate}</span>
        </div>
      </div>
      <div>
        <span style="background-color: #f0fdf4; color: #16a34a; font-size: 12px; font-weight: 700; padding: 6px 16px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.5px;">Active</span>
      </div>
    </div>

    <!-- Data Sections Block Container Stack -->
    <div style="display: flex; flex-direction: column; gap: 30px;">
      
      <!-- Section 1: Basic Information -->
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 13px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Basic Information</h3>
        <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 13px; border-bottom: 1px solid #f8fafc;"><span style="color: #64748b; font-weight: 500;">Full Name</span><span style="color: #1e293b; font-weight: 600;">${customer.fullName}</span></div>
        <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 13px; border-bottom: 1px solid #f8fafc;"><span style="color: #64748b; font-weight: 500;">Gender</span><span style="color: #1e293b; font-weight: 600;">Male</span></div>
        <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 13px; border-bottom: 1px solid #f8fafc;"><span style="color: #64748b; font-weight: 500;">Date of Birth</span><span style="color: #1e293b; font-weight: 600;">15 Aug 1990</span></div>
        <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 13px;"><span style="color: #64748b; font-weight: 500;">Customer ID</span><span style="color: #1e293b; font-weight: 600;">${customer.customerId}</span></div>
      </div>

      <!-- Section 2: Contact Information -->
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 13px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Contact Information</h3>
        <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 13px; border-bottom: 1px solid #f8fafc;"><span style="color: #64748b; font-weight: 500;">Mobile Number</span><span style="color: #1e293b; font-weight: 600;">${customer.mobileNumber}</span></div>
        <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 13px; border-bottom: 1px solid #f8fafc;"><span style="color: #64748b; font-weight: 500;">Email Address</span><span style="color: #1e293b; font-weight: 600;">${customer.email}</span></div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; padding: 8px 0; font-size: 13px;">
          <span style="color: #64748b; font-weight: 500;">Address</span>
          <span style="color: #1e293b; font-weight: 600; text-align: right; line-height: 1.5; max-width: 300px;">123, Park Street, Andheri West,<br>Mumbai, Maharashtra - 400058</span>
        </div>
      </div>

      <!-- Section 3: Bank Information -->
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 13px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Bank Information</h3>
        <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 13px; border-bottom: 1px solid #f8fafc;"><span style="color: #64748b; font-weight: 500;">Home Branch</span><span style="color: #1e293b; font-weight: 600;">${customer.branch}</span></div>
        <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 13px; border-bottom: 1px solid #f8fafc;"><span style="color: #64748b; font-weight: 500;">Total Accounts</span><span style="color: #1e293b; font-weight: 600;">${customer.totalAccounts}</span></div>
        <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 13px; border-bottom: 1px solid #f8fafc;">
          <span style="color: #64748b; font-weight: 500;">Total Balance</span>
          <span style="color: #0f172a; font-weight: 700;">₹ ${customer.totalBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 13px;"><span style="color: #64748b; font-weight: 500;">Account Types</span><span style="color: #1e293b; font-weight: 600;">Savings, Current, FD</span></div>
      </div>

      <!-- Section 4: Verification Checklist -->
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 13px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Verification Status</h3>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; font-size: 13px; border-bottom: 1px solid #f8fafc;">
          <span style="color: #64748b; font-weight: 500;">KYC Status</span>
          <span style="background-color: #ecfdf5; color: #059669; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 4px; text-transform: uppercase;">Verified</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; font-size: 13px; border-bottom: 1px solid #f8fafc;">
          <span style="color: #64748b; font-weight: 500;">Aadhaar Verified</span>
          <span style="color: #10b981; font-weight: 700; display: flex; align-items: center; gap: 4px; text-transform: uppercase;">Verified</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; font-size: 13px;">
          <span style="color: #64748b; font-weight: 500;">PAN Verified</span>
          <span style="color: #10b981; font-weight: 700; display: flex; align-items: center; gap: 4px; text-transform: uppercase;">Verified</span>
        </div>
      </div>

    </div>

    <!-- Document System Archival Footer Notice -->
    <div style="margin-top: 50px; border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center;">
      <p style="margin: 0; font-size: 11px; color: #94a3b8; line-height: 1.5;">
        This document is an official secure record copy compiled on ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}.<br>
        Classification: Internal Bank Use Only.
      </p>
    </div>
  `;

  // 3. Temporarily append hidden node container tree to DOM for parsing rendering
  document.body.appendChild(pdfContainer);

  // 4. Initialize jsPDF object instance in standard portrait millimeter format
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Calculate scaling parameter attributes to auto-compress HTML width into standard A4 boundaries
  const pageWidthMm = doc.internal.pageSize.getWidth(); // 210mm
  const marginMm = 15; // Clean 15mm border spacing
  const targetWidthMm = pageWidthMm - (marginMm * 2); // 180mm content grid target
  
  // 5. Invoke jsPDF's modern native HTML document layout parser engine
  doc.html(pdfContainer, {
    x: marginMm,
    y: marginMm,
    width: targetWidthMm, // Constraints element boundary layout width structure
    windowWidth: 790,     // Direct matching override sync lock rule mapping with element layout widths
    autoPaging: 'text',   // CRUCIAL: Intelligently calculates elements and pushes row blocks cleanly down
    html2canvas: {
      useCORS: true,    
      logging: false},
      callback: (pdf:any) => {
        document.body.removeChild(pdfContainer);
        const filename = `Customer_Profile_${customer.customerId || "Record"}.pdf`
        pdf.save(filename);}});}
}