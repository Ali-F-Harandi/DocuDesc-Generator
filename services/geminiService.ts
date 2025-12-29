
import { DocumentRequest } from '../types';
import { getContext, getTechSpecs, getFeatures, getDescription, getEditableFields } from '../utils/templateHelpers';
import { renderProfessional } from '../templates/professional';
import { renderStreamlined } from '../templates/streamlined';

export const generateDescription = async (request: DocumentRequest): Promise<string> => {
  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 600));

  const { countryVariants, documentType, templateStyle, format } = request;
  
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
    case 'Professional (Standard)':
    default:
      return renderProfessional(request, ctx, specs, features, getCountry);
  }
};