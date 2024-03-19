import { CreateTable, CreateTableOptions } from "./create-table.use-case";
describe("CreateTableUseCase", () => {
	test("should create table with default values", () => {
		const createTable = new CreateTable();

		const table = createTable.execute({ base: 2 });
		const rows = table.split("\n").length;
		console.log(table);

		expect(createTable).toBeInstanceOf(CreateTable);
		expect(table).toContain("2 x 0 = 0");
		expect(table).toContain("2 x 1 = 2");
		expect(rows).toBe(11);
	});

	test("should create table with custom values", () => {
		const options: CreateTableOptions = {
			base: 3,
			limit: 20,
		};
		const createTable = new CreateTable();
		const table = createTable.execute(options);

		const rows = table.split("\n").length;
		const size = options.limit! + 1;

		expect(table).toContain("3 x 1 = 3");
		expect(table).toContain("3 x 10 = 30");
		expect(table).toContain("3 x 20 = 60");
		expect(options.base).toBe(3);
		expect(options.limit).toBe(20);
		expect(rows).toBe(size);
	});
});
