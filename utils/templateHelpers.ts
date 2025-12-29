
import { DocumentRequest } from '../types';

export const getContext = (request: DocumentRequest) => {
  const { documentType, format } = request;
  return {
    isFinancial: documentType === 'Utility Bill' || documentType === 'Bank Statement',
    isIdentity: documentType !== 'Utility Bill' && documentType !== 'Bank Statement',
    isPSD: format.includes('PSD'),
    isPDF: format.includes('PDF'),
    isWord: format.includes('Word'),
  };
};

export const getTechSpecs = (ctx: any) => {
  if (ctx.isPSD) {
    return {
      resolution: '300 DPI (High Quality Print Ready)',
      mode: 'CMYK / RGB Color Mode',
      structure: 'Fully Layered & Grouped (.PSD)',
      software: 'Adobe Photoshop CS6 or CC (Creative Cloud)',
      dimensions: 'Official Standard Dimensions (ISO/IEC 7810)'
    };
  } else if (ctx.isPDF) {
    return {
      resolution: 'Vector Based (Lossless Scaling)',
      mode: 'Interactive AcroForms',
      structure: 'PDF/X-Standard Compliant',
      software: 'Adobe Acrobat Pro, Foxit, or modern Browsers',
      dimensions: 'A4 / Letter (Auto-Scaling)'
    };
  } else { // Word
    return {
      resolution: 'Standard Print Layout',
      mode: 'Text & Table Based',
      structure: 'Native .DOCX XML Format',
      software: 'Microsoft Word 2013+, Office 365, Google Docs',
      dimensions: 'Dynamic Pagination'
    };
  }
};

export const getFeatures = (ctx: any, getCountry: () => string, docType: string) => {
  const features = [];
  
  if (ctx.isIdentity) {
    if (ctx.isPSD) {
      features.push(`<strong>Smart Object Biometrics:</strong> Simply double-click the thumbnail layer to instantly replace the ID photo with your own. The template automatically applies correct masking and filters.`);
      features.push(`<strong>Authentic Security Layers:</strong> Includes separate layers for Guilloche patterns, UV holograms, OVI (Optically Variable Ink) text, and kinegrams.`);
      features.push(`<strong>MRZ & Barcode Generators:</strong> Dedicated text layers formatted with the correct OCR-B fonts to ensure the Machine Readable Zone (MRZ) is valid.`);
      features.push(`<strong>Realistic Texture Overlays:</strong> Optional layers to simulate card texture, plastic lamination reflections, grunge, and paper grain for a "scanned" look.`);
      features.push(`<strong>Correct Typography:</strong> We provide the specific proprietary fonts used in ${getCountry()} documents so you don't have to hunt for them.`);
    } else if (ctx.isPDF) {
      features.push(`<strong>Fillable Form Fields:</strong> No design skills needed. Just click and type your Name, DOB, Address, and ID Numbers into the pre-defined boxes.`);
      features.push(`<strong>Embedded Official Fonts:</strong> The correct typefaces are embedded directly into the PDF, ensuring consistency across different computers.`);
      features.push(`<strong>Vector Clarity:</strong> Background patterns are vector-based, ensuring they print crisp and sharp at any size without pixelation.`);
      features.push(`<strong>One-Click Photo Stamp:</strong> Features a Javascript-enabled button to browse and stamp your passport photo into the correct frame.`);
      features.push(`<strong>Automatic Formatting:</strong> Dates and ID numbers auto-format to match the specific style of ${getCountry()} regulations.`);
    } else { // Word
      features.push(`<strong>Easy-Edit Tables:</strong> The layout is built using standard Word tables and text boxes, making it accessible to anyone with basic Office skills.`);
      features.push(`<strong>Drag & Drop Photo:</strong> No complex masking. Simply copy and paste your image into the designated placeholder box.`);
      features.push(`<strong>No Plugin Needed:</strong> Fully compatible with standard Microsoft Office and Google Docs without requiring additional plugins.`);
      features.push(`<strong>Print Ready Margins:</strong> Pre-set page margins ensure the document prints correctly on standard A4 or Letter paper.`);
      features.push(`<strong>Lightweight File:</strong> Small file size makes it easy to email or upload without quality loss.`);
    }
  } else { // Financial
    if (ctx.isPSD) {
      features.push(`<strong>Pixel-Perfect Typography:</strong> Matches the exact font weight, spacing, and kerning used by major ${getCountry()} banks/providers.`);
      features.push(`<strong>Editable Graph Layers:</strong> Usage bars and financial charts are vector shapes that can be resized or recolored.`);
      features.push(`<strong>Scan Effects & Noise:</strong> Includes optional "Fold" and "Scan Noise" layers to simulate a physical mailed document.`);
      features.push(`<strong>Customizable Barcodes:</strong> PDF417 or 2D barcodes are on separate layers for easy replacement.`);
    } else if (ctx.isPDF) {
      features.push(`<strong>Auto-Calculation:</strong> (Supported Viewers) Subtotals and totals automatically update when you modify line item amounts.`);
      features.push(`<strong>Crisp Vectors:</strong> Bank logos and watermarks are SVG-based, ensuring they don't look blurry when printed.`);
      features.push(`<strong>Professional Layout:</strong> Maintains strict alignment identical to original digital PDF statements.`);
      features.push(`<strong>Replicable Transactions:</strong> Copy-paste transaction rows to extend the statement period easily.`);
    } else { // Word
      features.push(`<strong>Dynamic Transaction Tables:</strong> Add or delete transaction rows without breaking the overall page layout.`);
      features.push(`<strong>Native Text Editing:</strong> Edit amounts, dates, and descriptions just like writing a letter.`);
      features.push(`<strong>Auto-Paginating:</strong> Content flows naturally to new pages if your transaction history is long.`);
      features.push(`<strong>Header/Footer Replication:</strong> Authentic looking headers with bank logos and contact info on every page.`);
    }
  }
  return features;
};

export const getEditableFields = (ctx: any, docType: string) => {
  if (ctx.isIdentity) {
    return `Full Name, Residence Address, Date of Birth (DOB), Place of Birth, Issue Date, Expiry Date, ID/Passport Number, Height/Weight, Sex, Signature, and Photo.${ctx.isPSD ? ' You can also toggle visibility of Holograms, UV layers, and Scanned Textures.' : ''}`;
  } else {
    return `Account Holder Name, Billing Address, Statement Period, Opening Balance, Closing Balance, Transaction Dates, Descriptions, Amounts, ${docType === 'Utility Bill' ? 'Meter Readings and Usage Graphs' : 'Interest Rates and Fees'}.`;
  }
};

export const getKeywords = (request: DocumentRequest) => {
  const variantsStr = request.countryVariants.join(', ');
  return `${variantsStr} ${request.documentType}, editable ${request.documentType} template, ${request.countryVariants[0]} psd template, high quality mockup, kyc verification, novelty ${request.documentType}, fake ${request.documentType} design, movie prop`;
};
