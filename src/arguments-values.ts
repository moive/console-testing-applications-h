import { yarg } from "./config/plugings/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

console.log(process.argv);

console.log(yarg);

(async () => {
	await main();
})();

async function main() {
	const { b: base, l: limit, s: showTable } = yarg;
	ServerApp.run({ base, limit, showTable });
}
