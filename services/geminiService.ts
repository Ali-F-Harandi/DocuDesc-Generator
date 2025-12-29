
import { DocumentRequest } from '../types';
import { getContext, getTechSpecs, getFeatures, getDescription as getLocalDescription } from '../utils/templateHelpers';
import { renderProfessional } from '../templates/professional';
import { renderStreamlined } from '../templates/streamlined';

// Helper to fetch from Free AI with robust logging
const fetchFreeAIContent = async (prompt: string): Promise<string | null> => {
  // Start a debug group in console
  console.group("🤖 AI Generation Debug Log");
  
  try {
    // 1. Prepare URL
    // We add a random seed to prevent browser caching
    const seed = Math.floor(Math.random() * 1000);
    const encodedPrompt = encodeURIComponent(prompt);
    // Removed specific model param to allow Pollinations to route to the best available free model
    const url = `https://text.pollinations.ai/${encodedPrompt}?seed=${seed}`;

    console.log(`📍 Step 1: Preparing Request`);
    console.log(`   Prompt: "${prompt.substring(0, 50)}..."`);
    console.log(`   URL: ${url}`);

    // 2. Fetch
    console.log(`⏳ Step 2: Sending Request...`);
    const startTime = performance.now();
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache'
      }
    });

    const endTime = performance.now();
    console.log(`✅ Step 3: Response Received in ${(endTime - startTime).toFixed(0)}ms`);
    console.log(`   Status: ${response.status} (${response.statusText})`);

    if (!response.ok) {
       console.error(`❌ API Error: Server returned ${response.status}`);
       console.groupEnd();
       return null;
    }

    // 3. Process Text
    const text = await response.text();
    console.log(`📄 Step 4: Raw Output Length: ${text.length} chars`);
    
    if (text.length < 10 || text.includes("<html>")) {
        console.warn(`⚠️ Warning: Output seems invalid (too short or HTML error page).`);
        console.log(`   Preview: ${text.substring(0, 100)}`);
        console.groupEnd();
        return null;
    }

    console.log(`🎉 Success: AI Text Generated.`);
    console.groupEnd();
    return text.trim();

  } catch (e) {
    console.error("❌ Exception Caught:", e);
    console.log("   Falling back to local template engine.");
    console.groupEnd();
    return null;
  }
};

export const generateDescription = async (request: DocumentRequest): Promise<string> => {
  const { countryVariants, documentType, templateStyle, format, country } = request;
  
  // 1. Resolve Country Name
  const getCountry = () => {
    if (!countryVariants || countryVariants.length === 0) return request.country;
    return countryVariants[Math.floor(Math.random() * countryVariants.length)];
  };
  const selectedCountry = getCountry();

  // 2. Gather Local Context (Static Data)
  const ctx = getContext(request);
  const specs = getTechSpecs(ctx);
  const localFeatures = getFeatures(ctx, getCountry, documentType);
  const localDescription = getLocalDescription(ctx, getCountry, documentType, format);

  // 3. Try to get AI generated description (Dynamic)
  // Simplified prompt to increase success rate
  const aiPrompt = `Write a short, professional product description (max 70 words) for a ${selectedCountry} ${documentType} template (${format}). Emphasize that it is high-resolution, editable, and authentic. No intro.`;
  
  let finalDescription = localDescription;
  
  // Attempt AI generation
  const aiText = await fetchFreeAIContent(aiPrompt);
  
  if (aiText) {
    finalDescription = aiText;
  } else {
    console.log("ℹ️ Info: Using Local Template Fallback");
  }

  // 4. Inject Content into Structure
  switch (templateStyle) {
    case 'Streamlined (Marketing)':
      return renderStreamlined(request, ctx, specs, localFeatures, getCountry).replace(localDescription, finalDescription);
    case 'Professional (Standard)':
    default:
      const baseHtml = renderProfessional(request, ctx, specs, localFeatures, getCountry);
      // Attempt to replace the default description with the new one (AI or Local)
      // If the local description string construction changed slightly, replace might fail, 
      // but since we derive 'localDescription' from the same helper, it should match exactly if we didn't use AI.
      // If we DID use AI, we replace 'localDescription' with 'aiText'.
      return baseHtml.replace(localDescription, finalDescription);
  }
};