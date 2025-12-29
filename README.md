# DocuDesc Generator

**DocuDesc Generator** is a sophisticated React-based research tool designed to generate high-fidelity mockup descriptions for various document types (Passports, ID Cards, Utility Bills, etc.). It helps designers and researchers create realistic templates by simulating technical specifications and content descriptions.

## 🚀 Features

- **Multi-Jurisdiction Support:** Covers a wide range of countries with variant handling.
- **Smart Template Engine:** Automatically adjusts technical details (MRZ, Barcodes, Security features) based on the document type (Identity vs. Financial).
- **Multiple Output Styles:** Generates descriptions in Professional, Marketing, Technical, Creative, and Forensic styles.
- **Secure Access:** Protected by a hashed password system to prevent unauthorized usage.
- **Modern UI:** Built with React, Tailwind CSS, and Lucide Icons for a sleek, dark-mode experience.

## 🛠 Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages (via Custom Action)

## 📦 Installation & Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Ali-F-Harandi/DocuDesc-Generator.git
    cd DocuDesc-Generator
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```

## 🔐 Security

This application is protected by a client-side SHA-256 hash authentication system.
- The password logic is handled in `src/utils/security.ts`.

## 🚀 Deployment

This project uses a custom automated deployment workflow for Windows users.

### Prerequisites
1.  A GitHub Account & Personal Access Token (Classic) with `repo` permissions.
2.  Git installed on your machine.

### How to Deploy
1.  Open `DEPLOY_SCRIPT.txt`.
2.  Replace `YOUR_GITHUB_TOKEN_HERE` with your actual GitHub Personal Access Token.
3.  Rename `DEPLOY_SCRIPT.txt` to `DEPLOY_SCRIPT.bat`.
4.  Double-click `DEPLOY_SCRIPT.bat`.

The script will:
- Clean up previous build artifacts.
- Initialize a fresh Git repository.
- Commit changes.
- Push to the `main` branch.
- Trigger the GitHub Actions workflow to build and deploy to GitHub Pages.

---
© 2024 DocuDesc Research. For mockups and design verification only.