
import { DocumentRequest } from '../types';
import { getKeywords, getEditableFields, getDescription } from '../utils/templateHelpers';

export const renderProfessional = (request: DocumentRequest, ctx: any, specs: any, features: string[], getC: () => string) => {
  const { documentType, format } = request;
  const keywords = getKeywords(request);
  const description = getDescription(ctx, getC, documentType, format);
  const cleanFormat = format.split(' ')[0];

  return `
<div style="font-family: 'Inter', sans-serif; color: #374151; line-height: 1.6;">
  
  <!-- Header Section -->
  <div style="border-bottom: 2px solid #e5e7eb; padding-bottom: 1.5rem; margin-bottom: 2rem;">
    <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 0.75rem; color: #111827; letter-spacing: -0.025em;">
      ${getC()} ${documentType} Template (${cleanFormat})
    </h1>
    <p style="font-size: 1.125rem; color: #4b5563; margin: 0;">
      Fully Editable • High Resolution • ${specs.software.split(' ')[0]} Ready
    </p>
  </div>

  <!-- Main Description -->
  <div style="margin-bottom: 2.5rem;">
    <p style="font-size: 1.05rem; margin-bottom: 1.5rem; color: #374151;">
      ${description}
    </p>
    
    <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; padding: 1.25rem; border-radius: 0.75rem;">
      <h3 style="color: #1e40af; font-weight: 600; font-size: 1rem; margin-top: 0; margin-bottom: 0.75rem;">🚀 Why this ${cleanFormat} file?</h3>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span style="color: #2563eb; font-weight: bold;">✓</span> 
          <span><strong>Instant Download:</strong> Automated delivery immediately after purchase.</span>
        </li>
        <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span style="color: #2563eb; font-weight: bold;">✓</span> 
          <span><strong>Official Standard:</strong> Matches current ${new Date().getFullYear()} ${getC()} specifications.</span>
        </li>
        <li style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="color: #2563eb; font-weight: bold;">✓</span> 
          <span><strong>Layered & Organized:</strong> Designed for easy editing in ${specs.software.split(' ')[0]}.</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- Features Grid -->
  <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1.25rem; color: #111827;">Key Features</h2>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2.5rem;">
    ${features.map(f => `
      <div style="background-color: #f9fafb; padding: 1rem; border-radius: 0.5rem; border: 1px solid #e5e7eb; font-size: 0.9rem;">
        ${f}
      </div>
    `).join('')}
  </div>

  <!-- Specs Table -->
  <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1.25rem; color: #111827;">Technical Specifications</h2>
  <div style="overflow: hidden; border-radius: 0.75rem; border: 1px solid #e5e7eb; margin-bottom: 2.5rem;">
    <table style="width: 100%; font-size: 0.9rem; border-collapse: collapse;">
      <tbody>
        <tr style="background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 0.75rem 1.5rem; font-weight: 600; color: #374151; width: 30%;">File Format</td>
          <td style="padding: 0.75rem 1.5rem;">${format}</td>
        </tr>
        <tr style="background-color: #ffffff; border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 0.75rem 1.5rem; font-weight: 600; color: #374151;">Resolution</td>
          <td style="padding: 0.75rem 1.5rem;">${specs.resolution}</td>
        </tr>
        <tr style="background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 0.75rem 1.5rem; font-weight: 600; color: #374151;">Dimensions</td>
          <td style="padding: 0.75rem 1.5rem;">${specs.dimensions}</td>
        </tr>
        <tr style="background-color: #ffffff;">
          <td style="padding: 0.75rem 1.5rem; font-weight: 600; color: #374151;">Software</td>
          <td style="padding: 0.75rem 1.5rem;">${specs.software}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Editable Fields -->
  <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: #111827;">What You Can Edit</h2>
  <p style="margin-bottom: 1rem;">This template is designed for total flexibility. You can customize:</p>
  <div style="background-color: #f3f4f6; padding: 1.25rem; border-radius: 0.5rem; border-left: 4px solid #4f46e5; font-family: monospace; color: #4b5563; font-size: 0.9rem; margin-bottom: 2.5rem;">
    ${getEditableFields(ctx, documentType)}
  </div>

  <!-- FAQ -->
  <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1.25rem; color: #111827;">Frequently Asked Questions</h2>
  <div style="margin-bottom: 2rem;">
    <div style="margin-bottom: 1.25rem;">
      <h4 style="font-weight: 700; color: #1f2937; margin-bottom: 0.25rem;">Do I need to install fonts?</h4>
      <p style="font-size: 0.9rem; color: #4b5563; margin-top: 0;">
        ${ctx.isPDF 
          ? 'No, the correct fonts are <strong>embedded directly</strong> into the PDF file.' 
          : 'Yes, the download package includes the specific font files required. Install them before opening the template.'}
      </p>
    </div>
    <div style="margin-bottom: 1.25rem;">
      <h4 style="font-weight: 700; color: #1f2937; margin-bottom: 0.25rem;">Is this suitable for KYC testing?</h4>
      <p style="font-size: 0.9rem; color: #4b5563; margin-top: 0;">
        Yes, developers often use this template to test the robustness of verification AI against synthetic documents.
      </p>
    </div>
  </div>

  <!-- Footer Keywords -->
  <div style="border-top: 1px solid #e5e7eb; padding-top: 1.5rem; font-size: 0.75rem; color: #9ca3af; text-align: center;">
    Keywords: ${keywords}
  </div>
</div>
`;
};