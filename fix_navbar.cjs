const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'layout', 'astro-navbar.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Check if the hooks are already present
if (content.includes('Ensure i18n is ready before rendering')) {
  console.log('Hooks already present. No changes needed.');
  process.exit(0);
}

// Add i18n readiness hooks between isLuntsPage assignment and the scroll useEffect
// The current text is: "isLuntsPage = currentPath.includes('/products/lunts');\r\n\r\n  useEffect(() => {"
const hooksSection = `
  // Ensure i18n is ready before rendering to avoid showing translation keys
  useEffect(() => {
    if (ready && !isReady) {
      setIsReady(true);
    }
  }, [ready, isReady]);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      const handleInitialized = () => setIsReady(true);
      i18n.on('initialized', handleInitialized);
      return () => { i18n.off('initialized', handleInitialized); };
    }
  }, [i18n]);`;

content = content.replace(
  "isLuntsPage = currentPath.includes('/products/lunts');\r\n\r\n  useEffect(() => {",
  "isLuntsPage = currentPath.includes('/products/lunts');" + hooksSection + "\r\n\r\n  useEffect(() => {"
);

// Verify the i18n import
if (!content.includes("import '../../i18n';")) {
  console.log('ERROR: i18n import missing!');
} else {
  console.log('i18n import is present.');
}

// Verify the isReady guard
if (content.includes('if (!isReady)')) {
  console.log('isReady guard is present.');
} else {
  console.log('WARNING: isReady guard missing!');
}

// Also fix astro-footer.tsx
const footerPath = path.join(__dirname, 'src', 'components', 'layout', 'astro-footer.tsx');
let footerContent = fs.readFileSync(footerPath, 'utf8');
if (!footerContent.includes("import '../../i18n'")) {
  footerContent = footerContent.replace(
    "import { colors, Container } from '../../styles/global-styles';",
    "import { colors, Container } from '../../styles/global-styles';\r\nimport '../../i18n';"
  );
  fs.writeFileSync(footerPath, footerContent);
  console.log('Fixed astro-footer.tsx - added i18n import');
} else {
  console.log('astro-footer.tsx already has i18n import.');
}

fs.writeFileSync(filePath, content);
console.log('Done! Updated astro-navbar.tsx');
