import { yarg } from "./config/plugings/yargs.plugin";

console.log(process.argv);

console.log(yarg);

(async () => {
	await main();
})();

async function main() {
	console.log("Executing...");
}