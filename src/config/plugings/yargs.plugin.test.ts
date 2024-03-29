const runCommand = async (args: string[]) => {
	process.argv = [...process.argv, ...args];
	const { yarg } = await import("./yargs.plugin");
	return yarg;
};

describe("Test yargs.plugin.ts", () => {
	test("Should return default values", async () => {
		const argv = await runCommand(["-b", "5"]);
		console.log(process.argv);

		expect(argv).toEqual(
			expect.objectContaining({
				b: 5,
				l: 10,
				s: false,
				n: "multiplication-table",
				d: "outputs",
			})
		);
	});
});
