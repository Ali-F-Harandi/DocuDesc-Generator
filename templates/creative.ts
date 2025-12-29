
import { DocumentRequest } from '../types';

export const renderCreative = (request: DocumentRequest, ctx: any, specs: any, features: string[], getC: () => string) => {
  const { documentType, format } = request;

  return `
<div style="position: relative; background: linear-gradient(to right, #f3e8ff, #e0e7ff); padding: 2rem; border-radius: 1rem; border: 1px solid #c7d2fe; overflow: hidden; margin-bottom: 2rem; font-family: sans-serif;">
  <h1 style="font-size: 2.25rem; line-height: 1.1; font-weight: 800; color: #4f46e5; margin-top: 0; margin-bottom: 1rem; text-shadow: 0 1px 2px rgba(0,0,0,0.05);">
    Master the Art of <span style="color: #7c3aed;">${getC()} ${documentType}</span> Design
  </h1>
  <p style="font-size: 1.125rem; color: #3730a3; font-weight: 300; max-width: 42rem; margin: 0;">
    Unlock the ultimate design asset. A fully unlocked, ${format.split(' ')[0]} ${documentType} template engineered for graphic artists, prop masters, and UI/UX designers building verification flows.
  </p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem; font-family: sans-serif;">
  <div>
    <h2 style="font-size: 1.5rem; font-weight: 700; color: #111827; margin-bottom: 1rem; border-left: 4px solid #ec4899; padding-left: 1rem;">The Designer's Toolkit</h2>
    <p style="color: #4b5563; margin-bottom: 1.5rem; line-height: 1.6;">
      Stop fighting with low-resolution JPEGs. This template gives you the raw power of vector-based assets. We have reconstructed the ${getC()} ${documentType} entirely from scratch using advanced vector pathing and typography matching.
    </p>
    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem;">
      <li style="display: flex; align-items: center; gap: 0.75rem; background-color: #f9fafb; padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #e5e7eb;">
        <span style="font-size: 1.5rem;">💎</span>
        <div>
          <strong style="display: block; color: #111827;">Pixel-Perfect Assets</strong>
          <span style="font-size: 0.75rem; color: #6b7280;">Crisp edges at any zoom level (4K/8K Ready).</span>
        </div>
      </li>
      <li style="display: flex; align-items: center; gap: 0.75rem; background-color: #f9fafb; padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #e5e7eb;">
        <span style="font-size: 1.5rem;">🎨</span>
        <div>
          <strong style="display: block; color: #111827;">Complete Layer Control</strong>
          <span style="font-size: 0.75rem; color: #6b7280;">Every shadow, highlight, and text is a separate layer.</span>
        </div>
      </li>
      <li style="display: flex; align-items: center; gap: 0.75rem; background-color: #f9fafb; padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #e5e7eb;">
        <span style="font-size: 1.5rem;">🧩</span>
        <div>
          <strong style="display: block; color: #111827;">Smart Object Replacement</strong>
          <span style="font-size: 0.75rem; color: #6b7280;">Drag & Drop your photo/logo and it auto-warps to fit.</span>
        </div>
      </li>
    </ul>
  </div>

  <div style="background-color: #f3f4f6; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e5e7eb;">
    <h3 style="font-size: 1.125rem; font-weight: 700; color: #111827; margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
      <span style="display: inline-block; width: 0.5rem; height: 0.5rem; background-color: #ec4899; border-radius: 9999px;"></span> Asset Hierarchy
    </h3>
    <div style="font-family: monospace; font-size: 0.75rem; color: #4b5563; line-height: 1.5;">
      <div style="padding-left: 0; color: #111827; font-weight: 700;">📂 ${getC()} ${documentType} Source</div>
      <div style="padding-left: 1rem; color: #9333ea;">📂 Lighting & Overlay Effects</div>
      <div style="padding-left: 2rem;">└ 📄 Holographic Reflection (Screen)</div>
      <div style="padding-left: 2rem;">└ 📄 Grunge / Scratches (Multiply)</div>
      <div style="padding-left: 1rem; color: #4f46e5;">📂 Text Data (Editable)</div>
      <div style="padding-left: 2rem;">└ ✍️ Name / DOB / Address</div>
      <div style="padding-left: 2rem;">└ ✍️ MRZ Code / Barcode</div>
      <div style="padding-left: 1rem; color: #db2777;">📂 Background Elements</div>
      <div style="padding-left: 2rem;">└ 💠 Guilloche Patterns (Vector)</div>
      <div style="padding-left: 2rem;">└ 🖼️ Base Card Texture</div>
    </div>
  </div>
</div>

<h2 style="font-family: sans-serif; font-size: 1.5rem; font-weight: 700; color: #111827; margin-bottom: 1.5rem;">Designed for High-End Productions</h2>
<p style="font-family: sans-serif; margin-bottom: 1.5rem; color: #374151;">
  Whether you are creating a movie prop for a close-up shot or testing a KYC AI that detects synthetic identities, realism is key. Our template includes details often missed by others:
</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 2rem; font-family: sans-serif;">
  ${features.slice(0, 4).map(f => `
    <div style="background-color: #ffffff; padding: 1.25rem; border-radius: 0.75rem; border: 1px solid #e5e7eb; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
      <p style="font-size: 0.875rem; color: #374151; margin: 0;">${f}</p>
    </div>
  `).join('')}
</div>

<div style="font-family: sans-serif; background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 1.5rem; border-radius: 0.75rem; text-align: center;">
  <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin-top: 0; margin-bottom: 0.5rem;">Ready to Create?</h3>
  <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0; margin-bottom: 1rem;">Includes 3 free font families and a texture pack.</p>
  <button style="background-color: #111827; color: #ffffff; font-weight: 700; padding: 0.75rem 2rem; border-radius: 9999px; border: none; cursor: pointer;">
    Download ${format.split(' ')[0]} Asset Pack
  </button>
</div>
`;
};
