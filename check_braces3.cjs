const fs = require('fs');

try {
  const content = fs.readFileSync('C:\\Users\\Admin\\OneDrive\\Desktop\\wolf-ai\\src\\components\\CentralPanel.tsx', 'utf8');

  let round = 0;   // ()
  let curly = 0;   // {}

  let inString = false;
  let stringChar = '';
  
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      
      if (inString) {
        if (char === stringChar && line[j-1] !== '\\') {
          inString = false;
        }
        continue;
      }
      
      if (char === "'" || char === '"' || char === '`') {
        inString = true;
        stringChar = char;
        continue;
      }
      
      if (char === '(') round++;
      if (char === ')') round--;
      if (char === '{') curly++;
      if (char === '}') {
        curly--;
        if (curly === 0) { console.log(`Curly dropped to 0 at line ${i+1}`); }
      }
    }
  }

} catch(e) { console.error(e); }
