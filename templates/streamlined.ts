
import { DocumentRequest } from '../types';
import { getEditableFields, getDescription } from '../utils/templateHelpers';

export const renderStreamlined = (request: DocumentRequest, ctx: any, specs: any, features: string[], getC: () => string) => {
  const { documentType, format } = request;
  const description = getDescription(ctx, getC, documentType, format);
  const cleanFormat = format.split(' ')[0];
  
  // Create simpler bullet points from the rich HTML features
  const simpleFeatures = features.map(f => f.replace(/<strong>.*?<\/strong>/, '').replace(':', '').trim());

  return `
<div style="font-family: 'Inter', sans-serif; text-align: center; margin-bottom: 2.5rem;">
  <span style="display: inline-block; padding: 0.35rem 0.85rem; border-radius: 9999px; background-color: #dcfce7; color: #166534; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; border: 1px solid #bbf7d0; margin-bottom: 1rem;">
    Verified Template
  </span>
  <h1 style="font-size: 2.5rem; line-height: 1.1; font-weight: 900; margin-top: 0; margin-bottom: 0.75rem; color: #111827;">
    ${getC()} ${documentType}
  </h1>
  <p style="font-size: 1.25rem; color: #4f46e5; margin: 0; font-weight: 500;">
    ${cleanFormat} Format • Fully Editable • Instant Download
  </p>
</div>

<!-- Value Props Grid -->
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 3rem;">
  <div style="background-color: #f9fafb; padding: 1.5rem; border-radius: 1rem; border: 1px solid #e5e7eb; text-align: center;">
    <div style="font-size: 2rem; margin-bottom: 0.5rem;">⚡</div>
    <h3 style="font-weight: 700; color: #111827; margin: 0; font-size: 0.95rem;">Instant Access</h3>
  </div>
  <div style="background-color: #f9fafb; padding: 1.5rem; border-radius: 1rem; border: 1px solid #e5e7eb; text-align: center;">
    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🛠️</div>
    <h3 style="font-weight: 700; color: #111827; margin: 0; font-size: 0.95rem;">${specs.software.split(' ')[0]} Ready</h3>
  </div>
  <div style="background-color: #f9fafb; padding: 1.5rem; border-radius: 1rem; border: 1px solid #e5e7eb; text-align: center;">
    <div style="font-size: 2rem; margin-bottom: 0.5rem;">💎</div>
    <h3 style="font-weight: 700; color: #111827; margin: 0; font-size: 0.95rem;">High Quality</h3>
  </div>
</div>

<!-- Overview -->
<h2 style="font-family: 'Inter', sans-serif; font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem; color: #111827;">
  Product Overview
</h2>
<p style="font-family: 'Inter', sans-serif; margin-bottom: 2rem; font-size: 1.05rem; line-height: 1.7; color: #374151;">
  ${description}
</p>

<!-- Feature Checklist -->
<div style="font-family: 'Inter', sans-serif; background-color: #f8fafc; padding: 2rem; border-radius: 1rem; border: 1px solid #e2e8f0; margin-bottom: 2.5rem;">
  <h3 style="font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 1.5rem; font-size: 1.25rem;">
    Included Features:
  </h3>
  <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr; gap: 1rem;">
    ${simpleFeatures.map(f => `
      <li style="display: flex; align-items: flex-start; gap: 0.75rem;">
        <span style="color: #6366f1; font-weight: 900; margin-top: 0.1rem;">➜</span> 
        <span style="color: #475569; font-weight: 500;">${f}</span>
      </li>
    `).join('')}
  </ul>
</div>

<!-- How It Works -->
<h2 style="font-family: 'Inter', sans-serif; font-size: 1.5rem; font-weight: 800; margin-bottom: 1.5rem; color: #111827;">
  3 Steps to Create
</h2>
<div style="font-family: 'Inter', sans-serif; display: flex; flex-direction: column; gap: 1rem; margin-bottom: 3rem;">
  <div style="display: flex; align-items: center; gap: 1rem;">
    <div style="width: 2rem; height: 2rem; background-color: #111827; color: white; border-radius: 999px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9rem;">1</div>
    <div style="color: #374151;">Download the <strong>${cleanFormat}</strong> file instantly.</div>
  </div>
  <div style="display: flex; align-items: center; gap: 1rem;">
    <div style="width: 2rem; height: 2rem; background-color: #111827; color: white; border-radius: 999px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9rem;">2</div>
    <div style="color: #374151;">Edit fields: <em>${getEditableFields(ctx, documentType).split(',').slice(0,3).join(', ')}...</em></div>
  </div>
  <div style="display: flex; align-items: center; gap: 1rem;">
    <div style="width: 2rem; height: 2rem; background-color: #111827; color: white; border-radius: 999px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9rem;">3</div>
    <div style="color: #374151;">Save/Export your new document.</div>
  </div>
</div>

<!-- CTA -->
<div style="font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 2rem; border-radius: 1rem; text-align: center; color: white; box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.3);">
  <h3 style="font-size: 1.5rem; font-weight: 700; margin-top: 0; margin-bottom: 0.5rem;">
    Ready to design?
  </h3>
  <p style="opacity: 0.9; margin: 0 0 1.5rem 0;">
    Get the full ${getC()} ${documentType} package.
  </p>
  <span style="display: inline-block; background-color: white; color: #4f46e5; font-weight: 700; padding: 0.75rem 2rem; border-radius: 9999px; font-size: 1rem;">
    Buy Now
  </span>
</div>
`;
};