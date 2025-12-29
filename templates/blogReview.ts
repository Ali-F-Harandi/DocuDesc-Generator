
import { DocumentRequest } from '../types';

export const renderBlogReview = (request: DocumentRequest, ctx: any, specs: any, features: string[], getC: () => string) => {
  const { documentType, format } = request;

  return `
<div style="font-family: sans-serif; color: #1f2937; line-height: 1.6;">
  <h1 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 0.5rem; color: #111827;">Review: Is This The Best ${getC()} ${documentType} Template in ${new Date().getFullYear()}?</h1>
  <div style="display: flex; align-items: center; gap: 1rem; font-size: 0.875rem; color: #6b7280; margin-bottom: 2rem;">
    <span>By <strong>Admin</strong></span>
    <span>•</span>
    <span>Updated: Today</span>
    <span>•</span>
    <span style="color: #eab308; letter-spacing: 0.1em;">★★★★★</span>
  </div>

  <p style="font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem; color: #374151;">
    I have tested dozens of mockup sites, but finding a high-quality <strong>${getC()} ${documentType} template</strong> that actually works is surprisingly hard. Most are just low-res JPEGs or outdated designs. Today, I'm reviewing this premium <strong>${format}</strong> file to see if it lives up to the hype.
  </p>

  <h2 style="font-size: 1.5rem; font-weight: 700; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">First Impressions</h2>
  <p style="margin-bottom: 1rem; color: #4b5563;">
    Upon downloading the file, the first thing I noticed was the file organization. Unlike messy templates I've bought on the dark web or forums, this one is professional. If you are using ${specs.software.split(' ')[0]}, you will appreciate that everything is grouped into folders.
  </p>
  <p style="margin-bottom: 1.5rem; color: #4b5563;">
    The font pack is included, which is a huge time saver. I didn't have to search Google for the specific ${getC()} fonts—they were right there in the zip file.
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 2rem; margin-bottom: 2rem;">
    <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 1.5rem; border-radius: 0.75rem;">
      <h3 style="font-weight: 700; color: #15803d; margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">👍 The Pros</h3>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.875rem; display: flex; flex-direction: column; gap: 0.75rem; color: #374151;">
        <li style="display: flex; gap: 0.5rem;"><span style="color: #16a34a;">✔</span> <div><strong>Extremely Realistic:</strong> The background patterns (guilloche) are vector sharp, not pixelated.</div></li>
        <li style="display: flex; gap: 0.5rem;"><span style="color: #16a34a;">✔</span> <div><strong>Fully Editable:</strong> I could change the Name, Address, and even the ${documentType === 'Utility Bill' ? 'Bar Graphs' : 'Photo'} in seconds.</div></li>
        <li style="display: flex; gap: 0.5rem;"><span style="color: #16a34a;">✔</span> <div><strong>Instant Download:</strong> No waiting for manual delivery.</div></li>
        <li style="display: flex; gap: 0.5rem;"><span style="color: #16a34a;">✔</span> <div><strong>Correct Format:</strong> The MRZ and barcodes generated correctly.</div></li>
      </ul>
    </div>
    <div style="background-color: #fef2f2; border: 1px solid #fecaca; padding: 1.5rem; border-radius: 0.75rem;">
      <h3 style="font-weight: 700; color: #b91c1c; margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">👎 The Cons</h3>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.875rem; display: flex; flex-direction: column; gap: 0.75rem; color: #374151;">
        <li style="display: flex; gap: 0.5rem;"><span style="color: #dc2626;">✖</span> <div><strong>Requires Software:</strong> You definitely need ${specs.software.split(' ')[0]} to use this.</div></li>
        <li style="display: flex; gap: 0.5rem;"><span style="color: #dc2626;">✖</span> <div><strong>Large File Size:</strong> Because it's high resolution (${specs.resolution}), the download is heavy.</div></li>
      </ul>
    </div>
  </div>

  <h2 style="font-size: 1.5rem; font-weight: 700; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">Deep Dive: The Features</h2>
  <p style="margin-bottom: 1rem; color: #4b5563;">Here is a breakdown of what makes this ${getC()} template stand out for KYC testing and design work:</p>

  <div style="background-color: #f9fafb; padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 2rem; border: 1px solid #e5e7eb;">
    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem;">
      ${features.map(f => `<li style="color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.5rem; margin-bottom: 0.5rem;">${f}</li>`).join('')}
    </ul>
  </div>

  <h2 style="font-size: 1.5rem; font-weight: 700; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">The Verdict</h2>
  <p style="margin-bottom: 1.5rem; color: #4b5563;">
    If you need a <strong>${documentType} for ${getC()}</strong> that looks authentic and is easy to edit, this is currently the best option on the market. It strikes the perfect balance between complexity (for realism) and usability (for ease of edit).
  </p>

  <div style="background-color: #eef2ff; color: #312e81; padding: 2rem; border-radius: 1rem; text-align: center; border: 1px solid #c7d2fe; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <h3 style="font-size: 1.5rem; font-weight: 700; margin-top: 0; margin-bottom: 0.5rem;">Final Rating: 9.5/10</h3>
    <p style="opacity: 0.8; margin-bottom: 1.5rem; color: #3730a3;">Highly Recommended for Designers & Testers</p>
    <span style="display: inline-block; background-color: #4f46e5; color: #ffffff; font-weight: 700; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; cursor: pointer;">
      Get This Template Now
    </span>
  </div>
</div>
`;
};
