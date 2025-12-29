
export type Country = string;

export type DocumentType = 'Passport' | 'ID Card' | 'Driver License' | 'Utility Bill' | 'Bank Statement';

export type FileFormat = 'PSD (Photoshop)' | 'PDF (Editable)' | 'Word (.docx)';

export type TemplateStyle = 
  | 'Professional (Standard)' 
  | 'Streamlined (Marketing)' 
  | 'Technical (High-Detail)'
  | 'Creative (Designer-Centric)'
  | 'Academic (Training/Forensic)'
  | 'Blog Review (SEO-Optimized)';

export interface DocumentRequest {
  country: string;
  countryVariants: string[]; // List of names to randomize (e.g. ["USA", "United States"])
  documentType: DocumentType;
  format: FileFormat;
  templateStyle: TemplateStyle;
}

export interface GeneratedResponse {
  text: string;
  timestamp: string;
  request: DocumentRequest;
}
