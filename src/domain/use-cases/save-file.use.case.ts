import fs from "fs";

export interface SaveFileUseCase {
	execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
	fileContent: string;
	fileDestination?: string;
	fileName?: string;
	base: number;
}

export class SaveFile implements SaveFileUseCase {
	constructor /** repository: StorageRepository */() {}

	execute({
		fileContent,
		base,
		fileDestination = "outputs",
		fileName = "table",
	}: SaveFileOptions): boolean {
		try {
			const headerMessage = `
==================================
      Table of the ${base}
==================================\n
`;

			fileContent = headerMessage + fileContent;

			fs.mkdirSync(fileDestination, { recursive: true });
			fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	}
}
