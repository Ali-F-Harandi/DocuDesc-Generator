
import { DocumentRequest } from '../types';
import { getKeywords, getEditableFields } from '../utils/templateHelpers';

export const renderProfessional = (request: DocumentRequest, ctx: any, specs: any, features: string[], getC: () => string) => {
  const { documentType, format } = request;
  const keywords = getKeywords(request);

  return `
<div style="font-family: sans-serif; color: #374151; line-height: 1.6;">
  <h1 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem; color: #111827;">Get the Best ${getC()} ${documentType} Template (${format}) – Fully Editable & High Resolution</h1>

  <p style="margin-bottom: 1.5rem;">Are you looking for a <strong>premium ${getC()} ${documentType} template</strong>? Our meticulously designed <strong>editable ${format.split(' ')[0]} file</strong> is the ultimate solution for your design projects, movie props, online verification tests (KYC), and novelty purposes. Unlike low-quality scans found on forums, this mockup is hand-crafted from scratch using vector shapes and high-definition textures to match the latest official standards for ${new Date().getFullYear()}.</p>

  <div style="background-color: #f3f4f6; border: 1px solid #c7d2fe; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 2rem;">
    <h3 style="color: #3730a3; font-weight: 600; font-size: 1.125rem; margin-top: 0; margin-bottom: 0.75rem;">🚀 Why Choose Our ${getC()} Mockup?</h3>
    <ul style="list-style: none; padding: 0; margin: 0;">
      <li style="display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem;">
        <span style="color: #16a34a; font-weight: bold;">✔</span> 
        <span><strong>Instant Download:</strong> Get your file immediately after purchase.</span>
      </li>
      <li style="display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem;">
        <span style="color: #16a34a; font-weight: bold;">✔</span> 
        <span><strong>High Precision:</strong> Exact font match and layout replication.</span>
      </li>
      <li style="display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem;">
        <span style="color: #16a34a; font-weight: bold;">✔</span> 
        <span><strong>Full Control:</strong> Every text field and element is editable.</span>
      </li>
    </ul>
  </div>

  <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: #312e81;">Key Features of this ${getC()} ${documentType}</h2>
  <p style="margin-bottom: 1rem;">This template allows you to generate a realistic looking document without needing advanced graphic design skills. Here is what makes it unique:</p>
  <ul style="display: grid; grid-template-columns: 1fr; gap: 0.75rem; padding: 0; margin-bottom: 2rem; list-style: none;">
    ${features.map(f => `<li style="background-color: #f9fafb; padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #e5e7eb; font-size: 0.875rem;">${f}</li>`).join('')}
  </ul>

  <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: #312e81;">Technical Specifications</h2>
  <div style="overflow: hidden; border-radius: 0.75rem; border: 1px solid #e5e7eb; margin-bottom: 2rem;">
    <table style="width: 100%; font-size: 0.875rem; border-collapse: collapse;">
      <tbody>
        <tr style="background-color: #f3f4f6;"><td style="padding: 0.75rem 1.5rem; font-weight: 500; color: #111827;">File Format</td><td style="padding: 0.75rem 1.5rem;">${format}</td></tr>
        <tr style="background-color: #ffffff;"><td style="padding: 0.75rem 1.5rem; font-weight: 500; color: #111827;">Resolution</td><td style="padding: 0.75rem 1.5rem;">${specs.resolution}</td></tr>
        <tr style="background-color: #f3f4f6;"><td style="padding: 0.75rem 1.5rem; font-weight: 500; color: #111827;">Dimensions</td><td style="padding: 0.75rem 1.5rem;">${specs.dimensions}</td></tr>
        <tr style="background-color: #ffffff;"><td style="padding: 0.75rem 1.5rem; font-weight: 500; color: #111827;">Required Software</td><td style="padding: 0.75rem 1.5rem;">${specs.software}</td></tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: #312e81;">What Can You Edit?</h2>
  <p style="margin-bottom: 1rem;">This <strong>${getC()} ${documentType}</strong> mockup is designed for total flexibility. You can customize the following data points:</p>
  <p style="background-color: #f3f4f6; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #6366f1; font-style: italic; color: #374151; margin-bottom: 2rem;">${getEditableFields(ctx, documentType)}</p>

  <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: #312e81;">Frequently Asked Questions (FAQ)</h2>
  <div style="margin-bottom: 1.5rem;">
    <div style="margin-bottom: 1rem;">
      <h4 style="font-weight: 700; color: #111827; margin-bottom: 0.25rem;">Is this a real document?</h4>
      <p style="font-size: 0.875rem; color: #4b5563; margin-top: 0;">No, this is a <strong>novelty template</strong> intended for educational use, movie props, and design verification. It is not a government-issued document.</p>
    </div>
    <div style="margin-bottom: 1rem;">
      <h4 style="font-weight: 700; color: #111827; margin-bottom: 0.25rem;">Do I need to install fonts?</h4>
      <p style="font-size: 0.875rem; color: #4b5563; margin-top: 0;">Yes, the download package includes all necessary fonts. ${ctx.isPDF ? 'For the PDF version, fonts are embedded.' : 'Install them before opening the file.'}</p>
    </div>
    <div style="margin-bottom: 1rem;">
      <h4 style="font-weight: 700; color: #111827; margin-bottom: 0.25rem;">Can I use this for KYC verification?</h4>
      <p style="font-size: 0.875rem; color: #4b5563; margin-top: 0;">Many developers use our templates to test their KYC (Know Your Customer) AI systems for robustness against synthetic IDs.</p>
    </div>
  </div>

  <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #e5e7eb; font-size: 0.75rem; color: #6b7280; text-align: center;">
    Keywords: ${keywords}
  </div>
</div>
`;
};
