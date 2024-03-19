import { SaveFile } from "./save-file.use.case";
import fs from "fs";
describe("SaveFileUseCase", () => {
	afterEach(() => {
		fs.rmSync("outputs", { recursive: true });
	});

	test("Should save the file with default values", () => {
		const saveFile = new SaveFile();
		const filePath = "outputs/table.txt";
		const options = {
			fileContent: "test content",
			base: 5,
		};

		const result = saveFile.execute(options);

		const fileExists = fs.existsSync(filePath);
		const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
		const resTxtFile =
			"\n" +
			"==================================\n" +
			"      Table of the 5\n" +
			"==================================\n" +
			"\n" +
			options.fileContent;
		console.log({ fileContent });

		expect(result).toBe(true);
		expect(fileExists).toBe(true);
		expect(fileContent).toBe(resTxtFile);
	});
});
