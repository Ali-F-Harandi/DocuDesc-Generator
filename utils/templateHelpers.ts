
import { DocumentRequest } from '../types';

// ==========================================
// CONTEXT HELPERS
// ==========================================

export const getContext = (request: DocumentRequest) => {
  const { documentType, format } = request;
  return {
    isFinancial: documentType === 'Utility Bill' || documentType === 'Bank Statement',
    isIdentity: documentType === 'Passport' || documentType === 'ID Card' || documentType === 'Driver License',
    isPassport: documentType === 'Passport',
    isID: documentType === 'ID Card',
    isDL: documentType === 'Driver License',
    isUtility: documentType === 'Utility Bill',
    isBank: documentType === 'Bank Statement',
    isPSD: format.includes('PSD'),
    isPDF: format.includes('PDF'),
    isWord: format.includes('Word'),
  };
};

// ==========================================
// DYNAMIC CONTENT GENERATORS
// ==========================================

export const getDescription = (ctx: any, getCountry: () => string, docType: string, format: string) => {
    const country = getCountry();
    const cleanFormat = format.split(' ')[0];

    // Identity Documents
    if (ctx.isIdentity) {
        if (ctx.isPSD) {
            return `Get the most realistic and high-resolution <strong>${country} ${docType}</strong> template available. This <strong>PSD file</strong> is meticulously designed to match the latest official ${country} standards. Hand-crafted using vector shapes and high-definition textures, this template allows for extreme close-ups without pixelation. Ideal for online verification testing, KYC system calibration, and high-fidelity design mockups.`;
        }
        if (ctx.isPDF) {
            return `Streamline your verification needs with this fully editable <strong>${country} ${docType} PDF</strong>. Unlike static images, this file features <strong>interactive form fields</strong> that allow you to type directly into the document. It automatically formats your data (dates, MRZ code, fonts) to match official ${country} regulations, ensuring a perfect look every time without needing Photoshop.`;
        }
        if (ctx.isWord) {
            return `Create a professional <strong>${country} ${docType}</strong> layout using Microsoft Word. This <strong>.DOCX template</strong> is built using standard tables and text boxes, making it accessible for anyone. While it maintains the visual layout of a ${docType}, it is optimized for ease of use, allowing you to quickly swap photos and text for training manuals, props, or quick mockups.`;
        }
    }

    // Utility Bills
    if (ctx.isUtility) {
        if (ctx.isPSD) {
            return `This <strong>${country} Utility Bill PSD</strong> is a 1:1 replica of major service providers in the region. It features editable text layers for Name, Address, and Usage Data, plus <strong>vector-based graphs</strong> that you can adjust to simulate realistic energy/water consumption. Includes optional "Scan Texture" layers to make the bill look like it was physically scanned.`;
        }
        if (ctx.isPDF) {
            return `Generate a valid Proof of Address instantly with this <strong>${country} Utility Bill PDF</strong>. It features <strong>auto-calculating fields</strong>—simply enter the usage amount, and the subtotal/total taxes update automatically. Perfect for creating consistent, error-free documents for address verification testing or account recovery.`;
        }
        if (ctx.isWord) {
            return `A lightweight and easy-to-edit <strong>${country} Utility Bill</strong> in Word format. Designed for simplicity, this template uses standard fonts and table structures. It's perfect for users who need a quick Proof of Address mockup without dealing with complex graphic design software. Just open, type, and print.`;
        }
    }

    // Bank Statements
    if (ctx.isBank) {
        if (ctx.isPSD) {
            return `A premium <strong>${country} Bank Statement PSD</strong> template. We have replicated the typography, grid system, and logo placement of top ${country} banks. Every transaction row is a separate text layer, allowing you to build a custom financial history. Includes "Fold Line" and "Paper Grain" overlays for added realism.`;
        }
        if (ctx.isPDF) {
            return `The ultimate <strong>${country} Bank Statement PDF</strong>. This file handles the math for you. It replicates the exact digital PDF structure sent by banks, including vector logos and crisp text. Copy and paste your transaction data, and the template preserves the official formatting, making it indistinguishable from a native digital statement.`;
        }
        if (ctx.isWord) {
            return `An accessible <strong>${country} Bank Statement</strong> template in .DOCX format. Ideal for educational scenarios or simple props, this template allows you to easily add or remove transaction rows using Microsoft Word's table tools. It includes header/footer replication to maintain the official bank look across multiple pages.`;
        }
    }

    return `High quality ${country} ${docType} template in ${cleanFormat} format.`;
};

// ==========================================
// TECHNICAL SPECS GENERATOR
// ==========================================

export const getTechSpecs = (ctx: any) => {
  if (ctx.isPSD) {
    return {
      resolution: '300 DPI (High Quality Print Ready)',
      mode: 'CMYK / RGB Color Mode',
      structure: 'Fully Layered, Grouped & Named',
      software: 'Adobe Photoshop CS6 or CC',
      dimensions: ctx.isIdentity ? 'ISO/IEC 7810 (ID-1 Standard)' : 'A4 / Letter Standard'
    };
  } else if (ctx.isPDF) {
    return {
      resolution: 'Vector Based (Infinite Scaling)',
      mode: 'Interactive AcroForms (JavaScript Enabled)',
      structure: 'PDF/X-Standard Compliant',
      software: 'Adobe Acrobat Pro / Foxit Reader',
      dimensions: 'Auto-Scaling Vector Layout'
    };
  } else { // Word
    return {
      resolution: 'Standard Print Layout',
      mode: 'Text & Table Based',
      structure: 'Native .DOCX XML Format',
      software: 'Microsoft Word 2013+ / Google Docs',
      dimensions: 'Dynamic Pagination'
    };
  }
};

// ==========================================
// FEATURE LIST GENERATOR
// ==========================================

export const getFeatures = (ctx: any, getCountry: () => string, docType: string) => {
  const country = getCountry();
  const features = [];
  
  // --- IDENTITY DOCUMENTS (Passport, ID, DL) ---
  if (ctx.isIdentity) {
    if (ctx.isPSD) {
      features.push(`<strong>Smart Object Photo:</strong> Double-click the thumbnail to instantly insert your photo. The file applies correct masking and holograms automatically.`);
      features.push(`<strong>Security Layers:</strong> Includes separate layers for ${country}-specific UV holograms, OVI (Optically Variable Ink), and guilloche patterns.`);
      features.push(`<strong>MRZ Generator:</strong> The machine-readable zone (bottom code) is fully editable with the correct OCR-B font included.`);
      features.push(`<strong>Realistic Textures:</strong> Toggle "Plastic Shine," "Grunge," and "Paper Grain" layers for a scanned or photographed look.`);
      if (ctx.isPassport) features.push(`<strong>Gold Foil Effect:</strong> Simulates the metallic gold embossing found on ${country} passport covers.`);
    } else if (ctx.isPDF) {
      features.push(`<strong>Fillable Forms:</strong> Click and type to update Name, DOB, and ID Numbers. No design skills required.`);
      features.push(`<strong>Auto-Formatting:</strong> Dates and ID numbers automatically format to match ${country} standards.`);
      features.push(`<strong>Embedded Fonts:</strong> The proprietary fonts used by the issuing authority are embedded in the file.`);
      features.push(`<strong>Vector QR/Barcodes:</strong> Generates crisp 2D barcodes based on your input data.`);
    } else { // Word
      features.push(`<strong>Easy-Edit Tables:</strong> Layout built with standard Word tables for maximum compatibility.`);
      features.push(`<strong>Drag & Drop:</strong> Simply paste your photo into the text box placeholder.`);
      features.push(`<strong>Print Ready:</strong> Pre-set margins ensure it fits perfectly on standard paper.`);
    }
  } 
  
  // --- FINANCIAL DOCUMENTS (Utility, Bank) ---
  else { 
    if (ctx.isPSD) {
      features.push(`<strong>Exact Typography:</strong> Matches the specific font weights and kerning of major ${country} institutions.`);
      if (ctx.isUtility) features.push(`<strong>Vector Graphs:</strong> Usage bars for water/electricity are vector shapes you can resize.`);
      if (ctx.isBank) features.push(`<strong>Authentic Layout:</strong> Replicates the grid system used in official monthly statements.`);
      features.push(`<strong>Scan Effects:</strong> "Fold" and "Noise" layers included to simulate a mailed document.`);
    } else if (ctx.isPDF) {
      if (ctx.isBank) features.push(`<strong>Auto-Calculation:</strong> Modify one transaction and the running balance updates automatically.`);
      features.push(`<strong>Vector Logos:</strong> Bank/Utility logos are SVG-based for perfect clarity at any zoom.`);
      features.push(`<strong>Replicable Rows:</strong> Easily copy-paste transaction lines to extend the document period.`);
    } else { // Word
      features.push(`<strong>Dynamic Tables:</strong> Add or delete rows without breaking the page layout.`);
      features.push(`<strong>Native Editing:</strong> Edit amounts and descriptions just like typing a letter.`);
      features.push(`<strong>Multi-Page Support:</strong> Headers and footers repeat automatically on new pages.`);
    }
  }
  return features;
};

// ==========================================
// EDITABLE FIELDS GENERATOR
// ==========================================

export const getEditableFields = (ctx: any, docType: string) => {
  if (ctx.isPassport || ctx.isID || ctx.isDL) {
    const common = "Full Name, Date of Birth, Issue Date, Expiry Date, Document Number, Signature, Photo";
    if (ctx.isPassport) return `${common}, Place of Birth, Nationality, MRZ Code (Lines 1 & 2).`;
    if (ctx.isDL) return `${common}, License Class, Restrictions, Endorsements, Address, Height/Eyes.`;
    return `${common}, Address, Sex, Personal Number, Card Access Number (CAN).`;
  } else if (ctx.isUtility) {
    return "Account Holder Name, Service Address, Billing Date, Due Date, Previous Balance, Payments, New Charges, Meter Readings (Current/Previous), Usage Graph Values.";
  } else { // Bank
    return "Account Name, Branch Address, Account Number, IBAN/SWIFT, Statement Period, Opening Balance, Deposits, Withdrawals, Closing Balance, Transaction Dates & Descriptions.";
  }
};

// ==========================================
// KEYWORD GENERATOR
// ==========================================

export const getKeywords = (request: DocumentRequest) => {
  const { country, countryVariants, documentType, format } = request;
  const mainVar = countryVariants[0] || country;
  const cleanFormat = format.split(' ')[0];
  
  return `${mainVar} ${documentType} template, editable ${country} ${documentType} ${cleanFormat}, fake ${documentType} generator, ${mainVar} proof of address, kyc verification ${documentType}, high quality ${documentType} mockup, buy ${country} ${documentType}`;
};