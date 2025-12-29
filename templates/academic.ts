
import { DocumentRequest } from '../types';

export const renderAcademic = (request: DocumentRequest, ctx: any, specs: any, features: string[], getC: () => string) => {
  const { documentType, format } = request;

  return `
<div style="font-family: serif; border-bottom: 4px solid #9ca3af; margin-bottom: 2rem; padding-bottom: 1rem;">
  <h1 style="font-size: 1.875rem; font-weight: 400; color: #111827; margin-top: 0; margin-bottom: 0.5rem;">Forensic Analysis Template: ${getC()} ${documentType}</h1>
  <div style="font-family: monospace; font-size: 0.75rem; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; display: flex; flex-wrap: wrap; gap: 1rem;">
    <span>Reference ID: DOC-${new Date().getFullYear()}-X</span>
    <span>•</span>
    <span>Format: ${format}</span>
    <span>•</span>
    <span>Compliance Level: High-Fidelity</span>
  </div>
</div>

<div style="font-family: sans-serif; color: #374151; line-height: 1.6;">
  <h2 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin-top: 0; margin-bottom: 1rem;">1. Introduction & Training Objectives</h2>
  <p style="text-align: justify; margin-bottom: 1.5rem;">
    This programmable template represents a digital reconstruction of the <strong>${getC()} ${documentType}</strong>. It is intended for educational purposes, specifically for the training of verification agents, development of Optical Character Recognition (OCR) algorithms, and analysis of document security architecture. The file mimics the structural layout defined by the issuing authority's standards for ${new Date().getFullYear()}.
  </p>

  <h2 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">2. Structural Anatomy</h2>
  <p style="margin-bottom: 1.5rem;">
    The template is segmented into discrete logical units to facilitate forensic study of the document's composition. Users may isolate individual components to study positioning and font metrics.
  </p>

  <div style="margin: 1.5rem 0; border: 1px solid #d1d5db; border-radius: 0.5rem; overflow: hidden;">
    <table style="width: 100%; font-size: 0.875rem; text-align: left; border-collapse: collapse;">
      <thead style="background-color: #f3f4f6; color: #111827; font-weight: 700; text-transform: uppercase; font-size: 0.75rem;">
        <tr>
          <th style="padding: 0.75rem 1.5rem; border-right: 1px solid #d1d5db; border-bottom: 1px solid #d1d5db;">Component Zone</th>
          <th style="padding: 0.75rem 1.5rem; border-bottom: 1px solid #d1d5db;">Forensic Detail</th>
        </tr>
      </thead>
      <tbody style="background-color: #ffffff;">
        <tr>
          <td style="padding: 1rem 1.5rem; font-family: monospace; color: #4338ca; border-right: 1px solid #d1d5db; border-bottom: 1px solid #d1d5db;">Zone I (Header)</td>
          <td style="padding: 1rem 1.5rem; border-bottom: 1px solid #d1d5db;">Contains the Coat of Arms, State Name, and Document Title. Uses specific kerning rules unique to ${getC()}.</td>
        </tr>
        <tr>
          <td style="padding: 1rem 1.5rem; font-family: monospace; color: #4338ca; border-right: 1px solid #d1d5db; border-bottom: 1px solid #d1d5db;">Zone II (Bio-Data)</td>
          <td style="padding: 1rem 1.5rem; border-bottom: 1px solid #d1d5db;">Primary variable data (Name, DOB). This template uses the mandatory '${ctx.isIdentity ? 'ICAO Compliant' : 'Financial Standard'}' fonts.</td>
        </tr>
        <tr>
          <td style="padding: 1rem 1.5rem; font-family: monospace; color: #4338ca; border-right: 1px solid #d1d5db; border-bottom: 1px solid #d1d5db;">Zone III (Security)</td>
          <td style="padding: 1rem 1.5rem; border-bottom: 1px solid #d1d5db;">Background Guilloche patterns and ghost images designed to resist photocopy reproduction.</td>
        </tr>
        <tr>
          <td style="padding: 1rem 1.5rem; font-family: monospace; color: #4338ca; border-right: 1px solid #d1d5db;">Zone IV (Machine Readable)</td>
          <td style="padding: 1rem 1.5rem;">Area reserved for MRZ or 2D Barcodes. Strict alignment formatting is applied in this template.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">3. Feature Validation Checklist</h2>
  <p style="margin-bottom: 1rem;">The following features have been integrated into the digital file to simulate authentic document attributes:</p>
  <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem;">
    ${features.map(f => `
      <li style="display: flex; gap: 0.75rem; font-size: 0.875rem; align-items: flex-start;">
        <span style="width: 1rem; height: 1rem; margin-top: 0.125rem; border: 1px solid #9ca3af; border-radius: 0.125rem; display: flex; align-items: center; justify-content: center; font-size: 0.625rem; color: #16a34a;">✓</span>
        <span>${f}</span>
      </li>
    `).join('')}
  </ul>

  <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin-top: 2rem;">
    <strong style="display: block; color: #1e3a8a; margin-bottom: 0.25rem;">Study Note:</strong>
    <span style="font-size: 0.875rem; color: #1d4ed8;">
      When using this file for OCR training, ensure that the resolution is set to at least 300 DPI (as provided in this ${format} file) to prevent aliasing errors in character recognition.
    </span>
  </div>
</div>
`;
};
