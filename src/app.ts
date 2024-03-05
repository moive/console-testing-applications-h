import { mkdirSync, writeFileSync } from "fs";

let outputMessage = "";
const base = 5;
const headerMessage = `
==================================
       Table of the ${base}
==================================\n
`;

for (let i = 0; i <= 10; i++) {
	outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;
console.log(outputMessage);

const outputPath = `outputs`;
mkdirSync(outputPath, { recursive: true });
writeFileSync(`outputs/table-${base}.txt`, outputMessage);
