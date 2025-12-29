
import { Country, DocumentType, FileFormat, TemplateStyle } from './types';

export const COUNTRIES: Country[] = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
  "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
];

// Mapping common aliases to the canonical names in the list above
export const COUNTRY_ALIASES: Record<string, string[]> = {
  "United States of America": ["USA", "US", "United States", "America"],
  "United Kingdom": ["UK", "Great Britain", "England", "GB", "Britain"],
  "United Arab Emirates": ["UAE", "Emirates", "Dubai", "Abu Dhabi"],
  "Russia": ["Russian Federation", "RF", "Soviet"],
  "Netherlands": ["Holland", "The Netherlands"],
  "Iran": ["Persia", "IR"],
  "China": ["PRC", "Mainland China"],
  "South Korea": ["Korea", "ROK", "Republic of Korea"],
  "North Korea": ["DPRK"],
  "Syria": ["Syrian Arab Republic"],
  "Germany": ["Deutschland", "DE"],
  "France": ["FR"],
  "Spain": ["Espana", "ES"],
  "Italy": ["Italia", "IT"],
  "Turkey": ["Turkiye", "TR"],
  "Vietnam": ["Viet Nam"],
  "Czechia (Czech Republic)": ["Czech Republic", "Czechia", "CZ"]
};

export const DOCUMENT_TYPES: DocumentType[] = [
  'Passport', 'ID Card', 'Driver License', 'Utility Bill', 'Bank Statement'
];

export const FILE_FORMATS: FileFormat[] = [
  'PSD (Photoshop)', 'PDF (Editable)', 'Word (.docx)'
];

export const TEMPLATE_STYLES: TemplateStyle[] = [
  'Professional (Standard)',
  'Streamlined (Marketing)',
  'Technical (High-Detail)',
  'Creative (Designer-Centric)',
  'Academic (Training/Forensic)',
  'Blog Review (SEO-Optimized)'
];

export const BASE_TEMPLATE = ``; // Deprecated
