
export interface LogEntry {
  version: string;
  date: string;
  type: 'feature' | 'fix' | 'security' | 'initial';
  changes: string[];
}

export const APP_VERSION = "1.2.0";

export const CHANGELOG_DATA: LogEntry[] = [
  {
    version: "1.2.0",
    date: "2024-05-24",
    type: "feature",
    changes: [
      "Matrix Generation Engine: Implemented 30 unique text logic states (5 Documents × 3 Formats × 2 Styles).",
      "Content Specialization: Descriptions now accurately reflect the specific file format (e.g., 'Smart Objects' for PSD vs 'Form Fields' for PDF).",
      "Streamlined Options: Removed redundant template styles (Blog, Academic, Technical) to focus on Professional and Marketing outputs.",
      "Enhanced Helpers: Overhauled internal logic to generate realistic technical specifications for Utility Bills and Bank Statements."
    ]
  },
  {
    version: "1.1.3",
    date: "2024-05-23",
    type: "feature",
    changes: [
      "Added Light/Dark Theme Support: User can now toggle between visual modes.",
      "Layout Constraints: Added maximum width (1440px) to prevent excessive stretching on large monitors.",
      "UI Refinements: Improved component contrast in both light and dark modes."
    ]
  },
  {
    version: "1.1.2",
    date: "2024-05-22",
    type: "security",
    changes: [
      "Documentation Update: Removed sensitive credentials from public README.",
      "Internal cleanup."
    ]
  },
  {
    version: "1.1.1",
    date: "2024-05-22",
    type: "feature",
    changes: [
      "UI Overhaul: Switched to a 'Desktop App' style full-width layout (Blender/Photoshop inspired).",
      "Expanded workspace: Preview area now utilizes 100% of available screen width.",
      "Redesigned Header: Compact horizontal layout to maximize vertical workspace.",
      "Optimized Grid: Adjusted column ratios for better sidebar/content balance on large screens."
    ]
  },
  {
    version: "1.1.0",
    date: "2024-05-21",
    type: "security",
    changes: [
      "Implemented Custom Internal Encoding System for password verification.",
      "Removed external dependency (js-sha256) to ensure offline compatibility.",
      "Added Change Log system UI.",
      "Updated UI footer credits."
    ]
  },
  {
    version: "1.0.1",
    date: "2024-05-20",
    type: "fix",
    changes: [
      "Fixed React 19 compatibility issues by pinning to stable v18.2.0.",
      "Resolved 'i is undefined' import errors.",
      "Improved scrolling performance on result display."
    ]
  },
  {
    version: "1.0.0",
    date: "2024-05-18",
    type: "initial",
    changes: [
      "Initial Release of DocuDesc Generator.",
      "Support for Passport, ID Card, Utility Bill, Driver License, and Bank Statements.",
      "Added 'Remix Mode' for country variant randomization.",
      "Integrated 6 unique template writing styles (Professional, Forensic, Dark Web, etc.)."
    ]
  }
];