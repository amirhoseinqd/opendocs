const fileSystem = require('fs');

// Read the colors.json file
const colorsData = fileSystem.readFileSync('config.json', 'utf8');
const config = JSON.parse(colorsData);

// Generate the SCSS code
let scssCode = '';

Object.entries(config.colors).forEach(([variableName, colorValue]) => {
  scssCode += `$${variableName}: ${colorValue};\n`;
});

// Write the SCSS code to a file
fileSystem.writeFileSync('src/css/variables.scss', scssCode, 'utf8');

console.log('Color variables generated successfully!');
