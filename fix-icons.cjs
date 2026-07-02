const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'react-pages', 'home.tsx');
const jobsPath = path.join(__dirname, 'src', 'react-pages', 'jobs.tsx');

let home = fs.readFileSync(homePath, 'utf8');
if (!home.includes('faRocket')) {
  home = home.replace(
    "import '../i18n';\nimport '../i18n';",
    "import '../i18n';\nimport '../i18n';\nimport { faRocket, faUsers } from '@fortawesome/free-solid-svg-icons';"
  );
  fs.writeFileSync(homePath, home);
}

let jobs = fs.readFileSync(jobsPath, 'utf8');
if (!jobs.includes('faRocket')) {
  jobs = jobs.replace(
    "import '../i18n';\n",
    "import '../i18n';\nimport { faRocket, faUsers } from '@fortawesome/free-solid-svg-icons';\n"
  );
  fs.writeFileSync(jobsPath, jobs);
}
