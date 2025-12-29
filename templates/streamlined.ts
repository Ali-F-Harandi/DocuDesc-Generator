
import { DocumentRequest } from '../types';
import { getEditableFields } from '../utils/templateHelpers';

export const renderStreamlined = (request: DocumentRequest, ctx: any, specs: any, features: string[], getC: () => string) => {
  const { documentType, format } = request;
  const shortFeatures = features.map(f => f.replace(/<strong>.*?<\/strong>/, '').trim());

  return `
<div style="font-family: sans-serif; text-align: center; margin-bottom: 2rem;">
  <span style="display: inline-block; padding: 0.25rem 0.75rem; border-radius: 9999px; background-color: #dcfce7; color: #15803d; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; border: 1px solid #bbf7d0;">Instant Download</span>
  <h1 style="font-size: 2.25rem; line-height: 2.5rem; font-weight: 800; margin-top: 0.75rem; margin-bottom: 0.5rem; color: #111827;">Download ${getC()} ${documentType} Template</h1>
  <p style="font-size: 1.25rem; line-height: 1.75rem; color: #4f46e5; margin: 0;">Professional ${format.split(' ')[0]} Mockup • Fully Editable • High Quality</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2.5rem;">
  <div style="background-color: #f9fafb; padding: 1.25rem; border-radius: 1rem; border: 1px solid #e5e7eb; text-align: center;">
    <div style="font-size: 1.875rem; margin-bottom: 0.5rem;">⚡</div>
    <h3 style="font-weight: 700; color: #111827; margin: 0;">Instant Access</h3>
    <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.25rem;">Download link sent immediately after confirmation.</p>
  </div>
  <div style="background-color: #f9fafb; padding: 1.25rem; border-radius: 1rem; border: 1px solid #e5e7eb; text-align: center;">
    <div style="font-size: 1.875rem; margin-bottom: 0.5rem;">🎨</div>
    <h3 style="font-weight: 700; color: #111827; margin: 0;">Easy Editing</h3>
    <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.25rem;">Pre-formatted layers. Just fill in your details.</p>
  </div>
  <div style="background-color: #f9fafb; padding: 1.25rem; border-radius: 1rem; border: 1px solid #e5e7eb; text-align: center;">
    <div style="font-size: 1.875rem; margin-bottom: 0.5rem;">🖨️</div>
    <h3 style="font-weight: 700; color: #111827; margin: 0;">Print Ready</h3>
    <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.25rem;">${specs.resolution}. Looks real on paper.</p>
  </div>
</div>

<h2 style="font-family: sans-serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.5rem; color: #111827;">Product Overview</h2>
<p style="font-family: sans-serif; margin-bottom: 1.5rem; font-size: 1.125rem; line-height: 1.6; color: #374151;">Need a high-quality <strong>${documentType}</strong> for <strong>${getC()}</strong>? Stop wasting time with low-res images. Our ${format} template puts you in control. Whether you need it for <strong>account recovery, design mockups, or verification testing</strong>, this file is the industry standard.</p>

<div style="font-family: sans-serif; background-color: #f9fafb; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e5e7eb; margin-bottom: 2rem;">
  <h3 style="font-weight: 700; color: #111827; margin-top: 0; margin-bottom: 1rem;">What You Get:</h3>
  <ul style="list-style: none; padding: 0; margin: 0;">
    ${shortFeatures.map(f => `<li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem;"><span style="color: #4f46e5; margin-top: 0.1rem;">➜</span> <span style="color: #374151;">${f}</span></li>`).join('')}
  </ul>
</div>

<h2 style="font-family: sans-serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: #111827;">How It Works (3 Simple Steps)</h2>
<ol style="font-family: sans-serif; color: #374151; margin-bottom: 2rem; padding-left: 1.5rem; line-height: 1.6;">
  <li style="margin-bottom: 0.5rem;"><strong>Download:</strong> Get the ${format.split(' ')[0]} file and font pack instantly.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Edit:</strong> Open in ${specs.software.split(' ')[0]} and update the <em>${getEditableFields(ctx, documentType).split(',').slice(0,3).join(', ')}</em> fields.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Export:</strong> Save as JPG, PNG, or PDF and you are ready to go!</li>
</ol>

<div style="font-family: sans-serif; background-color: #f5f3ff; background: linear-gradient(to right, #eef2ff, #f3e8ff); padding: 1.5rem; border-radius: 0.75rem; text-align: center; border: 1px solid #e0e7ff; margin-bottom: 2rem;">
  <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 0; margin-bottom: 0.5rem; color: #312e81;">Ready to design?</h3>
  <p style="color: #4338ca; margin: 0;">Get the full ${getC()} ${documentType} package today.</p>
</div>

<p style="font-family: sans-serif; font-size: 0.75rem; text-align: center; color: #9ca3af; margin-top: 1rem;"><em>Compatibility Note: Requires ${specs.software}. Please ensure you have the correct software installed.</em></p>
`;
};
