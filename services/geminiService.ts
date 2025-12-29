
import { DocumentRequest } from '../types';
import { getContext, getTechSpecs, getFeatures } from '../utils/templateHelpers';
import { renderProfessional } from '../templates/professional';
import { renderStreamlined } from '../templates/streamlined';
import { renderTechnical } from '../templates/technical';
import { renderCreative } from '../templates/creative';
import { renderAcademic } from '../templates/academic';
import { renderBlogReview } from '../templates/blogReview';

export const generateDescription = async (request: DocumentRequest): Promise<string> => {
  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 600));

  const { countryVariants, documentType, templateStyle } = request;
  
  // Create a randomized getter function
  const getCountry = () => {
    if (!countryVariants || countryVariants.length === 0) return request.country;
    return countryVariants[Math.floor(Math.random() * countryVariants.length)];
  };

  // 1. Gather Data using shared utilities
  const ctx = getContext(request);
  const specs = getTechSpecs(ctx);
  const features = getFeatures(ctx, getCountry, documentType);

  // 2. Select Renderer from imported files
  switch (templateStyle) {
    case 'Streamlined (Marketing)':
      return renderStreamlined(request, ctx, specs, features, getCountry);
    case 'Technical (High-Detail)':
      return renderTechnical(request, ctx, specs, features, getCountry);
    case 'Creative (Designer-Centric)':
      return renderCreative(request, ctx, specs, features, getCountry);
    case 'Academic (Training/Forensic)':
      return renderAcademic(request, ctx, specs, features, getCountry);
    case 'Blog Review (SEO-Optimized)':
      return renderBlogReview(request, ctx, specs, features, getCountry);
    case 'Professional (Standard)':
    default:
      return renderProfessional(request, ctx, specs, features, getCountry);
  }
};
