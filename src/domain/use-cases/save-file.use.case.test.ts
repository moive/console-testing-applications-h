import { SaveFile } from "./save-file.use.case";
import fs from "fs";
describe("SaveFileUseCase", () => {
	const customOptions = {
		fileContent: "custom content",
		fileDestination: "custom-outputs/file-destination",
		fileName: "custom-table-name",
		base: 8,
	};

	const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

	afterEach(() => {
		const outputFolderExists = fs.existsSync("outputs");
		if (outputFolderExists) fs.rmSync("outputs", { recursive: true });

		const customOuputFolderExists = fs.existsSync(
			customOptions.fileDestination
		);
		if (customOuputFolderExists)
			fs.rmSync(customOptions.fileDestination, { recursive: true });
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

	test("Should save file with custom values", () => {
		const saveFile = new SaveFile();

		const result = saveFile.execute(customOptions);
		const fileExists = fs.existsSync(customFilePath);
		const fileContent = fs.readFileSync(customFilePath, {
			encoding: "utf-8",
		});

		const resTxtFile =
			"\n" +
			"==================================\n" +
			"      Table of the " +
			customOptions.base +
			"\n" +
			"==================================\n" +
			"\n" +
			customOptions.fileContent;

		expect(result).toBe(true);
		expect(fileExists).toBe(true);
		expect(fileContent).toBe(resTxtFile);
	});
});
