
// ==========================================
// INTERNAL ENCODING SYSTEM (CUSTOM LOGIC)
// ==========================================

// PASSWORD: "mosi"
// SALT: "DOCU"
// STRING: "mosiDOCU"
//
// CALCULATION LOGIC:
// m (109) * 1 + 8 = 117 -> 75
// o (111) * 2 + 8 = 230 -> e6
// s (115) * 3 + 8 = 353 -> 161
// i (105) * 4 + 8 = 428 -> 1ac
// D (68)  * 5 + 8 = 348 -> 15c
// O (79)  * 6 + 8 = 482 -> 1e2
// C (67)  * 7 + 8 = 477 -> 1dd
// U (85)  * 8 + 8 = 688 -> 2b0
//
// FINAL HASH: 75e61611ac15c1e21dd2b0

const TARGET_HASH = "75e61611ac15c1e21dd2b0";
const INTERNAL_SALT = "DOCU";

/**
 * A creative, dependency-free encoding function.
 * It transforms the input string into a unique hex signature using simple math.
 * Works in ANY environment (Localhost, HTTP, HTTPS, Node, Old Browsers).
 */
const internalEncoder = (input: string): string => {
  let hash = "";
  const textToEncode = input + INTERNAL_SALT;
  const len = textToEncode.length;

  for (let i = 0; i < len; i++) {
    const charCode = textToEncode.charCodeAt(i);
    
    // Mathematical transformation:
    // Multiply char code by its position (1-based) to ensure order matters
    // Add length to mix it up further
    const val = (charCode * (i + 1)) + len;
    
    // Convert to Hexadecimal
    hash += val.toString(16);
  }
  return hash;
};

export const verifyPassword = async (input: string): Promise<boolean> => {
  if (!input) return false;

  // 1. Normalize: Remove whitespace & lowercase
  const cleanInput = input.trim().toLowerCase();
  
  // 2. Generate Hash
  const calculatedHash = internalEncoder(cleanInput);

  // 3. Debugging Logs (Check your browser console if it fails)
  console.log(`%c[Security Check]`, "color: cyan; font-weight: bold;");
  console.log(`Input (Clean): "${cleanInput}"`);
  console.log(`Calculated:    "${calculatedHash}"`);
  console.log(`Expected:      "${TARGET_HASH}"`);

  // 4. Verify
  return calculatedHash === TARGET_HASH;
};
