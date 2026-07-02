const fs = require('fs');
let c = fs.readFileSync('src/components/ui/carousel.tsx', 'utf8');
c = c.replace("import { colors, Button } from '../../styles/global-styles';", "import { colors, Button } from '../../styles/global-styles';\nimport '../../utils/fontawesome-icons';");
fs.writeFileSync('src/components/ui/carousel.tsx', c);
