
import { DocumentRequest } from '../types';
import { getEditableFields } from '../utils/templateHelpers';

export const renderTechnical = (request: DocumentRequest, ctx: any, specs: any, features: string[], getC: () => string) => {
  const { countryVariants, documentType, format } = request;
  const primaryName = countryVariants[0];
  const shortCode = primaryName.length <= 3 ? primaryName : primaryName.substring(0,3);
  const assetID = `${shortCode.toUpperCase()}-${documentType.substring(0,2).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

  return `
<div style="font-family: monospace; border-bottom: 2px solid #1f2937; padding-bottom: 1rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: flex-end;">
  <div>
    <h1 style="font-size: 1.5rem; color: #047857; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; margin: 0;">Technical Specification Sheet</h1>
    <div style="color: #6b7280; font-size: 0.875rem; margin-top: 0.25rem;">Asset ID: <span style="color: #111827;">${assetID}</span> | Classification: <span style="color: #111827;">Replica/Mockup</span></div>
  </div>
  <div style="text-align: right;">
    <div style="font-size: 0.75rem; color: #6b7280; text-transform: uppercase;">Target Jurisdiction</div>
    <div style="font-weight: 700; color: #111827;">${getC()}</div>
  </div>
</div>

<h2 style="font-family: sans-serif; font-size: 1.125rem; font-weight: 700; color: #111827; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 0.5rem;">
  <span style="display: inline-block; width: 0.5rem; height: 0.5rem; background-color: #059669; border-radius: 9999px;"></span> 1.0 Document Abstract
</h2>
<p style="font-family: sans-serif; margin-bottom: 1.5rem; color: #374151; font-size: 0.875rem; line-height: 1.625; text-align: justify;">
  This document details the technical parameters of the <strong>${getC()} ${documentType}</strong> digital template. Engineered for high-fidelity reproduction, this <strong>${format}</strong> file utilizes ${ctx.isPSD ? 'lossless vector smart objects' : 'embedded vector data'} to maintain edge sharpness at print resolutions exceeding 300 DPI. It is designed for forensic verification testing, penetration testing of KYC algorithms, and high-definition film production.
</p>

<h2 style="font-family: sans-serif; font-size: 1.125rem; font-weight: 700; color: #111827; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 0.5rem;">
  <span style="display: inline-block; width: 0.5rem; height: 0.5rem; background-color: #059669; border-radius: 9999px;"></span> 2.0 Core Specifications
</h2>
<table style="width: 100%; font-family: monospace; font-size: 0.75rem; text-align: left; color: #4b5563; margin-bottom: 2rem; border: 1px solid #d1d5db; border-collapse: collapse;">
    <thead style="background-color: #f3f4f6; color: #1f2937;">
        <tr>
            <th style="padding: 0.5rem 1rem; border-right: 1px solid #d1d5db; border-bottom: 1px solid #d1d5db;">Parameter</th>
            <th style="padding: 0.5rem 1rem; border-bottom: 1px solid #d1d5db;">Value / Configuration</th>
        </tr>
    </thead>
    <tbody>
        <tr><td style="padding: 0.5rem 1rem; border-right: 1px solid #d1d5db; border-bottom: 1px solid #d1d5db;">File Standard</td><td style="padding: 0.5rem 1rem; border-bottom: 1px solid #d1d5db; color: #047857; font-weight: 700;">${format}</td></tr>
        <tr><td style="padding: 0.5rem 1rem; border-right: 1px solid #d1d5db; border-bottom: 1px solid #d1d5db;">Native Resolution</td><td style="padding: 0.5rem 1rem; border-bottom: 1px solid #d1d5db;">${specs.resolution}</td></tr>
        <tr><td style="padding: 0.5rem 1rem; border-right: 1px solid #d1d5db; border-bottom: 1px solid #d1d5db;">Color Profile</td><td style="padding: 0.5rem 1rem; border-bottom: 1px solid #d1d5db;">${specs.mode}</td></tr>
        <tr><td style="padding: 0.5rem 1rem; border-right: 1px solid #d1d5db; border-bottom: 1px solid #d1d5db;">Dimensions</td><td style="padding: 0.5rem 1rem; border-bottom: 1px solid #d1d5db;">${specs.dimensions}</td></tr>
        <tr><td style="padding: 0.5rem 1rem; border-right: 1px solid #d1d5db;">Layer Structure</td><td style="padding: 0.5rem 1rem;">${specs.structure}</td></tr>
    </tbody>
</table>

<h2 style="font-family: sans-serif; font-size: 1.125rem; font-weight: 700; color: #111827; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 0.5rem;">
  <span style="display: inline-block; width: 0.5rem; height: 0.5rem; background-color: #059669; border-radius: 9999px;"></span> 3.0 Feature Analysis
</h2>
<div style="display: grid; grid-template-columns: 1fr; gap: 1rem; margin-bottom: 2rem;">
  ${features.map((f, i) => `
    <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.25rem; display: flex; gap: 1rem; align-items: flex-start;">
      <div style="font-family: monospace; color: rgba(5, 150, 105, 0.5); font-weight: 700; font-size: 1.25rem;">0${i+1}</div>
      <div style="font-family: sans-serif; font-size: 0.875rem; color: #374151;">${f}</div>
    </div>
  `).join('')}
</div>

<h2 style="font-family: sans-serif; font-size: 1.125rem; font-weight: 700; color: #111827; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 0.5rem;">
  <span style="display: inline-block; width: 0.5rem; height: 0.5rem; background-color: #059669; border-radius: 9999px;"></span> 4.0 Data Fields
</h2>
<p style="font-family: sans-serif; font-size: 0.875rem; color: #4b5563; margin-bottom: 0.5rem;">The following variable data fields are exposed for user manipulation:</p>
<div style="background-color: #f3f4f6; padding: 1rem; border-radius: 0.25rem; border: 1px solid #d1d5db; font-family: monospace; font-size: 0.75rem; color: #4338ca; word-wrap: break-word; margin-bottom: 2rem;">
  > ${getEditableFields(ctx, documentType)}
</div>

<div style="border-left: 4px solid #f59e0b; padding: 0.5rem 1rem; background-color: #fffbeb; margin-top: 2rem;">
  <h4 style="color: #b45309; font-weight: 700; font-size: 0.875rem; text-transform: uppercase; margin: 0;">⚠ Compliance Notice</h4>
  <p style="font-family: sans-serif; font-size: 0.75rem; color: #92400e; margin-top: 0.25rem; margin-bottom: 0;">
    This template includes specific attention to ${ctx.isIdentity ? 'security patterns (OVI, UV, Micro-text)' : 'banking aesthetics (OCR fonts, layout grid)'} used in ${getC()}. Usage of this file to create fraudulent documents for illegal acts is strictly prohibited. Intended for novelty and testing purposes only.
  </p>
</div>`;
};
