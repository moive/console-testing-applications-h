import { mkdirSync, writeFileSync } from "fs";
import { yarg } from "./config/plugings/yargs.plugin";

// console.log(yarg);
const { b, l: limit, s: showTable } = yarg;

let outputMessage = "";
const base = b ?? 5;
const headerMessage = `
==================================
       Table of the ${base}
==================================\n
`;

for (let i = 0; i <= limit; i++) {
	outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;
if (showTable) console.log(outputMessage);
console.log("File created");
const outputPath = `outputs`;
mkdirSync(outputPath, { recursive: true });
writeFileSync(`outputs/table-${base}.txt`, outputMessage);
